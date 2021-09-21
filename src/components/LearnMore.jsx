import React from "react";
import { connect } from "react-redux";
import InfoComponent from "./InfoComponent";
import '../assets/styles/components/LearnMore.scss'

const LearnMore = () => {

  return(
    <div id='learnMore-section' className='learnMore-section'>
      <h1 id='learnMore-intro' className='learnMore-intro'>
        Aprende más sobre el COVID-19, su comportamiento en tu cuerpo y las diferentes formas de detectarlo.
      </h1>
      <InfoComponent 
        title={'Interpretación de pruebas diagnósticas para SARS-CoV-2'}
        text={`${"Hasta ahora, la prueba más comúnmente utilizada y confiable para el diagnóstico de COVID-19 ha sido la prueba RT-PCR realizada utilizando hisopado nasofaríngeos u otras muestras del tracto respiratorio superior."} [...] ${"se detecta tan pronto como el primer día de los síntomas y alcanza su punto máximo en la primera semana de aparición de los síntomas."}

        ${'Por otro lado existen las pruebas de anticuerpos, también conocidas como serológicas, que consisten en una prueba sanguinea, estos "son positivos incluso el cuarto día después del inicio de los síntomas, los niveles más altos se producen en la segunda y tercera semana de enfermedad."'}`
        }
        link={'https://www.labguemes.com.ar/web/interpretacion-de-pruebas-diagnosticas-para-sars-cov-2'
        }
      />
      <InfoComponent 
        title={'¿Cuál es la diferencia entre dar positivo por COVID-19 y tener anticuerpos protectores?'}
        text={`${"¿Qué significa ser positivo por COVID-19? Inmunoglobulina M (IgM): las técnicas de detección de anticuerpos son fundamentalmente Enzimoinmunoanálisis (ELISA), Quimioluminiscencia y también inmunocromatográficas. Según los resultados, los valores de los anticuerpos IgM son los que luchan contra la infección en tu cuerpo. Si sale un resultado positivo significa que el virus está activo (positivo). Estos anticuerpos se encuentran principalmente en la sangre y en el líquido linfático. Puede darse a partir del día 7 de la sintomatología, si bien a partir del día 12-14 es más fiable.¿Qué significa que tu cuerpo desarrolle anticuerpos protectores?Inmunoglobulina G (IgG): es el tipo de anticuerpo que más abunda en el cuerpo. Se encuentra en la sangre y en otros fluidos, y brinda protección contra las infecciones bacterianas y víricas. La IgG puede tardar un tiempo en formarse después de una infección o vacunación. Se detectan más tardíamente, a partir del día 10, si bien a partir del día 15-20 encontraremos más resultados positivos."}
 
        ${'La doctora Maria Van Kerkhove, jefa de la unidad de enfermedades emergentes de la OMS, aseguró que "las pruebas de anticuerpos podrán medir el nivel de presencia serológica, pero no significa que alguien con anticuerpos sea inmune".'}`
        }
        link={'https://as.com/deporteyvida/2020/05/08/portada/1588964416_009467.html'
        }
      />
    </div>
  )
};

export default connect(null, null)(LearnMore)