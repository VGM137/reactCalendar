import React from 'react';
import { connect } from 'react-redux'
import { windowSize } from '../actions';
import Header from '../components/Header';
import Graphic from '../components/Graphic';
import ChooseState from '../components/ChooseState';
import Carousel from '../components/Carousel';
import DisplayMonth from '../components/DisplayMonth';
import '../assets/styles/components/Home.scss'


const Home = (props) => {

  props.windowSize(window.outerWidth)

  window.addEventListener('resize', () => props.windowSize(window.outerWidth))

  return (
    <>
    <section id='calendar' className='calendar'> 
      <Header/>
      <Graphic/>
      <ChooseState/>
      <Carousel/>
      <DisplayMonth/>
    </section>
    </>
  )
};
const dispatchStateToPops = {
  windowSize
}

export default connect(null, dispatchStateToPops)(Home);
