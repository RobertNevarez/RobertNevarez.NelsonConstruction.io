import "./artplace.css";
import { useNavigate } from "react-router-dom";

function Artplace() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `Pricing`;
    navigate(path);
    window.scrollTo(0,0);
  };
  return (
    <div className="card artplace black" onClick={routeChange}>
      <h2 style={{color:"white"}}>Pricing</h2>
      <div style={{color:"white"}} className="subtext">Compare our design to current pricing</div>
    </div>
  );
}

export default Artplace;