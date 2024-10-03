import React from 'react'
import logoBack from './logo_back.png';

export default function Back() {
  return (
    <div class="back">
        <p class="desc1">WELCOME! <br></br>
        WE ARE <code>ITIS</code></p>
        <p class="desc2">HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</p>
        
        <img class="logo_back" src={logoBack} alt=''/>
        

    </div>
  )
}


