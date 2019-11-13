import React from "react";
import "./PostArea.scss";

function PostArea() {
  return (
    <div className="postArea-container">
      <div className="postArea-left">
        <div className="postArea-createPost">
          <div className="postArea-createPost--input">Create Post</div>
        </div>
        <div className="postArea-post">post a</div>
        <div className="postArea-post">post b</div>
      </div>
      <div className="postArea-right">
        <div className="postArea-about">about</div>
      </div>
    </div>
  );
}

export default PostArea;
