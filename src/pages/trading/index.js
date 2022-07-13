import React, { useEffect, useState } from 'react'
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/drive-d75a7.appspot.com/o/IMG_2803%20(1).JPG?alt=media&token=2d0ea9fb-05ee-49c7-b450-770016c44fcf" alt="" />
                        <h3>CRIPTOMONEDAS</h3>
                        <Link to={'/trading/criptos'} className="button">Comenzar</Link>
                    </div>
                    <div>
                        <img src="https://vapor-us-west-1-1619076718.s3.us-west-1.amazonaws.com/b7b87067-b84c-43ec-b50c-9f7371f8c5b7ffac91fb2f12794dc3dd8eff35796190.png" alt="" />
                        <h3>ÍNDICES SINTÉTICOS</h3>
                        <Link to={'/trading/indices-sinteticos'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://firebasestorage.googleapis.com/v0/b/drive-d75a7.appspot.com/o/IMG_2810.JPG?alt=media&token=6c7d1229-1e6d-4659-9c8a-ade3dc1aec5f" alt="" />
                        <h3>FOREX</h3>
                        <Link to={'/trading/forex'} className="button">Comenzar</Link>
                    </div>
                  
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/drive-d75a7.appspot.com/o/IMG_3341.JPG?alt=media&token=9add6c25-b815-4df9-9884-c0906a873a1c" alt="" />
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
                         <img src="https://i.ytimg.com/vi/hJM1ueNEtDk/maxresdefault.jpg" alt="" id='orakle'/>
                        <h3>wow</h3>
                        <Link to={'/aplicativos/wow'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://play-lh.googleusercontent.com/9TbuoO09ltAnt1on_hp7Xx_FHBHkSjLzunlip8YDYBxywQX40hgn7JLSN8kanm3Dww" alt="" />
                        <h3>Sense</h3>
                        <Link to={'/aplicativos/sense'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://i.ytimg.com/vi/yduUxQDsDkI/maxresdefault.jpg" alt="" id='orakle'/>
                        <h3>Orakle</h3>
                        <Link to={'/aplicativos/orackle'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://play-lh.googleusercontent.com/X55NQ-3v03yMFo_8SRLw4QpWMp4OYkd643wmpBVZ5ez7pc5KQ_0nQsHMTyd7sq-ZO7c" alt="" />
                        <h3>Shift</h3>
                        <Link to={'/aplicativos/shift'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://play-lh.googleusercontent.com/8KTDUXqaKVczm8csr46WjvkgwIdtzlB0O5U1pAoRm4oHukeIjnhf6NR8U1T5B7HaOlQ" alt="" />
                        <h3>NFX</h3>
                        <Link to={'/aplicativos/nfx'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://play-lh.googleusercontent.com/QN8Kd-JRi4JxKGgQPZEyXIKxXJw2JYONfHwqHPtnAv6-R1OV8UNUIl-2HOQDKlsyuvfG" alt="" />
                        <h3>relic</h3>
                        <Link to={'/aplicativos/relic'} className="button">Comenzar</Link>
                    </div>
                    <div>
                         <img src="https://play-lh.googleusercontent.com/zMSzko3lImP39mK68sBOA1w_2J-SXtfn6vn6ZH0tSIKFm1b19CHYz1sICE1EjaiEtt1G" alt="" />
                        <h3>titan</h3>
                        <Link to={'/aplicativos/titan'} className="button">Comenzar</Link>
                    </div>
                </div>
            </div>
            

        </main>
    </Layout>
  )
}

export default Traiding