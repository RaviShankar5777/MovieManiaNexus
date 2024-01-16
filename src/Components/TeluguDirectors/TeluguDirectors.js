import React from "react";
import "./TeluguDirectors.css";
import data from "../../movies.json";
import { Link } from "react-router-dom";

function TeluguDirectors() {
  // console.log(data);
  // {`/${each.name}`}
  return (
    <div className="telugudir">
      {data.tollywood.directors.map((each) => {
        return (
          <Link
            to={`/director/:${each.name}`}
            state={each}
            className="text-decoration-none "
          >
            {" "}
            <div className="director-card" key={each.id}>
              <img src={each.img} alt="" />
              <h2>{each.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default TeluguDirectors;
