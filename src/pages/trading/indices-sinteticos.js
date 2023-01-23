import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Indices = () => {
  useEffect(() => {
    AOS.init({duration: 1500,
    easy:'ease-in-out'})
    AOS.refresh();

}, [])
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'ÍNDICES SINTÉTICOS'}/>
             <div className="blanco">
                <div className='flex-center'>
                <h2>Como crear nuestra cuenta EN DERIV (BROKER) y enlazarla al MT5?</h2>
                <a href="https://record.binary.com/_qKzG7FPV9x-6tyDIijdDK2Nd7ZgqdRLk/1/" className='button'>Abrir cuenta</a>
                </div>
                <iframe className="video" src="https://www.youtube.com/yXRD3sM5LKU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div> 
              <div className="negro" data-aos="fade-up">
                <h2>Como depositar en Deriv (BROKER)</h2>
                <iframe className="video" src="https://www.youtube.com/embed/S186V3duA3w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco">
                <h2>Como tomar señales de índices sintéticos</h2>
                <iframe className="video" src="https://www.youtube.com/embed/1BmkUo_TkRk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="negro" data-aos="fade-up">
                <h2>Como retirar mis fondos de Deriv(BROKER)</h2>
                <iframe className="video" src="https://www.youtube.com/embed/JQdeqfWVVhc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco" data-aos="fade-up">
                <h2>PLAN EDUCATIVO</h2>
                <iframe className="video" src="https://www.youtube.com/embed/hkRDrCEwMPw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

             
        </main>
    </Layout>
  )
}

export default Indices