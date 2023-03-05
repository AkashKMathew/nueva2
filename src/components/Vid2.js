import React from 'react'
import "./Vid.css";
import Vid3 from '../components/Vid3';
import Robowar from "../Assets/robots.jpg";
export default function Vid() {
  return (
    <div className="Vid">
        <div className="highlight1">
    
        <Vid3 className='robo'/>
        <div className="roh1"><h1>IDEATHON</h1>
        <p>Turn your ideas into reality by participating in Ideathon.
Collaborate with like-minded individuals to create innovative solutions to the given  problem.
Develop your skills in project management, communication, and problem-solving by participating in this 24 hour long challenge!</p>
        </div>
        
     
        
        
        </div>
        <div className="highlight2">
        <Vid3 className='robo'/>
        <div className="roh2"><h1>MATRIX</h1>
        <p>Matrix is an exciting competition that challenges participants' proficiency in various areas of computer science. 
With a range of difficulty levels, Matrix offers opportunities for both novice and experienced programmers to test their abilities and compete against their peers.
So, gear up for the ultimate computer science challenge and register for Matrix today!</p>
       </div>
        </div>
        <div className="highlight3">
        <Vid3 className='robo'/>
        <div className="roh3"><h1>ARCHATHON</h1>
        <p>Get involved in Archathon and transform your ideas into reality.
This event provides a chance to every architecture student to showcase their creativity, innovation, and skills in architecture.
Grab your opportunity to be a part of the 24 hour long design competition!</p>
       </div>
        </div>
     
           </div>
  )
}
