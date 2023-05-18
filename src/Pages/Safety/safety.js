import styles from "./safety.module.css";
import { Link } from "react-router-dom";
import colors from "../../images/safety/colors.png";
import imageOne from "../../images/safety/imageOne.png";
import imageTwo from "../../images/safety/imageTwo.png";
import types from "../../images/safety/types.png";
import glassOne from "../../images/glass/phoneImageOne.png";


function Safety() {
  const scrollUp = () => {
    window.scrollTo(0,0);
  };
  return (
    <div className="pageContainer">
       
       <div className="flex">
        <div className="textOneContainer">
          <div className="textOne  maxwidth">
            <h2>Contact Us</h2>
            <h3>Thank you for choosing Nelson Construction Services</h3>
          </div>

          <div className="textOne maxwidth">
            <h2>Our Info</h2>
            <p>
              *insert Text Here*
            </p>
          </div>

          <div className="textOne maxwidth">
            <h2>Our Commitment</h2>
            <p>
              *insert Text here*
            </p>
          </div>
        </div>
        <img src={glassOne} style={{marginTop:"20px", width:"900px", marginRight:"-180px"}} className="singleImage2"/>
      </div>
    
    </div>
  );
}

export default Safety;
