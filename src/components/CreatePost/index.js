import React from "react";
import "./CreatePost.scss";

function CreatePost(props) {
  const nightMode = props.nightMode;

  return (
    <div
      className={
        !nightMode
          ? "createPost-container"
          : "createPost-container createPost-container--night"
      }
    >
      <div
        className={
          !nightMode
            ? "createPost-input"
            : "createPost-input createPost-input--night"
        }
      >
        Create Post
      </div>
    </div>
  );
}

export default CreatePost;
