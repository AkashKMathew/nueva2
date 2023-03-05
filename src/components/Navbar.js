import "./Navbar.css";
import { FiArrowUpRight, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import {Link} from "react-scroll";
const Navbar = () => {

    const [toggle,setToggle] = useState(false);
    const handleToggle = () => {
      return setToggle(!toggle);
    };
    const closeMenu = () => {
      setToggle(false)
    }
    return ( <div id="nav" className="Navbar">
    <div className="tog" onClick={handleToggle}>{toggle ? <MdClose  size={50}/>:<FiMenu size={50} />}</div>

     <div className={`buttons ${toggle ? "Buttons" : "nobut"}`} >
     <Link to="home" spy={true} smooth={true} offset={-100} duration={500}><div className="simbut1" onClick={handleToggle}>HOME</div></Link>
      <Link to="about"spy={true} smooth={true} offset={-138} duration={500}><div className="simbut1" onClick={closeMenu}>ABOUT</div></Link>
      <Link to="events"spy={true} smooth={true} offset={-100} duration={500}><div className="simbut1" onClick={closeMenu}>EVENTS</div></Link>
      <Link to="schedule"spy={true} smooth={true} offset={-90} duration={500}><div className="simbut1" onClick={closeMenu}>SCHEDULE</div></Link>

  

     
        </div>
    </div> );
}

 
export default Navbar;