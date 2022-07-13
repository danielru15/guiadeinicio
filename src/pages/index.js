import * as React from "react"
import Baner from "../components/Baner"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import 'aos/dist/aos.css';

const index = () => {


  return (
    <Layout>
      <main className="body"> 
      <Baner
        titulo={'iNICIA TU GRAN AVENTURA'}
      />
      {/* <iframe className="video" src="https://www.youtube.com/embed/poWp9knzAfM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>  */}

      <div className="flex-1">
        <div className="Marketing">
          <img src="https://firebasestorage.googleapis.com/v0/b/drive-d75a7.appspot.com/o/IMG_0713.JPG?alt=media&token=b7bf0d4f-1a32-4d53-9afa-0980a7fe08a4" alt="marketing" id="mk" />
          <h2>Marketing</h2>
          <p>ACÁ INICIAMOS EN EL MARAVILLOSO MUNDO DEL MARKETING POR SUSCRIPCIÓN.</p>
          <Link to={'/marketing'} className="button">Comenzar</Link>

        </div>
        <div className="Traiding">
          <img src="https://firebasestorage.googleapis.com/v0/b/drive-d75a7.appspot.com/o/IMG_0714.JPG?alt=media&token=abb2e5e6-fecf-4965-a616-e950189aa33d" alt="traiding" />
          <h2>Trading</h2>
          <p>ACÁ INICIAMOS EN EL MUNDO DE LOS MERCADOS FINANCIEROS.</p>
          <Link to={'/trading'} className="button">Comenzar</Link>
        </div>
      </div>
      </main>
    </Layout>
  )
}

export default index