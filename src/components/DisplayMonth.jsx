import React from "react";
import { connect } from "react-redux";
import '../assets/styles/components/DisplayMonth.scss'

const DisplayMonth = (props) => {
  return(
    <div id='display-month' className='display-month'>
      <h2 id='month-text' className='month-text'>
        {props.scrollingMonth}
      </h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    scrollingMonth: state.scrollingMonth,
  }
}

export default connect(mapStateToProps, null)(DisplayMonth)