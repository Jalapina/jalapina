import * as React from "react"
import { Link } from "gatsby"
import Image from "../../components/image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "../../assets/dev.sass"

const Dev = () => (
  <div className="dev-container">
    <Seo title="The Dev" />
    <div className="topic-title">
      <p>
        Join me in my neverending journey in the world of programming.
      </p>
      <p>
        Currently learning how to make NFT's on Ethereum, Solana and Kadena.
      </p>

      <div className="other-website">

        Check out my other website to view my projects.
        <button>
          <a href="https://davidpina.dev">Other Website</a>
        </button>

      </div>

    </div>

    <div className="youtube-videos">
      <h3>
        Ethereum
      </h3>
      <div className="youtube-v-container">
        <iframe width="500" height="315" src="https://www.youtube.com/embed/Lom-EMfQL8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="youtube-v-container">
        <iframe width="500" height="315" src="https://www.youtube.com/embed/GHtsf9EyGdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <h3>
        Solana
      </h3>
      <div className="youtube-v-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LhAE7Ii2kbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
)

export default Dev
