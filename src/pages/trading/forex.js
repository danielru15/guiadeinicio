import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'
const Forex = () => {
  setTimeout(function(){
    Swal.fire({
      title: '¡Regístrate aquí!',
      text:'Lo primero que debes hacer antes de ver todo el contenido es registrarte en Libertex para poder operar este mercado',
    showConfirmButton: false,
    footer:'<button role="button" class="SwalBtn1 customSwalBtn" tabindex="0"><a href="https://fwd.cx/d49o1slVuk1N" >Abrir cuenta</a></button>'
    })

},1000)
  useEffect(() => {
    AOS.init({duration: 1500,
    easy:'ease-in-out'})
    AOS.refresh();

}, [])
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'forex'}/>
             
              <div className='blanco' data-aos="fade-up"> 
              <div className='flex-center'>
              <h2>Como crear y configurar nuestra cuenta de LIBERTEX (broker)</h2>
                <a href="https://fwd.cx/d49o1slVuk1N" className='button'>Abrir cuenta</a>
                </div>
                <iframe className="video" src="https://www.youtube.com/embed/9-RY5UgtiUo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="negro">
                 <h2>Como depositar en LIBERTEX (broker)</h2>
                <iframe className="video" src="https://www.youtube.com/embed/MlJ6d34jS1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
                <div className="blanco">
                    <h2 data-aos="fade-up">Como tomar señales de forex</h2>
                   <iframe className="video" src="https://www.youtube.com/embed/XThMLudtq20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="negro">
                    <h2>Como retirar capital de LIBERTEX (broker)</h2>
                    <iframe className="video" src="https://www.youtube.com/embed/N9xelCTpvj0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            
 
        </main>
    </Layout>
  )
}

export default Forex