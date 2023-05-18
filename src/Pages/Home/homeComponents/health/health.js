import "./health.css";
import { useNavigate } from "react-router-dom";

function Health() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `HealthPage`;
    navigate(path);
    window.scrollTo(0,0);
  };
  return (
    <div className="card health" onClick={routeChange}>
      <h2>Health</h2>
      <div className="subtext">Healthcare App - Case Study - 2022</div>
    </div>
  );
}

export default Health;
