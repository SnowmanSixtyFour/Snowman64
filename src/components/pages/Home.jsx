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
      <h2>Hello, everyone! My name is</h2>
      <h2><img src={Logo} alt="SNOWMAN64" /> and welcome to my website!</h2>
      <br/>
      <p>I primarily focus on making YouTube videos on video games such as Minecraft!</p>
      <p>But I also occasionally do other things!</p>
      <a href="https://bit.ly/snowman64" target="_blank" rel="noopener noreferrer"><img src={YouTube} alt="YouTube" /></a>
      <a href="https://bsky.app/profile/snowman64.com" target="_blank" rel="noopener noreferrer"><img src={Bluesky} alt="Bluesky" /></a>
      <a href="/discord" target="_blank" rel="noopener noreferrer"><img src={Discord} alt="Discord" /></a>
      <br/>
      <p>You can find me on other social media platforms, too!</p>
      <br/>
      <Link className="navButton" to="/socials">View my Socials</Link>
    </div>
  )
}

export default Home