import "./vacation.css";
import { useNavigate } from "react-router-dom";

function Vacation() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `MtTravelPage`;
    navigate(path);
    window.scrollTo(0,0);
  };
  return (
    <div className="card vacation white" onClick={routeChange}>
      <h2>Mt. Travel</h2>
      <div className="subtext">Travel Agency Website - Design - 2023</div>
    </div>
  );
}

export default Vacation;
