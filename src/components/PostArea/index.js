import React from "react";
import "./PostArea.scss";
import CreatePost from "../CreatePost/index";
import Post from "../Post/index";
import About from "../About/index";
import Ad from "../Ad/index";

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
        <About idSub={1} />
        <Ad />
      </div>
    </div>
  );
}

export default PostArea;
