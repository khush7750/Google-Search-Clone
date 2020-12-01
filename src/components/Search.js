import React,{useState ,useEffect} from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import { key, cx } from "../API/API";
import axios from "axios";
import Show from "./Show";
import logo from "../img/googlelogo.png";

const Search = (props) => {

  const goBack = () => {
    props.history.push("/");
  };

  const [state, setState] = useState(
    props.location.state ? props.location.state : ""
  );

  const [results, setResults] = useState([]);
  const [info, setInfo] = useState("");


  const searchGoogle = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
      );
      if (response) {
        // console.log(response);
        setResults(response.data.items);
        setInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(results , info)

  React.useEffect(() => {
    async function getPosts() {
      if (props.location.state) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
          );
          if (response) {
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []);


  return (
    <div className="search">
      <div className="searchForm">
        <div className="searchForm-logo">
          {/* <img src="/images/small.png" alt="logo" onClick={goBack} /> */}
          <img src={logo} alt="Logo" onClick={goBack} /> 
        </div>
        <div className="searchForm-input">
          <form className="homeForm" onSubmit={searchGoogle}>
            <input
              type="text"
              className="homeInput"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <FaSistrix className="searchIcon" />
            <FaMicrophone className="microphone" />
          </form>
        </div>
      </div>

      <Show results={results} info={info} />

    </div>
  );
};

export default Search;
