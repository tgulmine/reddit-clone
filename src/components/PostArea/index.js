import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostArea.scss";
import CreatePost from "../CreatePost/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faThumbtack,
  faCommentAlt,
  faShare,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

function PostArea(props) {
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
    <div className="postArea-container">
      <div className="postArea-left">
        <CreatePost />
        <div className="postArea-post">
          <div className="postArea-post-votes">
            <div className="postArea-post-votes--icon postArea-post-votes--icon--up">
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
            <div className="postArea-post-votes--text">5.5k</div>
            <div className="postArea-post-votes--icon postArea-post-votes--icon--down">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="postArea-post-content">
            <div className="postArea-post-info">
              Posted by u/{post.username} {post.date}{" "}
              <FontAwesomeIcon
                className={post.sticky ? "postArea-post-info--icon" : "d-none"}
                icon={faThumbtack}
              />
            </div>
            <div className="postArea-post-title">{post.title}</div>
            <div className="postArea-post-description font-noto">
              {post.description}
            </div>
            <div className="postArea-post-options">
              <div className="postArea-post-options--comments">
                <div className="postArea-post-options--icon">
                  <FontAwesomeIcon icon={faCommentAlt} />
                </div>
                <div className="postArea-post-options--text">
                  {post.comments} comments
                </div>
              </div>
              <div className="postArea-post-options--share">
                <div className="postArea-post-options--icon">
                  <FontAwesomeIcon icon={faShare} />
                </div>
                <div className="postArea-post-options--text">Share</div>
              </div>
              <div className="postArea-post-options--save">
                <div className="postArea-post-options--icon">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <div className="postArea-post-options--text">Save</div>
              </div>
              <div className="postArea-post-options--extra">...</div>
            </div>
          </div>
        </div>
      </div>
      <div className="postArea-right">
        <div className="postArea-about">about</div>
      </div>
    </div>
  );
}

export default PostArea;
