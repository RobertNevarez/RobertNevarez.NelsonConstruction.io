import "./safety.css";
import { useNavigate } from "react-router-dom";

function Safety() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `ContactUs`;
    navigate(path);
    window.scrollTo(0,0);
  };
  return (
    <div className="card safety white" onClick={routeChange}>
      <h2>Contact Us</h2>
      <div className="subtext">Call us today to get started on your new home</div>
    </div>
  );
}

export default Safety;
