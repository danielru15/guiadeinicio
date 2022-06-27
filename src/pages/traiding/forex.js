import React from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'


const forex = () => {
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'forex'}/>
             <div className="tiposMercados">
                <h2>Como crear y configurar nuestra cuenta de LIBERTEX</h2>
                <iframe className="video" src="https://www.youtube.com/embed/9-RY5UgtiUo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                <h2>Como depositar en LIBERTEX</h2>
                <iframe className="video" src="https://www.youtube.com/embed/MlJ6d34jS1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Como tomar señales de forex</h2>
                <iframe className="video" src="https://www.youtube.com/embed/XThMLudtq20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Como retirar capital de LIBERTEX</h2>
                <iframe className="video" src="https://www.youtube.com/embed/N9xelCTpvj0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
 
        </main>
    </Layout>
  )
}

export default forex