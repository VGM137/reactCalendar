import React from "react";
import { connect } from "react-redux";
import '../assets/styles/components/WeekDaysBar.scss'

const WeekDaysBar = (props) => {

  let isMobile = props.windowSize < 768 
  let isDesk = props.windowSize >= 768 
  let weekDaysLetter = []
  let lastDay;

  if(isDesk){
    props.months.forEach(month => {

      let newDate = new Date(props.currentDate.currentYear, props.months.indexOf(month), 1)
      let firstWeekDay = new Date(props.currentDate.currentYear, props.months.indexOf(month), 1).getDay()
      
      lastDay = new Date(newDate.getFullYear(), newDate.getMonth() +1, 0).getDate();
      
      let allWeekDays = []
      if(firstWeekDay != 0){
        let mapWeekDays = props.weekDays.slice(firstWeekDay, props.weekDays.length)
        mapWeekDays.forEach(day => allWeekDays.push(day))
        do{
          props.weekDays.forEach(day => allWeekDays.push(day))
        }while(allWeekDays.length <= lastDay)
      }else{
        do{
          props.weekDays.forEach(day => allWeekDays.push(day))
        }while(allWeekDays.length <= lastDay)
      }
      if(allWeekDays.length > lastDay){
        allWeekDays.splice(lastDay, (allWeekDays.length-lastDay))
      }
      allWeekDays.map(day => weekDaysLetter.push(day.charAt(0)))
      console.log(weekDaysLetter)
    })
  }else{
    weekDaysLetter = props.weekDays.map(day => day.charAt(0))
    console.log(weekDaysLetter)
  }

  let key = 0

  return(
    <div id='weekDays-bar' className='weekDays-bar'>
      {weekDaysLetter.map(day => {
          key+=1
          return(
            <div id='week-day' className='week-day' key={key}>
              {day}
            </div>
            )}
          )
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize,
    months: state.months,
    weekDays: state.weekDays,
    currentDate: state.currentDate,
  }
}


export default connect(mapStateToProps, null)(WeekDaysBar)