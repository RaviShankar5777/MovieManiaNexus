import React from "react";
import data from "../../movies.json";
import "./ActorsTollywood.css";
import { Link } from "react-router-dom";

function ActorsTollywood() {
  return (
    <div className="teluguActors">
      {data.tollywood.actors.map((each) => {
        return (
          <Link
            to={`/actor/: ${each.name}`}
            state={each}
            className="text-decoration-none "
          >
            <div className="actors-card" key={each.id}>
              <img src={each.img} alt="" />
              <h2>{each.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ActorsTollywood;
