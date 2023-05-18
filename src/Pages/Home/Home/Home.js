import styles from "./Home.module.css";
import bear from "../../../images/NelsonConstructionServices/IMG_0909.jpg";
import bear2 from "../../../images/NelsonConstructionServices/IMG_0908.PNG";
import bear3 from "../../../images/NelsonConstructionServices/IMG_0910.PNG";
import bear4 from "../../../images/NelsonConstructionServices/IMG_0911.PNG";
import Glass from "../homeComponents/Glass/glass";
import Artplace from "../homeComponents/artplace/artplace";
import Health from "../homeComponents/health/health";
import Vacation from "../homeComponents/vacation/vacation";
import Coffee from "../homeComponents/coffee/coffee";
import Safety from "../homeComponents/safety/Safety";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Carousel from './Carousel';

function Home() {

  const images = [
    { src: bear, alt: 'Image 1' },
    { src: bear2, alt: 'Image 2' },
    { src: bear3, alt: 'Image 3' },
    { src: bear4, alt: 'Image 3' },
    // Add more images if needed
  ];
  return (
    <motion.div 
    className="Home"
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>

<div className={styles.Herosection}>
        <div className={styles.herosection2}>
        <div className={styles.HerosectionText2}>
          <h2>Services We Offer</h2>
          <br></br>
          <br></br>
          <h3>
         Remodeling<ul>
  <li>Bathroom</li>
  <li>Kitchen</li>
  <li>Living Room / Bed Room</li>
</ul>

Flooring  <br></br><br></br> Dry Wall <br></br> <br></br>  Painting   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> </h3>
         
        </div>
        
        </div>
        <div className={styles.HerosectionText}>
          <h2>Why Nelson Construction Services?</h2>
          <br></br>
          <br></br>
          <h3>
          Nelson Construction Services, led by a seasoned owner with over 30 years of experience, is a premier construction company specializing in bathroom and kitchen remodeling. Our skilled team of professionals is dedicated to transforming your living spaces with an eye for modern design, functionality, and aesthetics. In addition to our core services, we offer expert painting, flooring, and drywall installation to ensure a comprehensive home improvement solution.
<br></br><br></br><br></br><br></br>
With a commitment to quality workmanship and unparalleled customer service, Nelson Construction Services is the ideal choice for your renovation needs. Our attention to detail and personalized approach set us apart, guaranteeing a seamless experience from start to finish. Trust Nelson Construction Services to elevate your home's value and exceed your expectations.
          </h3>
         
        </div>
          <br></br>
        
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div className={styles.contentSection}>

        <Glass></Glass>
        <Artplace></Artplace>
        <Coffee></Coffee>
        <Safety></Safety>
        
      </div>
    </motion.div>
  );
}

export default Home;
