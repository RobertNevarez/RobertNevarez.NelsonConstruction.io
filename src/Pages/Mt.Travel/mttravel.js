import styles from "./mttravel.module.css";
import { Link } from "react-router-dom";
import colors from "../../images/mttravel/color.png";
import imageOne from "../../images/mttravel/imageOne.png";
import imageTwo from "../../images/mttravel/imageTwo.png";
import types from "../../images/mttravel/type.png";

function MtTravel() {
  const scrollUp = () => {
    window.scrollTo(0,0);
  };
  return (
    <div className="pageContainer">
      <img src={imageOne} className="headimage"></img>
      <div className="textOne">
        <h2>What is Mt. Travel</h2>
        <p>
          This is a website design for a travel agency displaying what they do
          and some information about their services.
        </p>
      </div>
      <img src={imageTwo} className="headimage margin-top"></img>
      <div className="textOne">
        <h2>Colors</h2>
        <p>
          I went with a lot of dark colors and bright text because it give it a
          more elegant look as black or darker colors is often associated with
          that and I thought it went well with the brush images.
        </p>
      </div>
      <img src={colors} className="processImage  smallerImage"></img>
      <div className="textOne">
        <h2>Typography</h2>
      </div>
      <img src={types} className="processImage  smallerImage"></img>
      <div className="textOne">
        <h2>My Thoughts and Prototype</h2>
        <p>
          What I learned is how to use white on black and the effects of having
          interesting page transitions over having just a line or a box
          containing it. It adds some visual contrast to the work making it a
          lot more interesting and makes it look different from some websites.
        </p>
        <a
          href="https://www.figma.com/file/g9qIWZNP0yYFRTY9JEgVOQ/Vacation-Landing-Page?node-id=0%3A1&t=vZScda6KTl5od92b-1"
          target="_blank"
        >
          <button>
            <span class="button_top"> Prototype </span>
          </button>
        </a>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/HealthPage">
          <button className={styles.button} onClick={scrollUp}>
            <span class="button_top">
              {" "}
              <i class="fa-solid fa-chevron-left"></i>Prev{" "}
            </span>
          </button>
        </Link>
        <Link to="/CoffeeBirdsPage">
          <button className={styles.button} onClick={scrollUp}>
            <span class="button_top">
              {" "}
              Next <i class="fa-solid fa-chevron-right"></i>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MtTravel;
