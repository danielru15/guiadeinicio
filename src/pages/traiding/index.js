import React from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

const traiding = () => {
  return (
    <Layout>
        <main className="body">
            <Baner titulo={'GUíA DE INICIO Traiding'}/>
            <iframe className="video" src="https://www.youtube.com/embed/S5XPkkiINfE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
            <div className='plan-educativo'>
                <h2>PLAN EDUCATIVO</h2>
                <p>AQUÍ ENCONTRAS TU PLAN EDUCATIVO PASO A PASO, PARA QUE PUEDAS IR ORDENADAMENTE EN ESTE MARAVILLOSO MUNDO DE LOS MERCADOS FINANCIEROS.</p>
                <a href="https://img1.wsimg.com/blobby/go/2f8d2b99-68b8-4c6e-bbce-9161368759ef/downloads/plan%20de%20estudio%20elite-comprimido.pdf?ver=1656006700855" className='button'>DESCARGAR PLAN</a>
            </div>
            <div className='tiposMercado'>
                <h2>TIPOS DE MERCADOS</h2>
                <div className='flex-1'>
                    <div>
                        <img src="https://vapor-us-west-1-1619076718.s3.us-west-1.amazonaws.com/b7b87067-b84c-43ec-b50c-9f7371f8c5b7ffac91fb2f12794dc3dd8eff35796190.png" alt="" />
                        <h3>ÍNDICES SINTÉTICOS</h3>
                        <Link to={'/traiding/indices-sinteticos'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://i0.wp.com/blog.kubofinanciero.com/wp-content/uploads/2017/01/%C2%BFQue%CC%81-es-FOREX-y-cua%CC%81les-son-sus-desventajas--scaled.jpg?fit=2560%2C1331&ssl=1" alt="" />
                        <h3>FOREX</h3>
                        <Link to={'/traiding/forex'} className="button">Comenzar</Link>
                    </div>
                    <div>
                        <img src="https://www.portafolio.co/files/article_multimedia/uploads/2022/06/10/62a39d35ba7bd.jpeg" alt="" />
                        <h3>CRIPTOMONEDAS</h3>
                        <Link to={'/traiding/criptos'} className="button">Comenzar</Link>
                    </div>
                </div>
            </div>
        </main>
    </Layout>
  )
}

export default traiding