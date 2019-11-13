import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostArea.scss";

function PostArea() {
  const [post, setPost] = useState({});
  const idPost = 1;

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
  }, []);

  return (
    <div className="postArea-container">
      <div className="postArea-left">
        <div className="postArea-createPost">
          <div className="postArea-createPost--input">Create Post</div>
        </div>
        <div className="postArea-post">
          <div className="postArea-post-votes">
            <div className="postArea-post-votes--icon">A</div>
            <div className="postArea-post-votes--text">5.5k</div>
            <div className="postArea-post-votes--icon">V</div>
          </div>
          <div className="postArea-post-content">
            <div className="postArea-post-info">
              Posted by r/{post.username} {post.date}
            </div>
            <div className="postArea-post-title">{post.title}</div>
            <div className="postArea-post-description">{post.description}</div>
            <div className="postArea-post-options">
              <div className="postArea-post-options--comments">
                <div className="postArea-post-options--comments--icon">Y</div>
                <div className="postArea-post-options--comments--text">
                  {post.comments} comments
                </div>
              </div>
              <div className="postArea-post-options--share">
                <div className="postArea-post-options--share--icon">K</div>
                <div className="postArea-post-options--share--text">Share</div>
              </div>
              <div className="postArea-post-options--save">
                <div className="postArea-post-options--save--icon">G</div>
                <div className="postArea-post-options--save--text">Save</div>
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
