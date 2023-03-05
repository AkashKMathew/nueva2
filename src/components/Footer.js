import "./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const style = {  width:'4vw',height:'4vw',fill:"aqua"}


    return ( <div className="footer">
        <div className="left">
    <div className="left_up">
        <h1 className="quicklink">QUICK LINKS</h1>
        <div className="links">
        <div className="left_links">
            <a href="Events">Events</a>
            <a href="Workshop">Workshop</a>
            <a href="Tech Talks">Tech Talks</a>
        </div>
        <div className="right_links">
            <a href="Sponsors">Sponsors</a>
            <a href="Weapon expo">Weapon expo</a>
            <a href="Robowar">Robowar</a>
        </div>
    </div></div>
    <hr />
    <div className="left_down">
        <div className="head">
        <div className="logo">
            <img src="./logo.png" alt="" className="1" />
        </div>
        <div className="neuva"><h2>nueva</h2></div>
    </div>
        </div></div>
        <img src="./Arrow 1.svg" alt="" className="arrow" />
        <div className="right">
            <div className="right_up">
                <h2>GET IN TOUCH</h2>
                <a href="ISTEGECT">iste@gect.com</a>
            </div>
            <hr className="a2" />
            <div className="social">
                <h2>SOCIAL LINKS</h2>
                <div className="icons">
                    <a href="https://www.instagram.com/iste_gect/"><FaInstagramSquare  style={style} className="icon"/></a>
                    <a href="https://www.linkedin.com/company/iste-gec-students-chapter/"><FaLinkedin  style={style}/></a>
                    <a href="https://www.facebook.com/IsteGecChapter"><FaFacebookSquare  style={style}/></a></div>
            </div>

        </div>

    </div> );
}
 
export default Footer;