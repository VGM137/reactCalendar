import React from "react";
import { connect } from "react-redux";
import '../assets/styles/components/WeekDaysBar.scss'

const WeekDaysBar = (props) => {

  let isMobile = props.windowSize < 768 
  let isDesk = props.windowSize >= 768 
  const year = props.currentDate.currentYear
  const parsedYear = parseInt(year)
  console.log(parseInt(year))
  console.log(typeof(parsedYear))
  let weekDaysLetter = []
  let twelveYearCalendar = []
  let lastDay;

  if(isDesk){
    const yearsArray = [parsedYear-1, parsedYear, parsedYear+1]
    console.log(yearsArray)
    yearsArray.forEach(year => {
      props.months.forEach(month => {
      
        let newDate = new Date(year, props.months.indexOf(month), 1)
        let firstWeekDay = new Date(year, props.months.indexOf(month), 1).getDay()
        
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
        allWeekDays.map(day => twelveYearCalendar.push(day.charAt(0)))
      })
      console.log(twelveYearCalendar)
  })
  }else{
    weekDaysLetter = props.weekDays.map(day => day.charAt(0))
  }

  let key = 0

  return(
    <div id='weekDay-background' className='weekDay-background'>
      <div id='weekDays-bar' className='weekDays-bar'>
        {isMobile 
          ?
            weekDaysLetter.map(day => {
              key+=1
              return(
                <div id='week-day' className='week-day' key={key}>
                  {day}
                </div>
              )
            })
          :
            twelveYearCalendar.map(day => {
              key+=1
              return(
                <div id='week-day' className='week-day' key={key}>
                  {day}
                </div>
              )
            })
        } 
      </div>
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