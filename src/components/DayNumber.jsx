import React, {useRef, useCallback, useState, useMemo, useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { scrollingMonth } from "../actions";
import '../assets/styles/components/DayNumber.scss'

const DayNumber = ({number, month, lastDay, start}) => {
/*   const { ref, inView, entry } = useInView({
    threshold: 0,
    
  }); */
  const currentDate = useSelector(state => state.currentDate)
  const windowSize = useSelector(state => state.windowSize)

  const dispatch = useDispatch()
/*   dispatch(scrollingMonth(entry)) */
  
  let currentMonth = currentDate.currentMonth
  let currentDay = currentDate.currentDay
  
  const isMobile = windowSize < 768

  const targetRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  const callbackFunction = entries => {
    const [entry] = entries
    if(entry.isIntersecting == true){
      console.log(entry)

      console.log(entry.target.classList[1])
    }/* else if(entry.isIntersecting == false){
      console.log(entry.target.classList[1])

    } */
    /* console.log(entry) */
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
    if(currentTarget) observer.observe(currentTarget)
    console.log(isVisible)

    return () => {
      if(currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, options])

/*   const ref = useRef();
  const [inViewRef, inView] = useInView(); */

/*   const setRefs = useCallback(
    (node) => {
      ref.current = node;
      ;
      dispatch(scrollingMonth(inViewRef(node)))
      console.log(node)
    },
    [inViewRef],
  ); */

  /* console.log(number) */
  
/*   const handleRef = (node) => {

    console.log(node.classList[1])
  } */
  

  return(
    <>
      {isMobile 
        ?
          <div 
            ref={number == 15 ? targetRef : null}
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
            style={{gridColumn: `${start}/${start+1}`}}>
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
        :
          <div 
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