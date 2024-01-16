import React from "react";
import data from "../../movies.json";
import { useLocation } from "react-router-dom";
import "./TollywoodProducerMovies.css";

function TollywoodProducerMovies() {
  const location = useLocation();
  const data1 = location.state;
  console.log(data1);

  return (
    <div className="producermovie-container">
      {data.tollywood.producers[data1.id].producedMovies.map((each) => {
        return (
          <div className="producermovie" key={each.id}>
            <img src={each.img} alt="" />
            <h1>{each.movie}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default TollywoodProducerMovies;
