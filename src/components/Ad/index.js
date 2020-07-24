import React, { useState, useEffect } from "react";
import "./Ad.scss";

function Ad(props) {
  const { nightMode } = props;
  const [adIndex, setAdIndex] = useState(null);
  const adData = [
    "what",
    "https://moderndogmagazine.com/sites/default/files/images/articles/top_images/can-dogs-eat-bananas.jpg",
    "https://i.redd.it/ipb6mwkqvdpz.jpg",
    "https://slm-assets.secondlife.com/assets/22424475/view_large/Screenshot_7.jpg?1545151090",
    "https://2eu.funnyjunk.com/pictures/Shibe+shoob_3cfdcf_5904794.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFshKFTwIfWqNjbe4mYxVYgjt9i_f022AMrA&usqp=CAU",
    "https://vignette.wikia.nocookie.net/kirby-twitter/images/a/ae/5E5A351E-0EB0-4BBE-8FF3-6FF132B36895.jpeg/revision/latest/top-crop/width/360/height/450?cb=20190225042732"
  ];

  useEffect(() => {
    setAdIndex(Math.floor(Math.random() * (adData.length - 1) + 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        !nightMode ? "ad-container" : "ad-container ad-container--night"
      }
    >
      <div className={!nightMode ? "ad-title" : "ad-title ad-title--night"}>
        ADVERTISEMENT
      </div>
      {console.log(adIndex)}
      <div
        className="ad-image"
        style={{
          backgroundImage: adIndex ? `url(${adData[adIndex]})` : null
        }}
      />
    </div>
  );
}

export default Ad;
