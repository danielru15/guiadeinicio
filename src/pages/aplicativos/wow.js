import React, { useEffect } from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'





const Wow = () => {
 
  return (
    <Layout>
        <main className="body">
            <Baner titulo={'wow'}/>
           
           <iframe className="video" src="https://www.youtube.com/embed/onStpXvOl6o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe> 
            
            
            
        </main>
    </Layout>
  )
}

export default Wow