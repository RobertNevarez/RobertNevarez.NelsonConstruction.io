import styles from "./health.module.css";
import { Link } from "react-router-dom";
import headerimage from "../../images/health/headerimage.png";
import glassProcess from "../../images/glass/glassProcess.png";
import ipads from "../../images/health/twoipads.png";
import empathymap from "../../images/health/empathymap.png";
import userpersonas from "../../images/health/userpersonas.png";
import appmap from "../../images/health/appmap.png";
import taskflow from "../../images/health/taskflow.png";
import userflow from "../../images/health/userflow.png";
import lofi from "../../images/health/lofi.png";
import colors from "../../images/health/colors.png";
import types from "../../images/health/type.png";

function Health() {
  const scrollUp = () => {
    window.scrollTo(0,0);
  };
  return (
    <div className="pageContainer">
      <img src={headerimage} alt="heroimage" className="headimage"></img>
      <div className="flex">
        <div className="textOneContainer">
          <div className="textOne  maxwidth">
            <h2>Glass</h2>
            <h3>Conceptual Design</h3>
          </div>

          <div className="textOne maxwidth">
            <h2>Project Overview</h2>
            <p>
              Glass is a finance app with the goal to promote financial
              transparency so everyone can know how everyone is spending their
              money to make better choices with their money. As money is not
              something commonly taught to everyone this app promote financial
              literacy by showing people information that might not be readily
              available or commonly talked about.
            </p>
          </div>

          <div className="textOne maxwidth">
            <h2>My Role</h2>
            <p>
              I performed user research and worked as the designer using the
              user research to create a UX friendly app with an accessible UI
              that looks modern and easy to use.
            </p>
          </div>
        </div>
      </div>
      <div className="textOne textCenter">
        <h2>My Process</h2>
        <img
          src={glassProcess}
          alt="processimage"
          className="processImage"
        ></img>
      </div>
      <img src={ipads} className="headimage margin-top"></img>
      <div className="textOne">
        <h2>Research</h2>
        <p>
          I conducted research with users that want to take care of their own
          health or take care of other’s health with the goal of finding out
          what they want in an app and what are some common problems they
          experience.
        </p>
      </div>
      <div className="textOne">
        <h2>Empathy Map</h2>
        <p>
          After doing some interviews I found some common problems that people
          experience when trying to keep track of their information and getting
          appointment or knowing who to call.
        </p>
      </div>
      <img src={empathymap} class="processImage"></img>
      <div className="textOne">
        <h2>User Personas</h2>
        <p>
          After learning about some of the users problems I created some
          personas to have an idea who I am making an app for and what are the
          needs and wants of each person.
        </p>
      </div>
      <img
        src={userpersonas}
        className="processImage"
        alt="userperson image"
      ></img>
      <div className="textOne">
        <h2>Goals</h2>
        <p>
          With my deeper understanding of what the user problems are my goal is
          to make the experience better by presenting all the information
          digitally in a way easier to understand with highlights on the most
          important parts.
        </p>
      </div>
      <div className="textOne">
        <h2>Application Map</h2>
        <p>
          To start planning this conceptual design I thought bout the features
          and what would go ito it I created an application map to organize the
          screens in a way that would be logical and intuitive for the user.
        </p>
      </div>
      <img src={appmap} className="processImage"></img>
      <div className="textOne">
        <h2>Task Flow</h2>
        <p>
          I started to identify how users would use the app if they want to find
          information or do something
        </p>
      </div>
      <img src={taskflow} className="processImage"></img>
      <div className="textOne">
        <h2>User Flow</h2>
        <p>
          The user flow chart shows how the user would use the app in the case
          they want to view information or edit something
        </p>
      </div>
      <img src={userflow} className="processImage userflow"></img>
      <div className="textOne">
        <h2>Lofi Wireframe Sketches</h2>
        <p>
          Using my understanding of user goals, architecture, and the user’s
          interaction with the app I worked on making informed choices on how to
          design the app’s screen while trying to make the app as easy to use as
          possible.{" "}
        </p>
      </div>
      <img src={lofi} className="processImage"></img>
      <div className="textOne">
        <h2>Prototyping</h2>
        <p>
          After having the sketches done and having it critiqued, revised, and
          the structure of the app visually solves the issues mentioned in the
          empathy map I processed forward with adding more details and made the
          application interactive.
        </p>
        <a
          href="https://www.figma.com/file/W4sPKeWWobME1do1GkVxBB/HealthCare?node-id=0%3A1&t=PzcMejJ0wqwoKOdV-1"
          target="_blank"
        >
          <button className={styles.button}>
            <span class="button_top"> Prototype </span>
          </button>
        </a>
      </div>
      <img
        src={headerimage}
        alt="heroimage"
        className="headimage margin-top"
      ></img>
      <div className="textOne">
        <h2>Colors</h2>
        <p>
          Choosing a fun color with good contrast is important here as designing
          for accessibility as the main audience is toward hobbyist and people
          who scroll social media for hours.
        </p>
      </div>
      <img src={colors} className="processImage smallerImage"></img>
      <div className="textOne">
        <h2>Typography</h2>
        <p>
          Choosing colors that promote accessibility in this case was important
          to me by having good text hierarchy it makes the app easier to use and
          choosing colors that seem modern is also important as this is more
          aimed toward a older audience.
        </p>
      </div>
      <img src={types} className="processImage smallerImage"></img>
      <div className="textOne">
        <h2>Branding</h2>
        <p>
          I wanted to go with a recognizable logo so I choose a stethoscope with
          monotone colors to make a more relaxing experience.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/ArtPlacePage">
          <button className={styles.button} onClick={scrollUp}>
            <span class="button_top">
              {" "}
              <i class="fa-solid fa-chevron-left"></i>Prev{" "}
            </span>
          </button>
        </Link>
        <Link to="/MtTravelPage">
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

export default Health;
