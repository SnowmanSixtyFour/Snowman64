import { useState } from 'react'
import { Link } from "react-router-dom";

function Socials() {
  return (
    <div>
      <p><b>Here are each of my accounts on different social media platforms.</b></p>
      <br/>
      <ul>
        <li><a href="https://bit.ly/snowman64" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        <li><a href="https://bsky.app/profile/snowman64.com" target="_blank" rel="noopener noreferrer">Bluesky</a></li>
        <li><a href="https://www.twitch.tv/snowmansixtyfour" target="_blank" rel="noopener noreferrer">Twitch</a></li>
        <li><a href="https://www.tiktok.com/@_snowman64_" target="_blank" rel="noopener noreferrer">TikTok</a></li>
        <li><a href="https://www.instagram.com/_snowman64_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.reddit.com/user/_snowman64_/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
      </ul>
      <br/>
      <Link className="navButton" to="/">Go Back</Link>
    </div>
  )
}

export default Socials