import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.scss";

function Banner() {
  const [sub, setSub] = useState({});
  const idSub = 1;

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/subreddits/${idSub}`
      )
      .then(res => {
        console.log(res);
        setSub(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="banner-container"
      style={`color: ${sub.colors.banner - container - bg}`}
    >
      <div className="banner-sub">
        <div className="banner-sub--logo">
          <div className="banner-sub--logo--image" />
        </div>
        <div className="banner-sub--title">{sub.slug}</div>
      </div>
      <div className="banner-links">
        <div className="banner-links--post">Posts</div>
        <div className="banner-links--other">twitter</div>
        <div className="banner-links--other">facebook</div>
        <div className="banner-links--other">instagram</div>
        <div className="banner-links--other">tumblr</div>
      </div>
    </div>
  );
}

export default Banner;
