import React from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'

const Sense = () => {
  return (
    <Layout>
        <main className="body">
            <Baner titulo={'Sense'}/>
           
           <iframe className="video" src="https://www.youtube.com/embed/_NQv-jq9Xjo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe> 
           <div className='plan-educativo'>
                <h2>CANALES SUGERIDOS</h2>
                <ul>
                  <li> - #sintético_indices_oficial</li>
                  <li> - #reynaldosaunefx</li>
                 <li>- #Nfx_con_andres_plazas</li>
                 <li>   - #crypto-italoferrari-esp</li>
                </ul>
            </div>
        </main>
    </Layout>
  )
}

export default Sense