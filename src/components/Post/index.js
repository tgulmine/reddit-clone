import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faThumbtack,
  faCommentAlt,
  faShare,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

function Post(props) {
  const [post, setPost] = useState({});
  const [color, setColor] = useState({});
  const { idSub, idPost, nightMode } = props;

  async function getData(p) {
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone-posts-${p}/posts/${idPost}`
      );
      console.log(res);
      setPost(res.data);
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
    if (idSub === 1) getData(1);
    else if (idSub === 2 || idSub === 3) getData(2);
    /* getData(1); */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function postOptionsCss() {
    if (post.description) {
      if (!nightMode) {
        return "post-options post-options--pt";
      } else {
        return "post-options post-options--pt post-options--night";
      }
    } else {
      if (!nightMode) {
        return "post-options";
      } else {
        return "post-options post-options--night";
      }
    }
  }

  function getImageHeight() {
    return (512 * post.img_size[1]) / post.img_size[0];
  }

  return (
    <div
      className={
        !nightMode ? "post-container" : "post-container post-container--night"
      }
      style={
        idPost !== 1
          ? {
              backgroundColor: color.post_bg
            }
          : {
              backgroundColor: color.post_bg,
              marginTop: 0
            }
      }
    >
      <div
        className={!nightMode ? "post-votes" : "post-votes post-votes--night"}
        style={{
          backgroundColor: color.post_votes_bg
        }}
      >
        <div
          className={
            !nightMode
              ? "post-votes--icon post-votes--icon--up"
              : "post-votes--icon post-votes--icon--up post-votes--icon--night"
          }
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <div
          className={
            !nightMode
              ? "post-votes--text"
              : "post-votes--text post-votes--text--night"
          }
        >
          {post.likes}
        </div>
        <div
          className={
            !nightMode
              ? "post-votes--icon post-votes--icon--down"
              : "post-votes--icon post-votes--icon--down post-votes--icon--night"
          }
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="post-content">
        <div
          className={!nightMode ? "post-info" : "post-info post-info--night"}
        >
          Posted by u/{post.username} {post.date}{" "}
          <FontAwesomeIcon
            className={post.sticky ? "post-info--icon" : "d-none"}
            icon={faThumbtack}
          />
        </div>
        <div
          className={!nightMode ? "post-title" : "post-title post-title--night"}
        >
          {post.title}
        </div>
        {post.type === 1 ? (
          <div
            className={
              !nightMode
                ? `post-description-1 font-noto`
                : `post-description-1 post-description-1--night font-noto`
            }
          >
            {post.description}
          </div>
        ) : post.type === 2 ? (
          <div
            className={
              !nightMode
                ? `post-description-2`
                : `post-description-2 post-description-2--night`
            }
          >
            <div
              className="post-description-2--image"
              style={{
                backgroundImage: `url(${post.description})`,
                height: getImageHeight()
              }}
            />
          </div>
        ) : null}
        <div
          className={
            !nightMode
              ? `post-description-${post.type} font-noto`
              : `post-description-${post.type} post-description-${post.type}--night font-noto`
          }
          style={
            post.type === 2
              ? {
                  backgroundImage: `url(${post.description})`
                }
              : null
          }
        >
          {post.type === 1 ? post.description : null}
        </div>
        <div className={postOptionsCss()}>
          <div>
            <div className="post-options--icon">
              <FontAwesomeIcon icon={faCommentAlt} />
            </div>
            <div className="post-options--text">{post.comments} comments</div>
          </div>
          <div>
            <div className="post-options--icon">
              <FontAwesomeIcon icon={faShare} />
            </div>
            <div className="post-options--text">Share</div>
          </div>
          <div>
            <div className="post-options--icon">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            <div className="post-options--text">Save</div>
          </div>
          <div className="post-options--extra">...</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
