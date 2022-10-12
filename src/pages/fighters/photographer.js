import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import InstagramEmbed from 'react-instagram-embed';
import { StaticImage } from "gatsby-plugin-image"
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jalapina-ff36a.appspot.com/o/orange.png?alt=media&token=c84b8c42-c2a4-47a3-9331-37119717d986',
    width: 3,
    height: 3
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jalapina-ff36a.appspot.com/o/halloween-with-fam.jpg?alt=media&token=5f2d14ea-4672-4367-9f77-e5f4b4b6797d',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jalapina-ff36a.appspot.com/o/pizzatime.JPEG?alt=media&token=3a671c93-db23-41db-b3a2-15b2b0a39c73',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jalapina-ff36a.appspot.com/o/16097801-D39C-4648-9F46-7C383F06B4EB.JPEG?alt=media&token=ec61b2ea-059f-4749-93fc-e29c63428d13',
    width: 1,
    height: 0.75
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jalapina-ff36a.appspot.com/o/1B8AF218-48FB-4C80-AAAD-9320743CC0C0.jpeg?alt=media&token=b960302c-9901-4cfe-8682-af1b7fafc32c',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jalapina-ff36a.appspot.com/o/9BF938B0-EA07-487A-B026-A7E8135CCF24.jpeg?alt=media&token=4b254148-822e-4c2d-b180-c74dd279c333',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jalapina-ff36a.appspot.com/o/miner.jpg?alt=media&token=ca61633d-44a0-4f24-ae9c-7e1c1ee7973d',
    width: 2,
    height: 1
  }
];


const Photographer = () => (
  <div className="photograpther">
    <Seo title="The Photographer" />
    <h1>Photos</h1>
    <div>
    <InstagramEmbed
              url="https://www.instagram.com/p/BqIh647Hz9p/"
              maxWidth={500}
              clientAccessToken='361735569240038 | aa0dc7e6ebb78a26b939de9d7a6a2dc3'
              hideCaption={false}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
    </div>

  

    <a style={{color:"#fff", marginBottom:"75px",display:"inline-block"}} href="https://www.instagram.com/jalapina96/">
      Instagram
    </a>

    <div className="images">

      <Gallery direction={"column"} photos={PHOTO_SET} />

    </div>
  </div>
)

export default Photographer
