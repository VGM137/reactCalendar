import React, { useEffect } from "react";
import { connect } from "react-redux";
import '../assets/styles/components/DisplayMonth.scss'

const DisplayMonth = (props) => {
  let year = props.scrollingMonth.year

  const handleClick = (e) => {
    let today = document.getElementsByClassName('current-day')
    console.log(today)
    today[0].scrollIntoView({block: "center", behavior: "smooth"})
    e.target.classList.add('active-button')
    setTimeout(() => {
      e.target.classList.remove('active-button')
    }, 500);
  }

  return(
    <div id='display-month' className='display-month'>
      <button id='goToday' className='goToday' onClick={handleClick}>
        Hoy
      </button>
      <h2 id='month-text' className='month-text'>
        {`${props.scrollingMonth.month} ${year}`}
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