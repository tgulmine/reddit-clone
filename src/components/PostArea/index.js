import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostArea.scss";
import CreatePost from "../CreatePost/index";
import Post from "../Post/index";
import About from "../About/index";
import Ad from "../Ad/index";

function PostArea(props) {
  const [color, setColor] = useState({});
  const idSub = props.idSub;

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/colors/${idSub}`
      )
      .then(res => {
        console.log(res);
        setColor(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idSub]);

  return (
    <div
      className="postArea-container"
      style={{
        backgroundColor: color.postarea_bg
      }}
    >
      <div className="postArea-left">
        <CreatePost />
        <Post idPost={1} idSub={idSub} />
        <Post idPost={2} idSub={idSub} />
        <Post idPost={3} idSub={idSub} />
      </div>
      <div className="postArea-right">
        <About idSub={idSub} />
        <Ad />
      </div>
    </div>
  );
}

export default PostArea;
