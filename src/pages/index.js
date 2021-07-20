import React, {useState,useEffect} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/index.sass"
import McHammer from "../gifs/earth.gif"
import Alert from "../gifs/alert.gif"
import PaperClip from "../images/paper-clip.png"
import Seo from "../components/seo"
import Image from "../components/image"

const IndexPage = () => {

  return(
    <div className="home">
    
      <Seo title="Home" />

      <div className="about-me">

        <div className="first-intro-part">

          <img
            src={McHammer}
            width={80}
            quality={95}
            alt="MC Hammer"
            style={{ marginBottom: `1.45rem` }}
          />
          {/* <img
            src={McHammer}
            width={80}
            quality={95}
            alt="MC Hammer"
            style={{ marginBottom: `1.45rem` }}
          />
          <img
            src={McHammer}
            width={80}
            quality={95}
            alt="MC Hammer"
            style={{ marginBottom: `1.45rem` }}
          />
          <img
            src={McHammer}
            width={80}
            quality={95}
            alt="MC Hammer"
            style={{ marginBottom: `1.45rem` }}
          /> */}
          
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

            <marquee className="sliding-text">Welcome to my website. I post everything here. Dank memes, music, my thoughts, and my master plan for world domination </marquee>

          </div>

        </div>


        <div className="my-gallery">

          <div className="image-container">
            <div className="inner-image">
              <StaticImage
                src={"../images/hackerman.jpeg"}
                quality={95}
                alt="MC Hammer"
              />
            </div>
          </div>

          <div className="image-container">
            <div className="inner-image">
              <StaticImage
                src={"../images/cursed-david.jpeg"}
                quality={95}
                alt="MC Hammer"
              />
            </div>
          </div>
          <div className="image-container">
            <div className="inner-image">
              <StaticImage
                src={"../images/halloween-with-fam.jpg"}
                quality={95}
                alt="MC Hammer"
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

      <div className="other-info-wrapper">
        <div className="alert">
          <img src={Alert} width={85}/>
          <h2 className="alert-title">Alert!</h2>
          <p>Best check yo self, you're not looking too good.</p>
          <a href="https://www.youtube.com/watch?v=pBt1OHZ2m7o">Click this link for instant Happiness</a>
        </div>
        <div className="list-wall">
          <ul>
            <li>Home</li>
            <li>My Projects</li>
            <li>help</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div className="my-spotify">
        <h1>My current Obsession</h1>
        <iframe src="https://open.spotify.com/embed/track/0lPqlYOhIwbQS0W1mllUlN" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>

      <div className="chooseYourFighter">
        <h2>
          Choose Your Fighter!
        </h2>
        <div className="fighters">
          <Link to="/fighters/dev">
            <h1>
              The Dev
            </h1>
          </Link>
        </div>
        <div className="fighters">
          <Link to="/fighters/photographer">
            <h1>
              The Photographer
            </h1>
          </Link>
        </div>
        <div className="fighters new">
          <Link to="/fighters/farmer">
            <h1>
              The Farmer
            </h1>
          </Link>
        </div>
        <div className="fighters">
          <Link to="/fighters/musician">
            <h1>
              The Musician
            </h1>
          </Link>
        </div>
        <div className="fighters">
          <Link to="/fighters/cook">
            <h1>
              The Cook
            </h1>
          </Link>
        </div>
        <div className="fighters new">
          <Link to="/fighters/shitposter">
            <h1>
              The Shitposter
            </h1>
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
