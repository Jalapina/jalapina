import React, {useState,useEffect} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/index.sass"
import Earth from "../gifs/earth.gif"
import Alert from "../gifs/alert.gif"
import PaperClip from "../images/paper-clip.png"
import Seo from "../components/seo"
import Image from "../components/image"
import space from "../images/space.png"
import stopIt from "../images/stopIt.gif"

const IndexPage = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click);
    console.log(click)
  }

  return(
    <div className="home">
    
      <Seo title="Home" image={space} />

      <div className="about-me">

        <div className="first-intro-part">

          <img
            src={Earth}
            width={80}
            quality={95}
            alt="Earth"
            className="bounce-in-bck"
            style={{ marginBottom: `1.45rem` }}
          />

          
          <div className="text-wrapper">
            <h1 className="blink">
              {/* <font style={{color:`#00ffB4`}}>A</font>
              <font style={{color:`#00ffff`}}>y</font>
              <font style={{color:`#00B4ff`}}>e</font>
              <font>  </font> */}
              <font style={{color:`#005Aff`}}>W</font>
              <font style={{color:`#0000ff`}}>h</font>
              <font style={{color:`#4B00ff`}}>a</font>
              <font style={{color:`#A500ff`}}>t</font>
              <font style={{color:`#A500ff`}}>'</font>
              <font style={{color:`#FF00ff`}}>s</font>
              <font>  </font>
              <font style={{color:`#FF00B4`}}>U</font>
              <font style={{color:`red`}}>p</font>
              <font style={{color:`#ff863e`}}>!</font>
            </h1>

            {/* <marquee className="sliding-text">Welcome to my website.</marquee> */}

          </div>

        </div>


        <div className="my-gallery">

          <div className="image-container">
            <div className="inner-image">
              <StaticImage
                src={"../images/hackerman.jpeg"}
                quality={95}
                alt="Hackerman"
              />
            </div>
          </div>

          <div className="image-container">
            <div className="inner-image">
              <StaticImage
                src={"../images/cursed-david.jpeg"}
                quality={95}
                alt="Curesed David"
              />
            </div>
          </div>
          <div className="image-container">
            <div className="inner-image">
              <StaticImage
                src={"../images/halloween-with-fam.jpg"}
                quality={95}
                alt="Halloween"
              />
            </div>
          </div>

          <div className="image-container">
            <div className="inner-image">
              <StaticImage
                src={"../images/me-green.jpeg"}
                quality={95}
                alt="MC Hammer"
              />
          </div>
        </div>
          <div className="image-container">
            <div className="inner-image">
              <StaticImage
                src={"../images/peace-on-earth.jpeg"}
                quality={95}
                alt="MC Hammer"
              />
          </div>
        </div>
          <div className="image-container">
            <div className="inner-image">
              <StaticImage
                src={"../images/bob.jpg"}
                quality={95}
                alt="MC Hammer"
              />
          </div>
        </div>

        </div>
      </div>

      {/* <div className="my-spotify">
        <h1>My current Obsession</h1>
        <iframe src="https://open.spotify.com/embed/playlist/5AQeDrc3tqD2GCg59HBcji" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div> */}

      <div className="chooseYourFighter">

        <div className="fighters">
          <Link to="/fighters/dev">
            <p>
              Projects
            </p>
          </Link>
        </div>
        <div className="fighters">
          <Link to="/fighters/photographer">
            <p>
              Fotos
            </p>
          </Link>
        </div>
        {/* <div className="fighters new">
          <Link to="/fighters/farmer">
            <p>
              Farmer
            </p>
          </Link>
        </div> */}
        <div className="fighters">
          <Link to="/fighters/musician">
            <p>
              Music
            </p>
          </Link>
        </div>
        {/* <div className="fighters">
          <Link to="/fighters/cook">
            <p>
              The Cook
            </p>
          </Link>
        </div> */}
        <div className="fighters">
          <Link to="/fighters/thoughts">
            <p>
              Thoughts
            </p>
          </Link>
        </div>
      </div>
      
      <div className="the-wall">
        <h2>Leave a message!</h2>
        <from>
          <input type="name" name="name" placeholder="name" required/>
          <textarea name="message" required>
            Hi David, Thanks for being a great friend. Here's 1 btn
          </textarea>
          <button className="btn">
            Transmit
          </button>

          <div className="youGotMail">
            <img src={PaperClip} width={100}/>
          </div>

        </from>
      </div>

    </div>
  )

}

export default IndexPage
