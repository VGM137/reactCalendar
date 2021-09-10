import React from "react";
import { connect } from "react-redux";
import { currentState } from "../actions";
import '../assets/styles/components/ChooseState.scss'

const ChooseState = (props) => {

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
      <h2 id='question-description' className='question-description'>Para monitorear el proceso de tu enfermedad indica cuál es el estado actual en el que te encuentras.</h2>
      <h3 id='question' className='question'>Selecciona una de la siguientes opciones</h3>
      <button 
        id='suspicious-state'
        className='suspicious-state active-button'
        onClick={(e) => handleState(e)}
        >Sospecho que tengo COVID-19</button>
      <button 
        id='tested-state'
        className='tested-state'
        onClick={(e) => handleState(e)}
        >Mi prueba de COVID-19 salió positiva</button>
    </div>
  )
}

const dispatchStateToProps = {
  currentState,
}

export default connect(null, dispatchStateToProps)(ChooseState)