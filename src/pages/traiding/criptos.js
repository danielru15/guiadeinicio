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
                <h2>CONOCIENDO BINANCE</h2>
                <iframe className="video" src="https://www.youtube.com/embed/rsRWhRBNyKc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
              </div>
              <div className='negro' data-aos="fade-up">
                <h2>Como tomar señales de futuros en criptomonedas</h2>
                <iframe className="video" src="https://www.youtube.com/embed/NqLTdKOV-bw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
 
        </main>
    </Layout>
  )
}

export default Criptos