import React from 'react'
import Baner from '../../components/Baner'
import Layout from '../../components/layout'
import { Link } from 'gatsby'



const Marketing = () => {
  
  return (
    <Layout>
        <main className="body">
            <Baner titulo={'Marketing'}/>
            
            <div className='tiposMercado'>
                <div className='flex-1' >
                    <div>
                        <img src="data:image/jpeg;base64,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" alt="" />
                        <h3>Basicos</h3>
                        <Link to={'/marketing/basicos'} className="button">Comenzar</Link>
                    </div>
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