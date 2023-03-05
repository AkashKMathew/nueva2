import "./Home.css";
import Navbar from "./Navbar"
import logo from "../Assets/logo-anim.mp4"

const Home = () => {
    return ( 
        <div className="home">
            <div className="logo-div">
            <video src={logo} autoPlay loop muted></video>
            </div>
            <Navbar />
        </div>
     );
}
 
export default Home;