import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

function About(props) {
  const [sub, setSub] = useState({});
  const idSub = props.idSub;

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/subs/${idSub}`
      )
      .then(res => {
        console.log(res);
        setSub(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idSub]);

  return (
    <div className="about-container">
      <div className="about-topbar">COMMUNITY DETAILS</div>
      <div className="about-main">
        <div className="about-sub">
          <div className="about-sub--logo" />
          <div className="about-sub--title">r/{sub.slug}</div>
        </div>
        <div className="about-info">
          <div className="about-info-members">
            <div className="about-info--above">{sub.members}</div>
            <div className="about-info--below">Members</div>
          </div>
          <div className="about-info-online">
            <div className="about-info--above">{sub.online}</div>
            <div className="about-info--below">Online</div>
          </div>
          <div className="about-info-cake">
            <div className="about-info--above">{sub.cake}</div>
            <div className="about-info--below">
              <FontAwesomeIcon
                icon={faBirthdayCake}
                className="about-info--below--icon"
              />{" "}
              Cake Day
            </div>
          </div>
        </div>
        <div className="about-description font-noto">{sub.description}</div>
        <div className="about-button about-button--above">JOIN</div>
        <div className="about-button">CREATE POST</div>
      </div>
    </div>
  );
}

export default About;
