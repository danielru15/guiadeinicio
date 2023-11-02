import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Indices = () => {
  setTimeout(function(){
    Swal.fire({
    title: '¡Regístrate aquí!',
    text:'Lo primero que debes hacer antes de ver todo el contenido es registrarte en Deriv para poder operar este mercado',
    showConfirmButton: false,
    footer:'<button role="button" class="SwalBtn1 customSwalBtn" tabindex="0"><a href="https://record.binary.com/_qKzG7FPV9x-6tyDIijdDK2Nd7ZgqdRLk/1/" >Abrir cuenta de forma segura</a></button>'
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
             <Baner titulo={'ÍNDICES SINTÉTICOS'}/>
             <div className="blanco">
                <div className='flex-center'>
                <h2>Como crear nuestra cuenta EN DERIV (BROKER) y enlazarla al MT5?</h2>
                <a href="https://record.binary.com/_qKzG7FPV9x-6tyDIijdDK2Nd7ZgqdRLk/1/" className='button'>Abrir cuenta</a>
                </div>
                <iframe className="video" src="https://www.youtube.com/embed/H7KhegGycS4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div> 
              <div className="negro" data-aos="fade-up">
                <h2>Como depositar en Deriv (BROKER) Explicado en el video de arriba</h2>
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