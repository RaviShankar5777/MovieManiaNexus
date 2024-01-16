import React from "react";
import "./TollyWoodActorMovies.css";
import data from "../../movies.json";
import { useLocation } from "react-router-dom";

function TollywoodActorMovies() {
  const location = useLocation();
  const data1 = location.state;
  return (
    <div className="actorsmoviemain">
      {data.tollywood.actors[data1.id].actormovies.map((each) => {
        return (
          <div className="actor-content">
            <div className="actormovie-content">
              <img src={each.img} alt="" />
              <h1>{each.actormoviename} </h1>
            </div>
            <div className="trailers">
              <iframe
                width="400"
                height="250"
                className="iframe"
                src={each.vid}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h5>{each.actormoviename} Trailer</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TollywoodActorMovies;
