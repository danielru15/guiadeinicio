import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Traiding = () => {
    useEffect(() => {
        AOS.init({duration: 5000,
        easy:'ease-in-out'})
        AOS.refresh();

    }, [])
  return (
    <Layout>
        <main className="body">
            <Baner titulo={'GUíA DE INICIO Traiding'}/>
           {
           /*  <iframe className="video" src="https://www.youtube.com/embed/S5XPkkiINfE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe> 
            <div className='plan-educativo'>
                <h2>Escoge tu mercado favorito</h2>
          
            </div>
            */}
            <div className='tiposMercado'>
                <h2 data-aos="fade-left">TIPOS DE MERCADOS</h2>
                <div className='flex-1' data-aos="fade-up">
                <div>
                        <img src="https://www.portafolio.co/files/article_multimedia/uploads/2022/06/10/62a39d35ba7bd.jpeg" alt="" />
                        <h3>CRIPTOMONEDAS</h3>
                        <Link to={'/trading/criptos'} className="button">Comenzar</Link>
                    </div>
                    <div>
                        <img src="https://vapor-us-west-1-1619076718.s3.us-west-1.amazonaws.com/b7b87067-b84c-43ec-b50c-9f7371f8c5b7ffac91fb2f12794dc3dd8eff35796190.png" alt="" />
                        <h3>ÍNDICES SINTÉTICOS</h3>
                        <Link to={'/trading/indices-sinteticos'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkUh0SmZwCRaRdXxY5cn-3ZL7Zmm4nZ2KsswoWDcmWvp_zgNGddDdGOQLb5huP_2mHNY&usqp=CAU" alt="" />
                        <h3>FOREX</h3>
                        <Link to={'/trading/forex'} className="button">Comenzar</Link>
                    </div>
                  
                    <div>
                        <img src="https://www.invertirenbolsa.mx/wp-content/uploads/2019/04/opciones-binarias-1.jpg" alt="" />
                        <h3>BINARIAS</h3>
                        <Link to={'/trading/binarias'} className="button">Comenzar</Link>
                    </div>
                </div>
            </div>
            <div className='tiposMercado'>
                <h2>CONOCE TUS APLICATIVOS</h2>
                <div className='flex-1' data-aos="fade-up">
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/1351147815901257731/gwB2MYEU_400x400.jpg" alt="" />
                        <h3>MINDHUB</h3>
                        <Link to={'/aplicativos/mindhub'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://i.ytimg.com/vi/hJM1ueNEtDk/maxresdefault.jpg" alt="" />
                        <h3>wow</h3>
                        <Link to={'/aplicativos/wow'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://play-lh.googleusercontent.com/9TbuoO09ltAnt1on_hp7Xx_FHBHkSjLzunlip8YDYBxywQX40hgn7JLSN8kanm3Dww" alt="" />
                        <h3>Sense</h3>
                        <Link to={'/aplicativos/sense'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://play-lh.googleusercontent.com/9TbuoO09ltAnt1on_hp7Xx_FHBHkSjLzunlip8YDYBxywQX40hgn7JLSN8kanm3Dww" alt="" />
                        <h3>Orackle</h3>
                        <Link to={'/aplicativos/orackle'} className="button">Comenzar</Link>
                    </div>
                </div>
            </div>
            

        </main>
    </Layout>
  )
}

export default Traiding