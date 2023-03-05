import {React, useState} from 'react'
import './Workshop.css'
import elektra from '../Assets/elektra.jpeg'
import { AiOutlineClose } from "react-icons/ai";

const Event = () => {

    let content = [
        {
            image: elektra,
            title: "KRANTHI",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image: elektra,
            title: "ELEKTRA",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image: elektra,
            title: "INFINOIA",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image: elektra,
            title: "LETO",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image: elektra,
            title: "LETO",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        }
    ];const [showDiv, setShowDiv] = useState(false);

    const handleOpen = () => {
        setShowDiv(true);
        console.log(showDiv)
        document.body.style.overflowY = showDiv ? "auto" : "hidden";
        document.getElementById("nav").style.display = showDiv ? "flex" : "none";
    };
    const handleClose = () => {
        setShowDiv(false);
        document.body.style.overflowY = showDiv ? "auto" : "hidden";
        document.getElementById("nav").style.display = showDiv ? "flex" : "none";
    }
    return (

        <div className="event">

            <div className="sheet"id="card2">
                <h1 style={{ color: 'rgb(240 96 0)', fontSize: '6vw', fontFamily: 'Chakra Petch' }}>Events</h1>

                <div className="innersheet">
                    {content.map((element, ctx) => (
                        <>
                        <div className="card">
                            <div className="mainhead">
                                <h1 className='head'>{element.title}</h1>
                                <p>{element.date}</p>
                            </div>
                            <img src={element.image} alt="" className='imag' />
                            <h2 className="head3">{element.cost}</h2>
                            <div className="comb">
                                <div className="reg1">
                                    <div className="reg2">
                                        <p>Register</p>
                                    </div>
                                </div>
                                <button onClick={handleOpen}>LEARN MORE</button>
                                </div>
                            </div>
                            {showDiv && <div className='cardDoc'>
                        <button className='btn' onClick={handleClose}><AiOutlineClose size={40}/></button>
                            <div className="cardContain">
                            
                                <div className="front">
                                    <img src={element.image} alt=""></img>
                                </div>
                                <div className='back'>
                                <img src={element.image} alt=""></img>
                                </div>
                            </div>
                            </div>}
                        </>
                    ))}
                </div>
            </div>

        </div>

    );
}

export default Event;