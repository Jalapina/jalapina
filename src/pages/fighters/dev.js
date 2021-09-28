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
        Currently learning how to make NFT's, I swear I'm going to start a blog. I swear.
      </p>

      <div className="other-website">

        Check out my other website to view my projects.
        <button>
          <a href="https://davidpina.dev">Other Website</a>
        </button>

      </div>

    </div>

  </div>
)

export default Dev
