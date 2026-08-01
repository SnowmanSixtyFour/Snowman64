import { useState } from 'react'
import { Link } from "react-router-dom";

// Images
import DiscordLogo from '/img/SnowcordLogo.png';

// Components
import Back from "../Back.jsx";

function Discord() { 
  return (
    <div>
      <img src={DiscordLogo} alt="SNOWCORD" />
      <br/><br/>
      <p>SNOWCORD is the official Snowman64 Discord server,</p>
      <p>featuring discussions, voice chats, and announcement and video upload pings!</p>
      <br/>
      <p><a href="https://discord.gg/xDhnsGKvNv" target="_blank" rel="noopener noreferrer">Join the Discord Server!</a></p>
      <br/>
      <p>Join now, chat with other viewers, and never miss an upload!</p>
      <br/>
      <Back/>
    </div>
  )
}

export default Discord