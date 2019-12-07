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

  async function getData() {
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone-posts/posts/${idPost}`
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
    getData();
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

  return (
    <div
      className={
        !nightMode ? "post-container" : "post-container post-container--night"
      }
      style={{
        backgroundColor: color.post_bg
      }}
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
        <div
          className={
            !nightMode
              ? "post-description font-noto"
              : "post-description post-description--night font-noto"
          }
        >
          {post.description}
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
