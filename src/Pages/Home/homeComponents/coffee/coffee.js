import "./coffee.css";
import { useNavigate } from "react-router-dom";

function Coffee() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `Buildafuture`;
    navigate(path);
    window.scrollTo(0,0);
  };
  return (
    <div className="card coffee" onClick={routeChange}>
      <h2>Build A Future</h2>
      <div className="subtext">See why we need to build new homes for this generation and on</div>
    </div>
  );
}

export default Coffee;
