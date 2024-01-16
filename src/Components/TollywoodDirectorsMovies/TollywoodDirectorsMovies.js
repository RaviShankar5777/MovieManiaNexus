import React from "react";
import { useLocation } from "react-router-dom";
import "./TollywoodDirectorsMovies.css";
import data from "../../movies.json";

function TollywoodDirectorsMovies() {
  const location = useLocation();
  const data1 = location.state;
  console.log(data1);
  return (
    <div className="movie-container">
      {data.tollywood.directors[data1.id].movies.map((each) => {
        return (
          <div className="movie" key={each.id}>
            <div className="moviename">
              <img src={each.img} alt="" />
              <h1>{each.moviename}</h1>
            </div>
            <div className="video">
              <iframe
                width="370"
                height="200"
                className="iframe"
                src={each.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h5>{each.moviename} Trailer</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TollywoodDirectorsMovies;
