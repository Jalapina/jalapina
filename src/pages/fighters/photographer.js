import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import InstagramEmbed from 'react-instagram-embed';

const Photographer = () => (
  <div>
    <Seo title="The Photographer" />
    <h1>Photographer</h1>
    <div>
    <InstagramEmbed
      url='https://www.instagram.com/p/B_lv9xjgcEF/'
      clientAccessToken='2009852672511619|5cca9e408307327105c2b31414e56de2'
      maxWidth={320}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
    </div>
    <button>
      <a href="https://www.instagram.com/jalapina96/">
        Instagram
      </a>
    </button>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Photographer
