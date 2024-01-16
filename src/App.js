import "./App.css";
import KollywoodDirectors from "./Components/KollywoodDirectors/KollywoodDirectors.js";
import BollywoodDirectors from "./Components/BollywoodDirectors/BollywoodDirectors";
import Navbar from "./Components/NavBar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import TeluguDirectors from "./Components/TeluguDirectors/TeluguDirectors";
import { Routes, Route, useParams } from "react-router-dom";
import ActorsTollywood from "./Components/ActorsTollywood/ActorsTollywood.js";
import ProducersTollywood from "./Components/ProducersTollywood/ProducersTollywood.js";
import TollywoodDirectorsMovies from "./Components/TollywoodDirectorsMovies/TollywoodDirectorsMovies.js";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TollywoodActorMovies from "./Components/TollywoodActorMovies/TollywoodActorMovies.js";
import TollywoodProducerMovies from "./Components/TollywoodProducerMovies/TollywoodProducerMovies.js";
import HomeContent from "./Components/HomeContent/HomeContent.js";

function App() {
  let { userId } = useParams();

  const queryParameters = new URLSearchParams(window.location.search);

  const name = queryParameters.get("name");
  console.log(name);

  console.log(userId);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="sidebar-content">
        <Sidebar />
        {/* <HomeContent /> */}

        <Routes>
          <Route exact path="/" element={<HomeContent />} />
          <Route
            exact
            path="/tollywood-Directors"
            element={<TeluguDirectors />}
          />
          <Route
            exact
            path="/kollywood-Directors"
            element={<KollywoodDirectors />}
          />
          <Route
            exact
            path="/bollywood-Directors"
            element={<BollywoodDirectors />}
          />
          <Route exact path="/actors-Tollywood" element={<ActorsTollywood />} />
          <Route
            exact
            path="/producers-Tollywood"
            element={<ProducersTollywood />}
          />
          <Route
            exact
            path={`director/:${userId}`}
            element={<TollywoodDirectorsMovies />}
          />
          <Route
            exact
            path={`actor/:${userId}`}
            element={<TollywoodActorMovies />}
          />{" "}
          <Route
            exact
            path={`producer/:${userId}`}
            element={<TollywoodProducerMovies />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
