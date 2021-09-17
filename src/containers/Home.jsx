import React from 'react';
import { connect } from 'react-redux'
import { windowSize } from '../actions';
import Header from '../components/Header';
import Graphic from '../components/Graphic';
import ChooseState from '../components/ChooseState';
import Carousel from '../components/Carousel';
import DisplayMonth from '../components/DisplayMonth';
import LearnMore from '../components/LearnMore';
import Footer from '../components/Footer';
import '../assets/styles/components/Home.scss'


const Home = (props) => {

  props.windowSize(window.innerWidth)

  window.addEventListener('resize', () => {
/*     let currentDay = document.getElementsByClassName('current-day')
    currentDay.scrollIntoView({block: "center", behavior: "smooth"}) */
    props.windowSize(window.innerWidth)
  })
  console.log(window)
  /* 
  console.log(window.innerWidth) */

  return (
    <>
    <section id='calendar' className='calendar'>
      <Header/>
      <Graphic/>
      <ChooseState/>
      <Carousel/>
      <DisplayMonth/>
      <LearnMore/>
      <Footer/>
    </section>
    </>
  )
};
const dispatchStateToPops = {
  windowSize
}

export default connect(null, dispatchStateToPops)(Home);
