import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../assets/styles/components/InfoComponent.scss'

const infoComponent = ({title, text, link}) => {

  const windowSize = useSelector(state => state.windowSize)
  const isMobile = windowSize < 768

  const handleSeeMore = (e) => {
    let target = e.target
    if(target.id == 'info-seeMore'){
      let infoText = target.parentElement.children[0]
      let infoSeeMore = target
      infoText.style.maxHeight = '100%'
      infoSeeMore.style.display = 'none'
    }else if(target.id == 'info-seeMore-text'){
      let infoText = target.parentElement.parentElement.children[0]
      let infoSeeMore = target.parentElement
      infoText.style.maxHeight = '100%'
      infoSeeMore.style.display = 'none'
    }
  }

  const handleSeeLess = (e) => {
    let infoText = document.getElementById('info-text')
    let infoSeeMore = document.getElementById('info-seeMore')
    infoText.style.maxHeight = '100px'
    infoSeeMore.style.display = 'flex'
  }

  return(
    <>
      {isMobile
        ?
          <div id='info-wrap' className='info-wrap'>
            <h1 id='info-title' className='info-title'>{title}</h1>
            <div id='info-content' className='info-content'>
              <div id='info-text' className='info-text'>
                {text}
                <h3 id='info-seeLess' className='info-seeLess' onClick={handleSeeLess}>Ver menos</h3>
              </div>
              <div id='info-seeMore' className='info-seeMore' onClick={handleSeeMore}>
                <h3 id='info-seeMore-text' className='info-seeMore-text'>Ver más</h3>
              </div>
            </div>
            <a href={link} id='info-link' className='info-link'>Ir al artículo...</a>
          </div>
        :
          <div id='info-wrap' className='info-wrap'>
            <h1 id='info-title' className='info-title'>{title}</h1>
            <div id='info-content' className='info-content'>
              <h2 id='info-text' className='info-text'>{text}</h2>
            </div>
            <a href={link} id='info-link' className='info-link'>Ir al artículo...</a>
          </div>
      }
    </>
  )
};

/* const mapStateToProps = (state) => {
  windowSize: state.windowSize
} */

export default connect(null, null)(infoComponent)