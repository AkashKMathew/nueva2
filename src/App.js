import React,{useState} from "react";
import "./App.css";
// import Tag from "./components/Tag";
import Home from "./components/Home";
import Istelogo from "./components/Istelogo";
import Hover from "./components/Hover";
import About from "./components/About";
import Footer from "./components/Footer";
import Scrollanimation from "./components/Scrollanimation";
import Gevents from "./components/Gevents";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Vid1 from "./components/Vid1";
import Vid2 from "./components/Vid2";
import Vid3 from "./components/Vid3";
function App() {
 const[loading,setloading]=useState(false);
 const spinner=document.getElementById('spinner');
 if(spinner){
   setTimeout(()=>{
        spinner.style.display='none';
        setloading(false);
   },1000)
 }

  return (
     !loading &&
(  
      <div className="app">
            
          
              
                 <Navbar />
                <Hover />
                <About />
                <Gevents/>
                <Vid1 />
                <Download />
                <Vid2 />
                <Scrollanimation />
                <Footer />
             
              
            
          

          
      </div>
)
  );
}

export default App;
