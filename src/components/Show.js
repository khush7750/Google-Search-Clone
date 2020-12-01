import React from "react";

const Show = (props) => {

  const { results, info } = props;

  return (
    <div className="show">
      <div className="showInfo">
        {info ? `Total results: ${info.totalResults}` : ""}
      </div>

      {results.length > 0
        ? results.map((result) => (
            <div className="showDetails">

              <div className="showLink">
                <a href={result.displayLink}>{result.displayLink}</a>
              </div>

              <div className="showTitle">
                <a href={result.link}>{result.title}</a>
              </div>

              <div className="showDescription">
                <p>{result.snippet}</p>
              </div>
              
            </div>
          ))
        : ""}


    </div>
  );
};

export default Show;
