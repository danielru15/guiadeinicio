import React  from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'





const Mindhub= () => {
 
  return (
    <Layout>
        <main className="body">
            <Baner titulo={'Shift'}/>
           <iframe className="video" src={`https://www.youtube.com/embed/RSXHG8t6XtU`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe> 
        </main>
    </Layout>
  )
}

export default Mindhub