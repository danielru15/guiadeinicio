import React from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import { Link } from 'gatsby'



const Marketing = () => {
  
  return (
    <Layout>
        <main className="body">
            <Baner titulo={'e-commers'}/>
            <iframe  id="vd" className="video" src="https://www.youtube.com/embed/ycLBPzfwlIw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
            <div className="blanco">
                <h2>INDUCCIÓN</h2>
                <iframe className="video" src="https://www.youtube.com/embed/y4Dkoa5qZFc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> 
           
            <div className='h2-center'>
              <h2> ¡¡ ESPERA !!</h2>
              <h2 className='small'>DEVUELVETE A VER LOS QRS</h2>
            </div>
            
              <div className="negro" >
                <h2>Contacto lista caliente</h2>
                <iframe className="video" src="https://www.youtube.com/embed/SFx54h6kRQ8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco">
                <h2>Aprende a edificar para tu lanzamiento</h2>
                <iframe className="video" src="https://www.youtube.com/embed/uwtqDU-XMs8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="negro">
                <h2>Entiende tu negocio </h2>
                <iframe className="video" src="https://www.youtube.com/embed/1-MQA2xU88A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco">
                <h2>REDES SOCIALES </h2>
                <iframe className="video" src="https://www.youtube.com/embed/KiLy7TJXVoM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="negro">
                <h2>REDES SOCIALES 2</h2>
                <iframe className="video" src="https://www.youtube.com/embed/HEzUooV43Yc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="blanco">
                <h2>PROSPECCIÓN REDES SOCIALES </h2>
                <iframe className="video" src="https://www.youtube.com/embed/t5uaAqbQuVU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="negro">
                <h2>Que hacer luego de tu lanzamiento? </h2>
                <iframe className="video" src="https://www.youtube.com/embed/Z8WzloWrhwo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

            <div className='tiposMercado blanco-1'>
                <div className='flex-1' >
                    <div>
                         <img src="https://cronuts.digital/wp-content/uploads/2020/07/Business-Plan-bro.png" alt="" />
                        <h3>vuelvete un profesional</h3>
                        <Link to={'/marketing/vuelvete-un-profesional'} className="button">Comenzar</Link>
                    </div>
                </div>
            </div>
            
        </main>
    </Layout>
  )
}

export default Marketing