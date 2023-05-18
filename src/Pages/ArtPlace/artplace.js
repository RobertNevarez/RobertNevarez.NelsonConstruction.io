import styles from "./artplace.module.css";
import artplace from "../../images/artplace/artplace.png";
import { Link } from "react-router-dom";
import artplaceOne from "../../images/artplace/artplaceOne.png";
import glassProcess from "../../images/glass/glassProcess.png";
import artplaceGallery from "../../images/artplace/artplaceGallery.png";
import empathymap from "../../images/artplace/empathyMap.png";
import userPersonas from "../../images/artplace/userpersonas.png";
import applicationMap from "../../images/artplace/applicationMap.png";
import taskflow from "../../images/artplace/taskflow.png";

import userflow from "../../images/artplace/userflow.png";
import lofiwireframes from "../../images/artplace/lofiwireframes.png";
import artplaceColors from "../../images/artplace/artplaceColors.png";
import artplaceType from "../../images/artplace/artplaceType.png";
import "./concept.css"


function ArtPlacePage() {
  const scrollUp = () => {
    window.scrollTo(0,0);
  };
  return (
    <div  className="pageContainer">
      <div  className="flex">
        <div  className="textOneContainer">
          <div    className="textOne  maxwidth">
            <h2 style={{marginTop:"-180px"}}>Cost of Living</h2>
            <h3>Prices has gone up and so has quality</h3>
          </div>
<br></br>
<br></br>
<br></br>
      <img style={{width:"900px", height:"600px"}} src="./next4.jpg" className="headimage"></img>
          <div className="textOne maxwidth">
            <h2 style={{marginTop:"-154px"}}>Budgeting </h2>
            <p>
            In times of elevated contractor prices, budgeting becomes an even more crucial aspect of any home improvement project. It helps homeowners to carefully allocate funds, ensuring the feasibility and successful completion of the project without compromising on quality or design. Proper budgeting allows you to understand and control where your money is going, helping to avoid unnecessary expenditures and maximize the value of your investment. Therefore, it's crucial to plan and stick to a budget that aligns with your goals and financial capacity, allowing for unexpected expenses while still achieving the desired outcome for your home.
            </p>
          </div>
        <br></br>
        <br></br>
      <ul>
    <li>
      <a class="animated-arrow" href="./ContactUs">
        <span class="the-arrow -left">
          <span class="shaft"></span>
        </span>
        <span class="main">
          <span class="text">
            Explore More
          </span>
          <span class="the-arrow -right">
            <span class="shaft"></span>
          </span>
        </span>
      </a>
    </li>
  </ul>
        <br></br>
        </div>
        <img src="./Budgeting.jpg"  style={{marginTop:"810px", width:"400px", height:"400px", marginRight:"-110px", border:"none"}} className="singleImage"></img> 

      </div>
      
    </div>
  );
}

export default ArtPlacePage;
