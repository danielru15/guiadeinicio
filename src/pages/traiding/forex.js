import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Forex = () => {
  useEffect(() => {
    AOS.init({duration: 2000,
    easy:'ease-in-out'})
    AOS.refresh();

}, [])
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'forex'}/>
             
              <div className='blanco' data-aos="fade-up"> 
                <h2>Como crear y configurar nuestra cuenta de LIBERTEX</h2>
                <iframe className="video" src="https://www.youtube.com/embed/9-RY5UgtiUo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="negro">
                 <h2>Como depositar en LIBERTEX</h2>
                <iframe className="video" src="https://www.youtube.com/embed/MlJ6d34jS1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
                <div className="blanco">
                    <h2 data-aos="fade-up">Como tomar señales de forex</h2>
                   <iframe className="video" src="https://www.youtube.com/embed/XThMLudtq20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="negro">
                    <h2>Como retirar capital de LIBERTEX</h2>
                    <iframe className="video" src="https://www.youtube.com/embed/N9xelCTpvj0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            
 
        </main>
    </Layout>
  )
}

export default Forex