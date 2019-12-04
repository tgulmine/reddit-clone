import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.scss";

function Banner(props) {
  const [sub, setSub] = useState({});
  const [color, setColor] = useState({});
  const [links, setLinks] = useState({});
  const idSub = props.idSub;
  const nightMode = props.nightMode;

  const [hoveredPosts, setHoveredPosts] = useState(false);
  const toggleHoverPosts = () => setHoveredPosts(!hoveredPosts);
  const [hovered1, setHovered1] = useState(false);
  const toggleHover1 = () => setHovered1(!hovered1);
  const [hovered2, setHovered2] = useState(false);
  const toggleHover2 = () => setHovered2(!hovered2);
  const [hovered3, setHovered3] = useState(false);
  const toggleHover3 = () => setHovered3(!hovered3);
  const [hovered4, setHovered4] = useState(false);
  const toggleHover4 = () => setHovered4(!hovered4);
  const [hovered5, setHovered5] = useState(false);
  const toggleHover5 = () => setHovered5(!hovered5);

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
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/banner_links/${idSub}`
      )
      .then(res => {
        console.log(res);
        setLinks(res.data);
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

  function getLinks(i) {
    var link_name;
    if (i === 1) link_name = links._1;
    else if (i === 2) link_name = links._2;
    else if (i === 3) link_name = links._3;
    else if (i === 4) link_name = links._4;
    else if (i === 5) link_name = links._5;

    if (i <= links.amount)
      return (
        <div
          className={
            !nightMode
              ? "banner-links--other"
              : "banner-links--other banner-links--other--night"
          }
          style={
            i === 1
              ? hovered1
                ? { color: color.banner_links_text__hover }
                : { color: color.banner_links_text }
              : i === 2
              ? hovered2
                ? { color: color.banner_links_text__hover }
                : { color: color.banner_links_text }
              : i === 3
              ? hovered3
                ? { color: color.banner_links_text__hover }
                : { color: color.banner_links_text }
              : i === 4
              ? hovered4
                ? { color: color.banner_links_text__hover }
                : { color: color.banner_links_text }
              : hovered5
              ? { color: color.banner_links_text__hover }
              : { color: color.banner_links_text }
          }
          onMouseEnter={
            i === 1
              ? toggleHover1
              : i === 2
              ? toggleHover2
              : i === 3
              ? toggleHover3
              : i === 4
              ? toggleHover4
              : toggleHover5
          }
          onMouseLeave={
            i === 1
              ? toggleHover1
              : i === 2
              ? toggleHover2
              : i === 3
              ? toggleHover3
              : i === 4
              ? toggleHover4
              : toggleHover5
          }
        >
          {link_name}
        </div>
      );
  }

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
            hoveredPosts
              ? {
                  borderBottom: `3px solid ${color.banner_links_text__hover}`,
                  color: color.banner_links_text__hover
                }
              : {
                  borderBottom: `3px solid ${color.banner_links_posts}`,
                  color: color.banner_links_posts
                }
          }
          onMouseEnter={toggleHoverPosts}
          onMouseLeave={toggleHoverPosts}
        >
          Posts
        </div>
        {getLinks(1)}
        {getLinks(2)}
        {getLinks(3)}
        {getLinks(4)}
        {getLinks(5)}
      </div>
    </div>
  );
}

export default Banner;
