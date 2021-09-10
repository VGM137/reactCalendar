import React, {useRef, useCallback, useState, useMemo, useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { scrollingMonth } from "../actions";
import '../assets/styles/components/DayNumber.scss'

const DayNumber = ({number, month, lastDay, start}) => {

  const currentDate = useSelector(state => state.currentDate)
  const windowSize = useSelector(state => state.windowSize)

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
    console.log(currentTarget.classList[1])
    if(currentTarget.classList[1]==currentMonth && currentTarget.innerText == currentDay){
      currentTarget.scrollIntoView({block: "center", behavior: "smooth"})
      console.log('this is cb')
      console.log(currentTarget)
    }
    if(currentTarget) observer.observe(currentTarget)

    return () => {
      if(currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, options])

  const handleLoad = (number) => {
    console.log(number)
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