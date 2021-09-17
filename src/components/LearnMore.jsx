import React from "react";
import { connect } from "react-redux";
import InfoComponent from "./InfoComponent";
import '../assets/styles/components/LearnMore.scss'

const LearnMore = () => {

  return(
    <div id='learnMore-section' className='learnMore-section'>
      <InfoComponent 
        title={'Interpretación de pruebas diagnósticas para SARS-CoV-2'}
        text={`${"Hasta ahora, la prueba más comúnmente utilizada y confiable para el diagnóstico de COVID-19 ha sido la prueba RT-PCR realizada utilizando hisopado nasofaríngeos u otras muestras del tracto respiratorio superior."} [...] ${"se detecta tan pronto como el primer día de los síntomas y alcanza su punto máximo en la primera semana de aparición de los síntomas."}
 
        ${'Por otro lado existen las pruebas de anticuerpos, también conocidas como serológicas, que consisten en una prueba sanguinea, estos "son positivos incluso el cuarto día después del inicio de los síntomas, los niveles más altos se producen en la segunda y tercera semana de enfermedad."'}`
        }
        link={'https://www.labguemes.com.ar/web/interpretacion-de-pruebas-diagnosticas-para-sars-cov-2'
        }
      />
      <InfoComponent 
        title={'Interpretación de pruebas diagnósticas para SARS-CoV-2'}
        text={`${"Hasta ahora, la prueba más comúnmente utilizada y confiable para el diagnóstico de COVID-19 ha sido la prueba RT-PCR realizada utilizando hisopado nasofaríngeos u otras muestras del tracto respiratorio superior."} [...] ${"se detecta tan pronto como el primer día de los síntomas y alcanza su punto máximo en la primera semana de aparición de los síntomas."}
 
        ${'Por otro lado existen las pruebas de anticuerpos, también conocidas como serológicas, que consisten en una prueba sanguinea, estos "son positivos incluso el cuarto día después del inicio de los síntomas, los niveles más altos se producen en la segunda y tercera semana de enfermedad."'}`
        }
        link={'https://www.labguemes.com.ar/web/interpretacion-de-pruebas-diagnosticas-para-sars-cov-2'
        }
      />
      <InfoComponent 
        title={'Interpretación de pruebas diagnósticas para SARS-CoV-2'}
        text={`${"Hasta ahora, la prueba más comúnmente utilizada y confiable para el diagnóstico de COVID-19 ha sido la prueba RT-PCR realizada utilizando hisopado nasofaríngeos u otras muestras del tracto respiratorio superior."} [...] ${"se detecta tan pronto como el primer día de los síntomas y alcanza su punto máximo en la primera semana de aparición de los síntomas."}
 
        ${'Por otro lado existen las pruebas de anticuerpos, también conocidas como serológicas, que consisten en una prueba sanguinea, estos "son positivos incluso el cuarto día después del inicio de los síntomas, los niveles más altos se producen en la segunda y tercera semana de enfermedad."'}`
        }
        link={'https://www.labguemes.com.ar/web/interpretacion-de-pruebas-diagnosticas-para-sars-cov-2'
        }
      />
    </div>
  )
};

export default connect(null, null)(LearnMore)