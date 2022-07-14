import React  from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'





const Mindhub= () => {
 
  return (
    <Layout>
        <main className="body">
            <Baner titulo={'nfx'}/>
           
           <iframe className="video" src={`https://www.youtube.com/embed/rowbg9Ci0-A`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe> 
            
            
            
        </main>
    </Layout>
  )
}

export default Mindhub