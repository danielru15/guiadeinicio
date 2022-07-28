import React from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'

const Orackle = () => {
  return (
    <Layout>
    <main className="body">
        <Baner titulo={'Orackle'}/>
        <a href="https://orakle.io/login" className='button' target={"_blank"} rel="noreferrer">Login</a>
            <br />
       <iframe className="video" src="https://www.youtube.com/embed/d7Ay39t-HCU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe> 
        
        
        
    </main>
</Layout>
  )
}

export default Orackle