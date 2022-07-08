import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Criptos = () => {
  useEffect(() => {
    AOS.init({duration: 1500,
    easy:'ease-in-out'})
    AOS.refresh();

}, [])
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'CRIPTOMONEDAS'}/>
             
              <div className='blanco'>
              <div className='flex-center'>
              <h2>CONOCIENDO BINANCE</h2>
                <a href="https://accounts.binance.com/es-LA/register?ref=FGEUS97W" className='button'>Abrir cuenta</a>
                </div>
                <iframe className="video" src="https://www.youtube.com/embed/rsRWhRBNyKc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
              </div>
              <div className='negro' data-aos="fade-up">
                <h2>Como tomar señales <br/>de futuros en criptomonedas</h2>
                <iframe className="video" src="https://www.youtube.com/embed/NqLTdKOV-bw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco" data-aos="fade-up">
                <h2>PLAN EDUCATIVO</h2>
                <iframe className="video" src="https://www.youtube.com/embed/ASzLGiHL0wI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
 
        </main>
    </Layout>
  )
}

export default Criptos