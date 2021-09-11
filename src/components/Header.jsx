import React from "react";
import { connect } from "react-redux";
import { currentDate } from "../actions";

import '../assets/styles/components/Header.scss'

const Header = (props) => {

  const date = new Date()
  let useDate = date.toDateString()

  let month = date.getMonth()
  let currentMonth = props.months[month]

  let weekDay = date.getDay()
  let currentWeekDay = props.weekDays[weekDay]
  let splitDate = useDate.split(' ')

  let numberDay = splitDate[2]
  let year = splitDate[3]

  let currentDate = {
    string:`${currentWeekDay} ${numberDay < 10 ? numberDay.charAt(1) == 1 ? numberDay.charAt(1)+'ro' : numberDay : numberDay} de ${currentMonth.slice(0, 3)} ${year}`,
    monthIndex: month,
    currentYear: year,
    currentMonth: currentMonth,
    currentDay: numberDay
  }

  props.currentDate(currentDate)

  return (
    <div className="header" id="header">
      <h2 id="date" className="date">{currentDate.string}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    months: state.months,
    weekDays: state.weekDays
  }
}

const dispatchStateToProps ={
  currentDate,
}

export default connect(mapStateToProps, dispatchStateToProps)(Header)
