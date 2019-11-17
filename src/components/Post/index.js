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
  const idPost = props.idPost;

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/posts/${idPost}`
      )
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idPost]);

  return (
    <div className="post-container">
      <div className="post-votes">
        <div className="post-votes--icon post-votes--icon--up">
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <div className="post-votes--text">{post.likes}</div>
        <div className="post-votes--icon post-votes--icon--down">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="post-content">
        <div className="post-info">
          Posted by u/{post.username} {post.date}{" "}
          <FontAwesomeIcon
            className={post.sticky ? "post-info--icon" : "d-none"}
            icon={faThumbtack}
          />
        </div>
        <div className="post-title">{post.title}</div>
        <div className="post-description font-noto">{post.description}</div>
        <div
          className={
            post.description ? "post-options post-options--pt" : "post-options"
          }
        >
          <div className="post-options--comments">
            <div className="post-options--icon">
              <FontAwesomeIcon icon={faCommentAlt} />
            </div>
            <div className="post-options--text">{post.comments} comments</div>
          </div>
          <div className="post-options--share">
            <div className="post-options--icon">
              <FontAwesomeIcon icon={faShare} />
            </div>
            <div className="post-options--text">Share</div>
          </div>
          <div className="post-options--save">
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
