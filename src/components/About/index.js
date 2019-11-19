import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

function About(props) {
  const [sub, setSub] = useState({});
  const [color, setColor] = useState({});
  const idSub = props.idSub;

  const [hoverJoin, setHoverJoin] = useState(false);
  const toggleHoverJoin = () => setHoverJoin(!hoverJoin);
  const [hoverCreate, setHoverCreate] = useState(false);
  const toggleHoverCreate = () => setHoverCreate(!hoverCreate);

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
    <div className="about-container">
      <div
        className="about-topbar"
        style={{
          backgroundColor: color.postarea_topbar_bg,
          color: color.postarea_topbar_text
        }}
      >
        COMMUNITY DETAILS
      </div>
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
        <div
          className="about-button about-button--above"
          style={
            hoverJoin
              ? {
                  backgroundColor: color.postarea_button_bg
                }
              : {
                  backgroundColor: color.postarea_button_bg__hover
                }
          }
          onMouseEnter={toggleHoverJoin}
          onMouseLeave={toggleHoverJoin}
        >
          JOIN
        </div>
        <div
          className="about-button"
          style={
            hoverCreate
              ? {
                  backgroundColor: color.postarea_button_bg
                }
              : {
                  backgroundColor: color.postarea_button_bg__hover
                }
          }
          onMouseEnter={toggleHoverCreate}
          onMouseLeave={toggleHoverCreate}
        >
          CREATE POST
        </div>
      </div>
    </div>
  );
}

export default About;
