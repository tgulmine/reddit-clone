import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import "./Banner.scss";

function Banner(props) {
  const [sub, setSub] = useState({});
  const [color, setColor] = useState({});
  const { idSub, nightMode } = props;

  const [hoveredPosts, setHoveredPosts] = useState(false);
  const toggleHoverPosts = () => setHoveredPosts(!hoveredPosts);

  const [hoveredNextSub, setHoveredNextSub] = useState(false);
  const toggleHoverNextSub = () => setHoveredNextSub(!hoveredNextSub);

  const [hovers, setHovers] = useState([]);

  const [hoverImgTitle, setHoverImgTitle] = useState(false);
  const toggleHoverImgTitle = () => setHoverImgTitle(!hoverImgTitle);

  async function getData() {
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/subs/${idSub}`
      );
      /* console.log(res); */
      setSub(res.data);
      setHovers(res.data.banner_links.map(_ => false));
    } catch (err) {
      console.log(err);
    }
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone-colors/colors/${idSub}`
      );
      /* console.log(res); */
      setColor(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function returnNextSubLink() {
    switch (idSub) {
      case 1:
        return "/r/funny";
      case 2:
        return "/r/askreddit";
      case 3:
        return "/r/announcements";
      default:
        return "/r/funny";
    }
  }

  return (
    <div className="banner-container">
      <div
        className={`banner-sub-${sub.banner_type}`}
        style={{
          backgroundColor: color.banner_sub_bg,
          color: color.banner_sub_text,
          backgroundImage: `url(${sub.banner_img_bg})`
        }}
      >
        <div className={`banner-sub-${sub.banner_type}--logo`}>
          <div
            className={`banner-sub-${sub.banner_type}--logo--image`}
            style={{
              backgroundImage: `url(${sub.logo})`
            }}
          />
        </div>
        <div
          className={`banner-sub-${sub.banner_type}--title`}
          style={
            hoverImgTitle && sub.banner_type === 5
              ? { backgroundImage: `url(${sub.banner_img_title_2})` }
              : {
                  backgroundImage: `url(${sub.banner_img_title})`
                }
          }
          onMouseEnter={toggleHoverImgTitle}
          onMouseLeave={toggleHoverImgTitle}
        >
          {sub.banner_type === 1 || sub.banner_type === 2 ? sub.title : null}
        </div>
      </div>
      <div
        className={
          !nightMode && sub.banner_type !== 8
            ? "banner-links"
            : nightMode && sub.banner_type !== 8
            ? "banner-links banner-links--night"
            : !nightMode && sub.banner_type === 8
            ? "banner-links banner-links--aww"
            : "banner-links banner-links--night banner-links--aww"
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
              key={index}
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

        <Link
          to={returnNextSubLink()}
          className={
            !nightMode
              ? "banner-links--other"
              : "banner-links--other banner-links--other--night"
          }
          style={
            hoveredNextSub
              ? {
                  color: color.banner_links_text__hover
                }
              : {
                  color: color.banner_links_posts
                }
          }
          onMouseEnter={toggleHoverNextSub}
          onMouseLeave={toggleHoverNextSub}
        >
          Go to Next Subreddit
          <FontAwesomeIcon
            className="banner-links--icon"
            icon={faHandPointRight}
          />
        </Link>
      </div>
    </div>
  );
}

export default Banner;
