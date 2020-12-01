import React, {useState} from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import logo from "../img/download.png";

const Home = (props) => {

  const [state, setState] = useState("");

  const searchGoogle = (e) => {
    props.history.push({ pathname: "/search", state });
  };

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="homeLogo">
          {/* <img src="/images/googleLogo.png" alt="Logo" /> */}
          <img src={logo} alt="Logo" /> 
        </div>

        <form className="homeForm" onSubmit={searchGoogle}>
          <input
            type="text"
            className="homeInput"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />

          <div className="homeGroup">
            <input type="submit" className="homeBtn" value="Google Search" />
          </div>

          <FaSistrix className="searchIcon" />
          <FaMicrophone className="microphone" />

        </form>
      </div>
    </div>
  );
};

export default Home;
