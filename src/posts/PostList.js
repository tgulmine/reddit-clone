import * as React from "react";
import PostData from "../data/posts.json";

function PostList() {
  return (
    <div>
      {PostData.subreddits.map((postDetail, index) => {
        return (
          <div>
            <h1>{postDetail.title}</h1>
            <p>{postDetail.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
