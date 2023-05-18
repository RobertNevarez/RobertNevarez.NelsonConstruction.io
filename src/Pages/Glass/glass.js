import styles from "./glass.module.css";
import glass from "../../images/glass/glass.png";
import glassOne from "../../images/glass/phoneImageOne.png";
import bear4 from "../../images/NelsonConstructionServices/IMG_0920.PNG";
import glassProcess from "../../images/glass/glassProcess.png";
import glassGallery from "../../images/glass/glassGallery.png";
import empathymap from "../../images/glass/empathymap.png";
import userPersonas from "../../images/glass/userPersonas.png";
import applicationMap from "../../images/glass/applicationMap.png";
import taskflow from "../../images/glass/taskflow.png";
import userflow from "../../images/glass/userflow.png";
import lofiwireframes from "../../images/glass/lofiwireframes.png";
import glassColors from "../../images/glass/glassColors.png";
import glassType from "../../images/glass/glassType.png";
import { Link } from "react-router-dom";


function GlassPage() {
  const scrollUp = () => {
    window.scrollTo(0,0);
  };
  return (
    <div className="pageContainer">
     
      <div className="flex">
        <div style={{marginTop:"-90px"}} className="textOneContainer">
          <div className="textOne  maxwidth">
            <h2>Features</h2>
            <h3>Design Concept</h3>
            <h3>Framework Concept</h3>
            <h3>Pattern Concept</h3>
          </div>

          <div style={{marginTop:"20px"}} className="textOne maxwidth">
            <h2>Modern Design</h2>
            <p>
            At Nelson Construction Services, our range of specialties ensures a complete home renovation experience tailored to your needs. Our expertise in remodeling focuses on revamping your kitchen and bathroom, transforming them into stylish and functional spaces that incorporate the latest trends and innovative materials. Our flooring services provide durable and visually appealing solutions, including hardwood, laminate, and tile, to complement any design style.
<br></br>
<br></br>
Our drywall installation is executed with precision, ensuring a seamless and smooth finish, ready for painting or other treatments. Speaking of painting, our professional painters work meticulously to bring your walls to life with the perfect color and texture, boosting your home's aesthetic appeal. Beyond these core services, we are equipped to handle other home renovation projects, from installing custom cabinetry to upgrading your home's electrical and plumbing systems.
<br></br>
<br></br>
Choose Nelson Construction Services for your next home improvement project, and experience the difference our expertise, attention to detail, and commitment to customer satisfaction can make.
            </p>
          </div>
          
        </div>
        <img src="./test3.jpg"  style={{marginTop:"20px", width:"900px", marginRight:"-180px"}} className="singleImage"></img> 
      </div>
      <br></br>
      <br></br>
      <br></br>
      <section class="post-grid container">
		  
			<div class="row">
	
		
		
	  					<div class="col-lg-4 col-md-6">
			<div class="post-sec">
				<div class="post-img"><a href="/ContactUs/"><img src="./ayylmao2.png" class="entered lazyloaded"/></a></div>
        <br></br>
				<h3 class="post-title"><a href="/ContactUs/"><img src="./shower.png"/>Bathroom</a></h3>
        <br></br>
			<div class="post-desc">
			Nelson Construction Services transforms bathrooms into modern retreats, excelling in layout design, fixture installation, and quality tile work.			</div>
			
			</div>
			</div>
									<div class="col-lg-4 col-md-6">
			<div class="post-sec">
				<div class="post-img"><a href="/ContactUs/"><img src="./kitchen.png"/></a></div>
        <br></br>
				<h3 class="post-title"><a href="/ContactUs/"><img src="./utensils.png"/>Kitchen</a></h3>
        <br></br>
			<div class="post-desc">
			Nelson Construction Services specializes in kitchen remodeling, expertly modernizing spaces with functional designs and high-quality installations.			</div>
			
			</div>
			</div>
									<div class="col-lg-4 col-md-6">
			<div class="post-sec">
				<div class="post-img"><a href="/ContactUs/"><img src="https://dwell44.com/wp-content/uploads/2021/03/cheyanne-trail-kitchen-dwell44.jpg" data-lazy-src="https://dwell44.com/wp-content/uploads/2021/03/cheyanne-trail-kitchen-dwell44.jpg" data-ll-status="loaded" class="entered lazyloaded"/></a></div>
        <br></br>
				<h3 class="post-title"><a href="/ContactUs/"><img src="https://dwell44.com/wp-content/uploads/2021/04/dining-table.png" data-lazy-src="https://dwell44.com/wp-content/uploads/2021/04/dining-table.png" data-ll-status="loaded" class="entered lazyloaded"/>Countertops</a></h3>
        <br></br>
			<div class="post-desc">
			Modernizing kitchens with functional designs, high-quality installations, and stunning countertop selections, we design services that brings a blend of expertise and creativity to every kitchen remodeling project, ensuring a transformation that elevates your culinary experience.			</div>
			
			</div>
      <br></br>
      <br></br>
      <br></br>
			</div>
									<div class="col-lg-4 col-md-6">
			<div class="post-sec">
				<div class="post-img"><a href="/ContactUs/"><img src="./flooring.png"/></a></div>
        <br></br>
				<h3 class="post-title"><a href="/ContactUs/"><img src="./flooringicon.png"/>Flooring</a></h3>
        <br></br>
			<div class="post-desc">
			With a keen eye for detail and a comprehensive knowledge of materials, our team expertly installs a range of flooring options, from hardwood and laminate to tile, ensuring durability and aesthetic appeal that complements the unique style of your home.			</div>
			
			</div>
			</div>
									<div class="col-lg-4 col-md-6">
			<div class="post-sec">
				<div class="post-img"><a href="/ContactUs/"><img src="./appliances.png" data-lazy-src="https://dwell44.com/wp-content/uploads/2021/04/sks-range-48-e1617816792486.jpeg" data-ll-status="loaded" class="entered lazyloaded"/></a></div>
        <br></br>
				<h3 class="post-title"><a href="/ContactUs/"><img src="./appliancesicon.png" data-lazy-src="https://dwell44.com/wp-content/uploads/2021/04/wardrobe-1.png" data-ll-status="loaded" class="entered lazyloaded"/>Appliances</a></h3>
        <br></br>
			<div class="post-desc">
			Utilizing a range of top-quality appliances, our team ensures the seamless integration of modern technology into your home, enhancing both functionality and convenience while maintaining a stylish aesthetic. 			</div>
			
			</div>
			</div>
									<div class="col-lg-4 col-md-6">
			<div class="post-sec">
				<div class="post-img"><a href="/ContactUs/"><img src="./cabinets.png"/></a></div>
        <br></br>
				<h3 class="post-title"><a href="/ContactUs/"><img src="./cabinetsicon.png"/>Cabinets</a></h3>
        <br></br>
			<div class="post-desc">
			Our team skillfully installs custom cabinetry that not only amplifies storage and functionality in your home, but also contributes significantly to the overall aesthetic, reflecting your personal style and enhancing the unique charm of your spaces.			</div>
			
			</div>
			</div>
					</div>
			</section>
      <br></br>
      <br></br>
      
    </div>
  );
}

export default GlassPage;
