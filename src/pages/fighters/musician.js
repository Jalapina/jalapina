import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "../../assets/music.sass"
import "../../assets/animations.css"

const Musician = () => (
  <div className="music-page-container">
    <Seo title="The Musician" />

    <div className="topic-title tracking-in-expand">
      <h1>Chech out my music on SoundCloud</h1>
      <p>Planning on releasing an EP soon , for now here's some dope beats.</p>
    </div>

    <div className="soundclound-link-container">

      <div className="soundcloud-link">
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1102525498&color=%23640c2c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="soundCloud-link" style={{fontSize: `10px`, color: `#cccccc`, lineBreak: `anywhere`, wordBreak: `normal`, overflow: `hidden`, whiteSpace: `nowrap`, textOverflow: `ellipsis`, fontFamily: `Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif`,fontWeight: `100`}}>
          <a href="https://soundcloud.com/jalaplna" title="piña" target="_blank" style={{color: `#cccccc`, textDecoration: `none;`}}>piña</a> · 
          <a href="https://soundcloud.com/jalaplna/is-okay" title="Is Okay" target="_blank" style={{color: `#cccccc`, textDecoration: `none`}}>Is Okay</a>
        </div>
      </div>

      <div className="soundcloud-link">
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1098807988&color=%23640c2c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="soundCloud-link" style={{fontSize: `10px`, color: `#cccccc`, lineBreak: `anywhere`, wordBreak: `normal`, overflow: `hidden`, whiteSpace: `nowrap`, textOverflow: `ellipsis`, fontFamily: `Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif`,fontWeight: `100`}}><a href="https://soundcloud.com/jalaplna" title="piña" target="_blank" style={{color: `#cccccc`, textDecoration: `none;`}}>piña</a> · 
          <a href="https://soundcloud.com/jalaplna/day-6" title="Day 6" target="_blank" style={{color: `#cccccc`, textDecoration: `none`}}>Day 6</a>
        </div>
      </div>

      <div className="soundcloud-link">
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108997368&color=%23640c2c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div className="soundCloud-link" style={{fontSize: `10px`, color: `#cccccc`, lineBreak: `anywhere`, wordBreak: `normal`, overflow: `hidden`, whiteSpace: `nowrap`, textOverflow: `ellipsis`, fontFamily: `Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif`,fontWeight: `100`}}><a href="https://soundcloud.com/jalaplna" title="piña" target="_blank" style={{color: `#cccccc`, textDecoration: `none;`}}>piña</a> · 
          <a href="https://soundcloud.com/jalaplna/alv" title="alv" target="_blank" style={{color: `#cccccc`, textDecoration: `none`}}>Alv</a>
        </div>
      </div>

    </div>

    <div>
      
      <div className="saying-whatever">
        <h2 className="wobble-hor-top">I have a problem.</h2>
        <p>I have over 100 Spotify playlist.</p>
        <p>and I can't stop making more, so here... </p>
      </div>

      <div className="spotify-playlist-container">
        <iframe src="https://open.spotify.com/embed/playlist/64Ynrxn0PAJ4btgDqOxueY" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className="spotify-playlist-container">
        <iframe src="https://open.spotify.com/embed/playlist/5SUtnF8ZUBYKZJn4JOQMBx" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className="spotify-playlist-container">
        <iframe src="https://open.spotify.com/embed/playlist/7dqm9Un5ZhQnrTGaFU3wdE" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className="spotify-playlist-container">
        <iframe src="https://open.spotify.com/embed/playlist/7d8C8wRUCKlsveE41tG2co" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className="spotify-playlist-container">
        <iframe src="https://open.spotify.com/embed/playlist/1Eg2iFJZwNRWmBC1U3xPIY" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className="spotify-playlist-container">
        <iframe src="https://open.spotify.com/embed/playlist/7uOqRTt2WrmosbUYWnCOnC" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>

    

  </div>
)

export default Musician
