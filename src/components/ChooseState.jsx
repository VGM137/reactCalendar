import React from "react";
import { connect } from "react-redux";
import { currentState } from "../actions";
import '../assets/styles/components/ChooseState.scss'

const ChooseState = (props) => {

  let isTested = props.state

  const handleState = (e) =>{
    if(e.target.id === 'suspicious-state'){
      document.getElementById('tested-state').classList.remove('active-button')
      e.target.classList.add('active-button')
      props.currentState(false)
    }else if(e.target.id === 'tested-state'){
      document.getElementById('suspicious-state').classList.remove('active-button')
      e.target.classList.add('active-button')
      props.currentState(true)
    }
  }
  
  return (
    <div id='choose-state' className='choose-state'>
      <h1 id='choose-state-title' className='choose-state-title'>Monitorean tu estado de salud</h1>
      <h2 id='question-description' className='question-description'>El COVID-19 se desarrolla durante un periodo aproximado de 28 días. Este calendario te ayudará a darle seguimiento al proceso. También encontrarás información que te servirá para conocer las diferencias entre una prueba PCR y una de antigenos, así como el mejor momento para hacerte alguna de ellas.</h2>
      <h3 id='question' className='question'>Selecciona una de la siguientes opciones</h3>
      <button 
        id='suspicious-state'
        className='suspicious-state active-button'
        onClick={(e) => handleState(e)}
        >Sospecho que tengo COVID-19
      </button>
      <button 
        id='tested-state'
        className='tested-state'
        onClick={(e) => handleState(e)}
        >Mi prueba de COVID-19 salió positiva
      </button>
      {isTested
        ?
          <h3 id='instructions' className='instructions'>Haz clic en el calendario el día que te hiciste la prueba.</h3>
        :
          <h3 id='instructions' className='instructions'>Haz clic en el calendario el día que crees haberte contagiado.</h3>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state.state
  }
}

const dispatchStateToProps = {
  currentState,
}

export default connect(mapStateToProps, dispatchStateToProps)(ChooseState)