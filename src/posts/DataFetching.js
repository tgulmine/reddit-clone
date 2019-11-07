import React, { useState, useEffect } from "react";
import axios from "axios";

/* import PostData from "../data/posts.json"; */

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-json-demo/posts/${id}`
      )
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
      ></input>
      <div>{post.title}</div>
      {/* <ul>
        {post.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
