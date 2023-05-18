import styles from "./navigation.module.css";
import logo from "../images/nbyerrr.jpg";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <div className={styles.navigation}>
      <h2 className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo}></img>
      Nelson Construction Services</h2>
      <div className={styles.navigationLinks}>
        <Link to="/">Home</Link> <Link to="/Feature"> Feature</Link><Link to="/Pricing"> Pricing</Link><Link to="/ContactUs"> Contact Us</Link>
      </div>
    </div>
  );
}

export default Navi;
