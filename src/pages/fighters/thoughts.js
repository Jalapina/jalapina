import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Image from "../../components/image"
import "../../assets/thoughts.sass"

const Thoughts = () => {

  return(
    <div className="thoughts">
      <Seo title="The Shitposter" />
      
      <h1>Thoughts</h1>
      
      <div className="notes-container">

        <div className="note-icon">
          <Image style={`width:150px`} filename="document" />
          <p>Is Ethereum really decentralized?</p>
        </div>
        
      </div>

    </div>
  )

}

export default Thoughts
