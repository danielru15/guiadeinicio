import React from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'


const indices = () => {
  return (
    <Layout>
        <main className='body'>
             <Baner titulo={'ÍNDICES SINTÉTICOS'}/>
             <h2>Como crear nuestra cuenta de índices sintéticos y enlazarla al MT5?</h2>
                <iframe className="video" src="https://www.youtube.com/embed/bmzNVbtxmtg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                <h2>Como depositar en Deriv</h2>
                <iframe className="video" src="https://www.youtube.com/embed/S186V3duA3w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Como tomar señales de índices sintéticos</h2>
                <iframe className="video" src="https://www.youtube.com/embed/1BmkUo_TkRk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h2>Como retirar mis fondos de Deriv</h2>
                <iframe className="video" src="https://www.youtube.com/embed/JQdeqfWVVhc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </main>
    </Layout>
  )
}

export default indices