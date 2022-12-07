import React from 'react'
import './Socials.css'
import Nav from '../routes/route'

function Socials() {
  return (
    <div class="socials-content">
        <Nav></Nav>
        <div class="images">
            <h1>Socials Page</h1>
            <div>
              <a href="https://instagram.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="" />
                <p>Youtube Shorts!</p>
              </a>
              <a href="https://youtube.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
                <p>Instagram Reels!</p>
              </a>
              <a href="https://snapchat.com">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/100px-Snapchat_logo.svg.png" alt="" />
                <p>Snapchat Stories!</p>
              </a>
            </div>

        </div>
    </div>
    
  )
}


export default Socials
