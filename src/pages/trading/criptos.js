import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'

const Criptos = () => {
  setTimeout(function(){
    Swal.fire({
      title: '¡Cuidado te registras en un link falso!',
      text:'Te recomendamos hacer click en abrir cuenta de forma segura.',
    showConfirmButton: false,
    footer:'<button role="button" class="SwalBtn1 customSwalBtn" tabindex="0"><a href="https://accounts.binance.com/es-LA/register?ref=FGEUS97W" >Abrir cuenta</a></button>'
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
              <div className='plan-educativo'>
                <h2>Algunos basicos importantes</h2>
                <div className='text-align'>
                <p>A.<a href="https://wow.berules.com/academy-player/609210ce2a2050002016969a">Basicos 1</a></p>
                <p>B.<a href="https://wow.berules.com/academy-player/6079b097774670001f04e782">Basicos 2</a></p>
                <p>C.<a href="https://wow.berules.com/academy-player/60a405b98b02e9001f445e11">Binance</a></p>
                <p>D.<a href="https://wow.berules.com/academy-player/5f7cbf9a462ee9001f64b67e">Usando Relic</a></p>
                <p>E.<a href="https://wow.berules.com/academy-player/60e6a3b54737fa001f98f276">DEFI</a></p>
                <p>F.<a href="https://wow.berules.com/academy-player/60a59ab76d29f4001fc0b4bc">Metamask,Trust</a></p>
                </div>
            </div>
 
        </main>
        
    </Layout>
  )
}

export default Criptos