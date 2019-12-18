import React from "react";
import "./Links.scss";

function Links(props) {
  const { nightMode } = props;

  return (
    <div
      className={
        !nightMode
          ? "links-container"
          : "links-container links-container--night"
      }
    >
      <div className="links-top">
        <div className="links-top-group">
          <div className="links-top-group--title">Reddit</div>
          <div className="links-top-group--button font-noto">About</div>
          <div className="links-top-group--button font-noto">Careers</div>
          <div className="links-top-group--button font-noto">Press</div>
          <div className="links-top-group--button font-noto">Advertise</div>
          <div className="links-top-group--button font-noto">Blog</div>
        </div>
        <div className="links-top-group">
          <div className="links-top-group--title">Using Reddit</div>
          <div className="links-top-group--button font-noto">Help</div>
          <div className="links-top-group--button font-noto">Reddit App</div>
          <div className="links-top-group--button font-noto">Reddit Coins</div>
          <div className="links-top-group--button font-noto">
            Reddit Premium
          </div>
          <div className="links-top-group--button font-noto">Reddit Gifts</div>
          <div className="links-top-group--button font-noto">Communities</div>
          <div className="links-top-group--button font-noto">Top Posts</div>
        </div>
      </div>
      <div className="links-bottom font-noto">
        <div className="links-bottom-terms">
          <div>Terms</div>
          <span>|</span>
          <div>Content Policy</div>
          <span>|</span>
          <div>Privacy Policy</div>
          <span>|</span>
          <div>Mod Policy</div>
        </div>
        <div className="font-noto">Reddit Inc © 2019. All rights reserved</div>
      </div>
    </div>
  );
}

export default Links;
