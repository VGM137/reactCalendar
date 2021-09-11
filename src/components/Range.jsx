import React from "react";
import { connect } from "react-redux";
import '../assets/styles/components/Range.scss'

const Range = (props) => {

  const { top, start, end, left, position, display } = props.rangeParameters
  const isMobile = props.windowSize < 768

  let rangeNumbers = []
  for(let i = 0; i < 28 ; i++){
    rangeNumbers.push(i)
  }
  let key = 0

  return(
    <>
    {isMobile
      ?
        <div id='ranges' className={`ranges`} style={{top: top, position: position, display: display}}>
        {rangeNumbers.map((range) => {
          key+=1
          return(
            <div
            id='range'
            className={`range r${range+1}`}
            key={key}
            style={key == 1 ? {gridColumn: `${start} / ${end}`} : {}}
            >
            </div>
          )}
        )}
        </div>
      :
        <div id='ranges' className={`ranges`} style={{left: left, position: position, display: display}}>
        {rangeNumbers.map((range) => {
          key+=1
          return(
            <div
            id='range'
            className={`range r${range+1}`}
            key={key}
            >
            </div>
          )}
        )}
        </div>
    }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize,
    rangeParameters: state.rangeParameters

  }
}

export default connect(mapStateToProps, null)(Range)
