import React from "react";
import { connect } from "react-redux";
import '../assets/styles/components/Range.scss'

const Range = (props) => {

  const { top, start, end, position, display } = props.rangeParameters

  let rangeNumbers = []
  for(let i = 0; i < 28 ; i++){
    rangeNumbers.push(i)
  }
  let key = 0
  
  return(
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
  )
}

const mapStateToProps = (state) => {
  return {
    rangeParameters: state.rangeParameters
  }
}

export default connect(mapStateToProps, null)(Range)