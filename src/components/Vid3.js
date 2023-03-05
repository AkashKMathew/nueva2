import React from 'react'
import webr from '../Assets/3video1.webm';
import './Vid3.css'
export default function Vid3() {
    window.onload=function(){
        document.getElementsByClassName('vid').play();
    }
  return (
    <div className="Vid3">
        <video className="Vid" autoPlay="autoplay" muted="muted" loop="loop">
          <source src={webr} type="video/webm"/>
        </video>
    </div>
  )
}
