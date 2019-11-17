import React from "react";
import "./PostArea.scss";
import CreatePost from "../CreatePost/index";
import Post from "../Post/index";

function PostArea() {
  return (
    <div className="postArea-container">
      <div className="postArea-left">
        <CreatePost />
        <Post idPost={1} />
        <Post idPost={2} />
        <Post idPost={3} />
      </div>
      <div className="postArea-right">
        <div className="postArea-about">about</div>
      </div>
    </div>
  );
}

export default PostArea;
