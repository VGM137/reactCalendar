import React, {useRef, useState, useMemo, useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { scrollingMonth } from "../actions";
import { displayRange } from "../actions";
import '../assets/styles/components/DayNumber.scss'

const DayNumber = ({number, month, lastDay, start}) => {

  const currentDate = useSelector(state => state.currentDate)
  const windowSize = useSelector(state => state.windowSize)
  const state = useSelector(state => state.state)

  const dispatch = useDispatch()
  
  let currentMonth = currentDate.currentMonth
  let currentDay = currentDate.currentDay
  if(currentDay < 10){
    currentDay = currentDay.charAt(1)
  }
  
  const isMobile = windowSize < 768

  const targetRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  const callbackFunction = entries => {
    const [entry] = entries
    if(entry.isIntersecting == true){
      dispatch(scrollingMonth(entry.target.classList[1]))
    }

    setVisible(entry.isIntersecting)
  }

  const options = useMemo(() => {
    return {
      root:null,
      rootMargin: '0px',
      threshold: 1
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    const currentTarget = targetRef.current
    if(currentTarget.classList[1]==currentMonth && currentTarget.innerText == currentDay){
      currentTarget.scrollIntoView({block: "center", behavior: "smooth"})
    }
    if(currentTarget) observer.observe(currentTarget)

    return () => {
      if(currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, options])

  const handleTestedClick = (e) =>{
    let yearContainer = document.getElementById('year-container')
    yearContainer.childNodes.forEach(child => child.childNodes[0].classList.remove('blue'))
    e.target.classList.add('blue')
    console.log('Tested')
    console.log(e)
    let top = e.target.offsetParent.offsetTop
    let left = e.target.offsetParent.offsetLeft/40
    dispatch(displayRange({
      top: left == 6 ? `${top}px` : `${top-40}px`,
      start: left == 6 ? 1 : left+2,
      end: left == 6 ? 2 : left+3,
      position: 'absolute',
      display: 'grid'
    }))
  }
  const handleSuspiciousClick = (e) =>{
    let yearContainer = document.getElementById('year-container')
    yearContainer.childNodes.forEach(child => child.childNodes[0].classList.remove('blue'))
    e.target.classList.add('blue')
    console.log('Suspicious')
    console.log(e)
    let top = e.target.offsetParent.offsetTop
    let left = e.target.offsetParent.offsetLeft/40
    dispatch(displayRange({
      top: `${top}px`,
      start: left+1,
      end: left+2,
      position: 'absolute',
      display: 'grid'
    }))
  }

  return(
    <>
      {isMobile 
        ?
          <div 
            ref={ targetRef }
            id='dayNumber-container'
            className={`
              dayNumber-container
              ${month}
              s${number}
              ${number == 1 ? 'first-round' : ''}
              ${number == lastDay ? 'last-round' : ''}
              ${month == currentMonth ? 'current-month' : ''}
              ${month == currentMonth && number == currentDay ? number : ''}
            `}
            style={{gridColumn: `${start}/${start+1}`}}
            onClick={state ? (e) => handleTestedClick(e) : (e) => handleSuspiciousClick(e)}
          >
            <p 
              id='dayNumber' 
              style={month == currentMonth && number == currentDay ? {backgroundColor: '#FF4C29', position:'relative'} : {}}
              className={`
                dayNumber
                ${month == currentMonth && number == currentDay ? 'current-day' : ''}
              `} >
                {number}
            </p>
          </div>
        :
          <div 
            ref={ targetRef }
            id='dayNumber-container'
            className={`
              dayNumber-container
              ${month}
              s${number}
              ${number == 1 ? 'first-round' : ''}
              ${number == lastDay ? 'last-round' : ''}
              ${month == currentMonth ? 'current-month' : ''}
              ${month == currentMonth && number == currentDay ? number : ''}
            `}
            onClick={state ? (e) => handleTestedClick(e) : (e) => handleSuspiciousClick(e)}
          >
            <p 
            id='dayNumber' 
            style={month == currentMonth && number == currentDay ? {backgroundColor: '#FF4C29'} : {}}
            className={`
              dayNumber
              ${month == currentMonth && number == currentDay ? 'current-day' : ''}
            `} >
              {number}
            </p>
          </div>
      }
    </>

  )
}


export default connect(null, null)(DayNumber);