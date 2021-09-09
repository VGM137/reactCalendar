import React from "react";
import { connect } from "react-redux";
import graphic from '../assets/static/COVIDGraph.png'
import '../assets/styles/components/Graphic.scss'

const Graphic = () => {
  return(
    <div className="graphic-container" id="graphic-container">
      <img className="graphic" id="graphic" src={graphic}></img>
    </div>
  )
}

export default connect(null, null)(Graphic)