import React from "react";
import { connect } from "react-redux";
import WeekDaysBar from "./WeekDaysBar";
import YearContainer from "./YearContainer";
import '../assets/styles/components/Carousel.scss'

const Carousel = () => {
  return(
    <div id='carousel' className='carousel'>
      <WeekDaysBar/>
      <YearContainer/>
    </div>
  )
}

export default connect(null, null)(Carousel)