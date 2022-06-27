import React from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'


const criptos = () => {
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'CRIPTOMONEDAS'}/>
             <div className="tiposMercados">
                <h2>CONOCIENDO BINANCE</h2>
                <iframe className="video" src="https://www.youtube.com/embed/rsRWhRBNyKc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                <h2>Como tomar señales de futuros en criptomonedas</h2>
                <iframe className="video" src="https://www.youtube.com/embed/NqLTdKOV-bw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
 
        </main>
    </Layout>
  )
}

export default criptos