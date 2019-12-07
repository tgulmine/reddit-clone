import React from "react";
import "./Ad.scss";

function Ad(props) {
  const { nightMode } = props;

  return (
    <div
      className={
        !nightMode ? "ad-container" : "ad-container ad-container--night"
      }
    >
      <div className={!nightMode ? "ad-title" : "ad-title ad-title--night"}>
        ADVERTISEMENT
      </div>
      <div
        className="ad-image"
        style={{
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/a/a7/Target_dog.jpg)`
        }}
      />
    </div>
  );
}

export default Ad;
