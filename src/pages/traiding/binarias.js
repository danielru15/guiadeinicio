import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Binarias = () => {
  useEffect(() => {
    AOS.init({duration: 1500,
    easy:'ease-in-out'})
    AOS.refresh();

}, [])
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'BINARIAS'}/>
             
              <div className='blanco'>
                <h2>CONOCIENDO POCKET OPTION</h2>
                <iframe className="video" src="https://www.youtube.com/embed/G7Br6xJ93ng" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
              </div>
              <div className='negro' data-aos="fade-up">
                <h2>Como verificar y configurar POCKET OPTION</h2>
                <iframe className="video" src="https://www.youtube.com/embed/1Y9_JGHGlGk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className='blanco' data-aos="fade-up">
                <h2>Como depositar en POCKET OPTION</h2>
                <iframe className="video" src="https://www.youtube.com/embed/-9L0hm-kGEs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className='negro'>
                <h2>Como retirar de POCKET OPTION</h2>
                <iframe className="video" src="https://www.youtube.com/embed/i6t3lApqS0k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
              </div>
              
              
 
        </main>
    </Layout>
  )
}

export default Binarias