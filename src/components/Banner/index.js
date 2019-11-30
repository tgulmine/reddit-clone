import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.scss";

function Banner(props) {
  const [sub, setSub] = useState({});
  const [color, setColor] = useState({});
  const idSub = props.idSub;
  const nightMode = props.nightMode;

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
  }, [idSub]);

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone-colors/colors/${idSub}`
      )
      .then(res => {
        console.log(res);
        setColor(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idSub]);

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
          <div
            className="banner-sub--logo--image"
            style={{
              backgroundImage: `url(${sub.logo})`
            }}
          />
        </div>
        <div className="banner-sub--title">{sub.title}</div>
      </div>
      <div
        className={
          !nightMode ? "banner-links" : "banner-links banner-links--night"
        }
        style={{
          backgroundColor: color.banner_links_bg,
          color: color.banner_links_text
        }}
      >
        <div
          className={
            !nightMode
              ? "banner-links--posts"
              : "banner-links--posts banner-links--posts--night"
          }
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
        <div
          className={
            !nightMode
              ? "banner-links--other"
              : "banner-links--other banner-links--other--night"
          }
        >
          twitter
        </div>
        <div
          className={
            !nightMode
              ? "banner-links--other"
              : "banner-links--other banner-links--other--night"
          }
        >
          facebook
        </div>
        <div
          className={
            !nightMode
              ? "banner-links--other"
              : "banner-links--other banner-links--other--night"
          }
        >
          instagram
        </div>
        <div
          className={
            !nightMode
              ? "banner-links--other"
              : "banner-links--other banner-links--other--night"
          }
        >
          tumblr
        </div>
      </div>
    </div>
  );
}

export default Banner;
