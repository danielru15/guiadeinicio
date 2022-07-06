import * as React from "react"
import Baner from "../components/Baner"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {


  return (
    <Layout>
      <main className="body"> 
      <Baner
        titulo={'iNICIA TU GRAN AVENTURA'}
      />
      <iframe className="video" src="https://www.youtube.com/embed/poWp9knzAfM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>  

      <div className="flex-1">
        <div className="Marketing">
          <img src="https://img1.wsimg.com/isteam/ip/2f8d2b99-68b8-4c6e-bbce-9161368759ef/networking-201710271018.jpg/:/cr=t:0%25,l:18.91%25,w:50%25,h:100%25/rs=w:730,h:730,cg:true" alt="marketing" />
          <h2>Marketing</h2>
          <p>ACÁ INICIAMOS EN EL MARAVILLOSO MUNDO DEL MARKETING POR SUSCRIPCIÓN.</p>
          <Link to={'/marketing'} className="button">Comenzar</Link>

        </div>
        <div className="Traiding">
          <img src="https://img1.wsimg.com/isteam/ip/2f8d2b99-68b8-4c6e-bbce-9161368759ef/5be423fa9a3e31541678074.jpeg/:/cr=t:19.88%25,l:48.46%25,w:33.89%25,h:60.24%25/rs=w:730,h:730,cg:true,m" alt="traiding" />
          <h2>Traiding</h2>
          <p>ACÁ INICIAMOS EN EL MUNDO DE LOS MERCADOS FINANCIEROS.</p>
          <Link to={'/traiding'} className="button">Comenzar</Link>
        </div>
      </div>
      </main>
    </Layout>
  )
}

export default index