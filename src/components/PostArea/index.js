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
  const nightMode = props.nightMode;

  async function getData() {
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

  return (
    <div
      className={
        !nightMode
          ? "postArea-container"
          : "postArea-container postArea-container--night"
      }
      style={{
        backgroundColor: color.postarea_bg
      }}
    >
      <div className="postArea-left">
        <CreatePost nightMode={nightMode} />
        <Post idPost={1} idSub={idSub} nightMode={nightMode} />
        <Post idPost={2} idSub={idSub} nightMode={nightMode} />
        <Post idPost={3} idSub={idSub} nightMode={nightMode} />
      </div>
      <div className="postArea-right">
        <About idSub={idSub} nightMode={nightMode} />
        <Ad nightMode={nightMode} />
      </div>
    </div>
  );
}

export default PostArea;
