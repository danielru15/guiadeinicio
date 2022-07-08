import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Basicos = () => {
  useEffect(() => {
    AOS.init({duration: 1500,
    easy:'ease-in-out'})
    AOS.refresh();

}, [])
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'basicos'}/>
             <div className="blanco">
                <h2>PROSPECTAR</h2>
                <iframe className="video" src="https://www.youtube.com/embed/SaBpKA9ytF4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div> 
              <div className="negro" data-aos="fade-up">
                <h2>CONTACTAR</h2>
                <iframe className="video" src="https://www.youtube.com/embed/m78-i0MZeCE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco">
                <h2>PRESENTAR</h2>
                <iframe className="video" src="https://www.youtube.com/embed/5s58aLYIFQs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="negro" data-aos="fade-up">
                <h2>CIERRE</h2>
                <iframe className="video" src="https://www.youtube.com/embed/sfzGmuq3eKc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco" data-aos="fade-up">
                <h2>SEGUIMIENTO</h2>
                <iframe className="video" src="https://www.youtube.com/embed/kONze-of-0Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="negro" data-aos="fade-up">
                <h2>REDES SOCIALES</h2>
                <iframe className="video" src="https://www.youtube.com/embed/73LslKjWMuA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco" data-aos="fade-up">
                <h2>PROMOVER EVENTOS</h2>
                <iframe className="video" src="https://www.youtube.com/embed/t5uaAqbQuVU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

             
        </main>
    </Layout>
  )
}

export default Basicos