import React from 'react'
import './Istelogo.css';
import Logodesign from '../Assets/Logodesign.jpeg';
export default function Istelogo() {
  return (
    <div className='Istelogo'  >
       <div>
       <hr className='line'></hr>
       <hr className='line1'></hr>
       </div>
      
       <img src={Logodesign} className="istelogoimg" alt="img" ></img>
       <div> <hr className='line2'></hr>
       <hr className='line'></hr></div>
      
       
    </div>
  )
}
