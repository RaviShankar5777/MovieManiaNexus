import React, { useState } from "react";
import "./HomeContent.css";

import avenger from "../../Assets/avengers.jpg";
import avengerVid from "../../Assets/avengers.mp4";
import baaghi from "../../Assets/baaghi3.jpg";
import baaghiVid from "../../Assets/baaghi3.mp4";
import baahubali from "../../Assets/bahubali.jpg";
import baahubaliVid from "../../Assets/Bahubali.mp4";
import got from "../../Assets/got.jpg";
import gotVid from "../../Assets/Got.mp4";
import kgf from "../../Assets/kgf2.jpg";
import kgfVid from "../../Assets/Kgf2.mp4";
import liger from "../../Assets/liger.jpg";
import ligerVid from "../../Assets/Liger.mp4";
import lionKing from "../../Assets/lionking.jpg";
import lionKingVid from "../../Assets/Lion_King.mp4";
import RRR from "../../Assets/rrr.jpeg";
import RRRVid from "../../Assets/RRR.mp4";
import sacredgames from "../../Assets/sacredgames.jpg";
import sacredgamesVid from "../../Assets/Sacred_games.mp4";
import shamshera from "../../Assets/shamshera.jpg";
import shamsheraVid from "../../Assets/Shamshera.mp4";
import super30 from "../../Assets/super30.jpg";
import super30Vid from "../../Assets/Super30.mp4";
import vikram from "../../Assets/vikram.jpg";
import vikramVid from "../../Assets/Vikram.mp4";

const streamArr = [
  {
    id: 0,
    img: avenger,
    vid: avengerVid,
  },
  {
    id: 1,
    img: baaghi,
    vid: baaghiVid,
  },
  { id: 2, img: baahubali, vid: baahubaliVid },
  { id: 3, img: got, vid: gotVid },
  { id: 4, img: kgf, vid: kgfVid },
  { id: 5, img: liger, vid: ligerVid },
  { id: 6, img: lionKing, vid: lionKingVid },
  { id: 7, img: RRR, vid: RRRVid },
  { id: 8, img: sacredgames, vid: sacredgamesVid },

  { id: 9, img: shamshera, vid: shamsheraVid },
  { id: 10, img: super30, vid: super30Vid },
  { id: 11, img: vikram, vid: vikramVid },
];

const Trailer = () => {
  const [data, setData] = useState(0);

  let displayVideo = (id) => {
    setData(id);
  };

  return (
    <div className="container">
      <div className="heading">
        <h2>Welcome to MovieManiaNexus</h2>
      </div>
      <div className="total">
        <div className="img-container">
          {streamArr.map((each) => {
            return (
              <img
                src={each.img}
                alt=""
                onClick={() => displayVideo(each.id)}
                className="image"
              />
            );
          })}
        </div>
        <div className="video-container">
          <video
            className="vid"
            width="450"
            height="250"
            controls
            autoPlay
            src={streamArr[data].vid}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
