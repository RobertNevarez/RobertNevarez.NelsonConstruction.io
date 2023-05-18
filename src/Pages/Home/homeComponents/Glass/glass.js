import "./glass.css";
import { useNavigate } from "react-router-dom";

function Glass() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `Feature`;
    navigate(path);
    window.scrollTo(0,0);
  };

  return (
    <div className="card glass black" onClick={routeChange}>
      <h2>Feature</h2>
      <div className="subtext">View 2023 design work for your house</div>
    </div>
  );
}

export default Glass;
