import { useState } from 'react'
import { Link } from "react-router-dom";

// Images
import Logo from '/img/SnowmanLogo.png';

import YouTube from '/img/icon/yt.png';
import Bluesky from '/img/icon/bsky.png';
import Discord from '/img/icon/discord.png';

function Home() {
  return (
    <div>
      <p className="faded">Hello everyone, My name is...</p>
      <br/>
      <img src={Logo} alt="SNOWMAN64" />
      <br/><br/>
      <h2>Content Creator</h2>
      <p className="separator"/>
      <p>I primarily focus on making YouTube videos on video games such as Minecraft!</p>
      <p>But I also occasionally do other things!</p>
      <a className="iconLink" href="https://bit.ly/snowman64" target="_blank" rel="noopener noreferrer"><img src={YouTube} alt="YouTube" /></a>
      <a className="iconLink" href="https://bsky.app/profile/snowman64.com" target="_blank" rel="noopener noreferrer"><img src={Bluesky} alt="Bluesky" /></a>
      <a className="iconLink" href="/discord" rel="noopener noreferrer"><img src={Discord} alt="Discord" /></a>
      <br/>
      <p className="faded">You can find me on other social media platforms, too!</p>
      <br/>
      <Link className="navButton" to="/socials">View my Socials</Link>
    </div>
  )
}

export default Home