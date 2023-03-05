import React,{useState} from 'react';
import './Gevents.css';
import {Link} from "react-scroll";
import Workshop from './Workshop';
import Event from './Event';
import Talks from './Talks'
import { AiOutlineClose } from "react-icons/ai";
export default function Gevents() {
 const[openWorkshop,setWorkshop]=useState(false);
 const[openTalks,setTalks]=useState(false);
 const[openEvent,setEvent]=useState(false);
 const[openComp,setComp]=useState(false);
 const handleWork =()=>{
  return setWorkshop(!openWorkshop);
 }
 const handleTalks =()=>{
  return setTalks(!openTalks);
 }
 const handleEvent =()=>{
  return setEvent(!openEvent);
 }


  return (
    <div className={`Gevents ${openComp ? "showGevents" : "hideGevents"}`} id="events" >
        <div className="col">
            
            <div className="row2">
            <div className='one' >
            <Link to="card1" spy={true} smooth={true} offset={-100} duration={500}><button className='overlayimg' onClick={()=>{setWorkshop(true);setTalks(false);setEvent(false);setComp(true)}}>WORKSHOPS</button></Link>

            </div>
            <Link to="card2" spy={true} smooth={true} offset={-100} duration={500}><div className='two'>
            <button className='overlayimg' onClick={()=>{setWorkshop(false);setTalks(false);setEvent(true);setComp(true)}}>EVENTS</button></div>
            </Link>
            <Link to="card3" spy={true} smooth={true} offset={-100} duration={500}><div className='three'>
              <button className='overlayimg' onClick={()=>{setWorkshop(false);setTalks(true);setEvent(false);setComp(true)}}>TALKS & EXPO</button></div>
              </Link>
            </div>
            <div className="cardo">
            <div className={`works ${openWorkshop ? "showworks" : "hideworks"}`}>
            <Link to="events" spy={true} smooth={true} offset={-100} duration={500}><button onClick={()=>{handleWork();setComp(false);}} className="cloose"><AiOutlineClose size={40}/></button></ Link>
              <Workshop />
            </div>
            <div className={`evento ${openEvent ? "showevento" : ""}`}>
            <Link to="events" spy={true} smooth={true} offset={-100} duration={500}><button onClick={()=>{ handleEvent();setComp(false);}} className="cloose"><AiOutlineClose size={40}/></button></ Link>
              <Event />
            </div>
            <div className={`evento ${openTalks ? "showevento" : ""}`}>
            <Link to="events" spy={true} smooth={true} offset={-100} duration={500}><button onClick={()=>{handleTalks();setComp(false);}} className="cloose"><AiOutlineClose size={40} /></button></ Link>
              <Talks />
            </div>
            </div>
        </div>
    </div>
  )
}