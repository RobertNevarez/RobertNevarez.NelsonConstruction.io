import styles from "./coffeebirds.module.css";
import { Link } from "react-router-dom";
import coffeehead from "../../images/coffee/coffeehead.png";
import coffeesecond from "../../images/coffee/coffeesecond.png";
import coffeecolors from "../../images/coffee/coffeecolors.png";
import coffeetype from "../../images/coffee/coffeetype.png";
import bear from "../../images/NelsonConstructionServices/IMG_0909.jpg";
import bear2 from "../../images/NelsonConstructionServices/IMG_0908.PNG";
import bear3 from "../../images/NelsonConstructionServices/IMG_0910.PNG";
import bear4 from "../../images/NelsonConstructionServices/IMG_0911.PNG";
import bear5 from "../../images/NelsonConstructionServices/IMG_0912.PNG";
import bear6 from "../../images/NelsonConstructionServices/IMG_0913.PNG";
import bear7 from "../../images/NelsonConstructionServices/IMG_0914.PNG";
import bear8 from "../../images/NelsonConstructionServices/IMG_0915.PNG";
import bear9 from "../../images/NelsonConstructionServices/IMG_0916.PNG";
import bear10 from "../../images/NelsonConstructionServices/IMG_0917.PNG";
import bear11 from "../../images/NelsonConstructionServices/IMG_0918.PNG";
import bear12 from "../../images/NelsonConstructionServices/IMG_0919.PNG";
import bear13 from "../../images/NelsonConstructionServices/IMG_0920.PNG";
import Carousel from "../Home/Home/Carousel"
import CarouselCSS from"../Home/Home/Home.module.css"

function CoffeeBirds() {
  const scrollUp = () => {
    window.scrollTo(0,0);
  };
  const images = [
    { src: bear, alt: 'Image 1' },
    { src: bear2, alt: 'Image 2' },
    { src: bear3, alt: 'Image 3' },
    { src: bear4, alt: 'Image 3' },
    { src: bear5, alt: 'Image 1' },
    { src: bear6, alt: 'Image 2' },
    { src: bear7, alt: 'Image 3' },
    { src: bear8, alt: 'Image 3' },
    { src: bear9, alt: 'Image 1' },
    { src: bear10, alt: 'Image 2' },
    { src: bear11, alt: 'Image 3' },
    { src: bear12, alt: 'Image 3' },
    { src: bear13, alt: 'Image 3' },
    // Add more images if needed
  ];
  return (
    <div className="pageContainer">
      <div style={{marginTop:"90px"}} className="textOne">
        <h2>Our County infrastructure is outdated</h2>
        <p>
        In our county, much of the housing material has aged between 50-100 years, a fact that raises significant concerns about safety and modern living standards. These outdated materials and structures can pose serious risks, including structural instability and inefficient energy use, hindering the quality of life for residents. At Nelson Construction Services, we recognize this pressing issue and are dedicated to spearheading change. We are committed to renovating these older homes, replacing antiquated materials with safer, more efficient alternatives and modernizing designs for a better future. Our mission is to not only enhance the aesthetic appeal of these homes but to also ensure their safety, functionality, and sustainability for generations to come.
        </p>
      </div>
      <h3 style={{marginTop:"90px"}}>We pay attention to detail on modern housing</h3>
      <img style={{marginTop:"90px"}} src="./Housing.jpg" className="headimage margin-top"></img>
      
      <h2 style={{fontSize:"200%", textAlign:"center", marginTop:"90px"}}>Recent Work</h2>
      <div className={CarouselCSS.Herosection}>
        
        <Carousel images={images} />
      </div>
      
     
     
    </div>
  );
}

export default CoffeeBirds;
