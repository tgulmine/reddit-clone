import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.scss";

function Banner() {
  const [sub, setSub] = useState({});
  const [color, setColor] = useState({});
  const idSub = 1;

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/subs/${idSub}`
      )
      .then(res => {
        console.log(res);
        setSub(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/colors/${idSub}`
      )
      .then(res => {
        console.log(res);
        setColor(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="banner-container">
      <div
        className="banner-sub"
        style={{
          backgroundColor: color.banner_sub_bg,
          color: color.banner_sub_text
        }}
      >
        <div className="banner-sub--logo">
          <div className="banner-sub--logo--image" />
        </div>
        <div className="banner-sub--title">{sub.slug}</div>
      </div>
      <div
        className="banner-links"
        style={{
          backgroundColor: color.banner_links_bg,
          color: color.banner_links_text
        }}
      >
        <div
          style={
            hovered
              ? {
                  borderBottom: `3px solid ${color.banner_links_text__hover}`,
                  color: color.banner_links_text__hover
                }
              : {
                  borderBottom: `3px solid ${color.banner_links_text}`,
                  color: color.banner_links_text
                }
          }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          Posts
        </div>
        <div className="banner-links--other">twitter</div>
        <div className="banner-links--other">facebook</div>
        <div className="banner-links--other">instagram</div>
        <div className="banner-links--other">tumblr</div>
      </div>
    </div>
  );
}

export default Banner;
