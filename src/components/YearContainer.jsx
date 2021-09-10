import React from "react";
import { connect } from "react-redux";
import DayNumber from "./DayNumber";
import Range from "./Range";
import '../assets/styles/components/YearContainer.scss'

const YearContainer = (props) => {
  
  let spanishMonths = props.months

  let year = props.currentDate.currentYear
  let weekDays = props.weekDays
  
  let arrayOfDays = []

  let firstWeekDay = new Date(year, 0, 1).getDay();

  spanishMonths.forEach(month => {    
    let newDate = new Date(year, spanishMonths.indexOf(month), 1)
    let lastDay = new Date(newDate.getFullYear(), newDate.getMonth() +1, 0).getDate();

    for(let i = 1; i <= lastDay; i++){
      if(i == 1 && month == 'Enero'){
        let day = {
          number: i,
          month: month,
          lastDay: lastDay,
          start: firstWeekDay
        } 
        arrayOfDays.push(day)
      }else{
        let day = {
          number: i,
          month: month,
          lastDay: lastDay,
          start: ''
        }
        arrayOfDays.push(day)
      }
    }
  })
  
  let key = 0

  return(
    <>
    <div id='year-container' className='year-container'>
      {
      arrayOfDays.map(day => {
        key+=1
        return(
          <DayNumber 
            number={day.number} 
            month={day.month} 
            lastDay={day.lastDay} 
            key={key}
            start={day.start}
          />
          )}
      )}
      <Range/>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    months: state.months,
    windowSize: state.windowSize,
    weekDays: state.weekDays,
    currentDate: state.currentDate,
  }
}

export default connect(mapStateToProps, null)(YearContainer)