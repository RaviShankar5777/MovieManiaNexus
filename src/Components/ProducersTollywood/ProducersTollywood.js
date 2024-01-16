import React from "react";
import data from "../../movies.json";
import "./ProducersTollywood.css";
import { Link } from "react-router-dom";

function ProducersTollywood() {
  return (
    <div className="tollyWoodProducers">
      {data.tollywood.producers.map((each) => {
        return (
          <Link
            to={`/producer/:${each.name}`}
            state={each}
            className="text-decoration-none"
          >
            <div className="Producers-card">
              <img src={each.img} alt="" />
              <h2> {each.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProducersTollywood;
