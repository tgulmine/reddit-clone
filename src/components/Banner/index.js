import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.scss";

function Banner(props) {
  const [sub, setSub] = useState({});
  const [color, setColor] = useState({});
  const { idSub, nightMode } = props;

  const [hoveredPosts, setHoveredPosts] = useState(false);
  const toggleHoverPosts = () => setHoveredPosts(!hoveredPosts);

  const [hovers, setHovers] = useState([]);

  async function getData() {
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/subs/${idSub}`
      );
      console.log(res);
      setSub(res.data);
      setHovers(res.data.banner_links.map(_ => false));
    } catch (err) {
      console.log(err);
    }
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone-colors/colors/${idSub}`
      );
      console.log(res);
      setColor(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        {sub.banner_links &&
          sub.banner_links.map((link, index) => (
            <div
              className={
                !nightMode
                  ? "banner-links--other"
                  : "banner-links--other banner-links--other--night"
              }
              style={
                hovers[index]
                  ? { color: color.banner_links_text__hover }
                  : { color: color.banner_links_text }
              }
              onMouseEnter={() => {
                setHovers(hovers.map((_, i) => index === i));
              }}
              onMouseLeave={() => {
                setHovers(hovers.map((_, i) => false));
              }}
            >
              {link}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Banner;
