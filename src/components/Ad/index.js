import React from "react";
import "./Ad.scss";

export default class Ad extends React.Component {
  getImage(imageUrl) {
    return { backgroundImage: `url("${imageUrl}")` };
  }

  render() {
    return (
      <div className="ad-container">
        <div className="ad-title">ADVERTISEMENT</div>
        <div
          className="ad-image"
          style={this.getImage(
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/Target_dog.jpg"
          )}
        />
      </div>
    );
  }
}
