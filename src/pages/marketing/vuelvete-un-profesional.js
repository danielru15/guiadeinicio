import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';

const VuelvetePro = () => {
  useEffect(() => {
    AOS.init({duration: 1500,
    easy:'ease-in-out'})
    AOS.refresh();

}, [])
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'Vuelvete un profesional'}/>
             <div className="blanco">
                <h2>AGENDA PRODUCTIVA</h2>
                <iframe className="video" src="https://www.youtube.com/embed/P6pA3D76jtA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div> 
              <div className="negro" data-aos="fade-up">
                <h2>DUPLICACIÓN </h2>
                <iframe className="video" src="https://www.youtube.com/embed/8tVl9YNm4Z0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco">
                <h2>SEGUIMIENTO</h2>
                <iframe className="video" src="https://www.youtube.com/embed/nGtwS0IUf4k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="negro" data-aos="fade-up">
                <h2>COMO APALANCARSE DEL SISTEMA Y POR QUE HACERLO</h2>
                <iframe className="video" src="https://www.youtube.com/embed/7E6jqYR79mI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
        </main>
    </Layout>
  )
}

export default VuelvetePro