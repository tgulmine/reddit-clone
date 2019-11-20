import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSearch,
  faUser,
  faChartLine,
  faChartBar,
  faListOl,
  faCoins,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const [sub, setSub] = useState({});
  const idSub = props.idSub;

  const [subDrop, setSubDrop] = useState(false);

  document.addEventListener("click", function(event) {
    if (!document.getElementById("subDropContainer").contains(event.target)) {
      console.log("setSubDrop(false)");
      setSubDrop(false);
    }
  });

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
    <div className="header-container">
      <div className="header-logo" />
      <div className="header-subDrop-container" id="subDropContainer">
        <button
          type="button"
          className={
            !subDrop
              ? "header-subDrop-button header-subDrop-button--dropOff"
              : "header-subDrop-button header-subDrop-button--dropOn"
          }
          onClick={() => setSubDrop(!subDrop)}
        >
          <div
            className="header-subDrop-button--logo"
            style={{
              backgroundImage: `url(${sub.logo})`
            }}
          />
          <div className="header-subDrop-button--title">r/{sub.slug}</div>
          <FontAwesomeIcon
            className="header-subDrop-button--icon"
            icon={faSortDown}
          />
        </button>
        {subDrop && (
          <div className="header-subDrop-drop">
            <div className="header-subDrop-drop--filter">
              <input
                className="header-subDrop-drop--filter--input"
                type="text"
                placeholder="Filter"
              ></input>
            </div>
            <div className="header-subDrop-drop--title">REDDIT FEEDS</div>
            <div className="header-subDrop-drop--button">
              <FontAwesomeIcon
                className="header-subDrop-drop--icon"
                icon={faChartLine}
              />
              Popular
            </div>
            <div className="header-subDrop-drop--button">
              <FontAwesomeIcon
                className="header-subDrop-drop--icon"
                icon={faChartBar}
              />
              All
            </div>
            <div className="header-subDrop-drop--button">
              <FontAwesomeIcon
                className="header-subDrop-drop--icon"
                icon={faListOl}
              />
              Top Communities
            </div>
            <div className="header-subDrop-drop--title">OTHER</div>
            <div className="header-subDrop-drop--button">
              <FontAwesomeIcon
                className="header-subDrop-drop--icon header-subDrop-drop--icon--yellow"
                icon={faCoins}
              />
              Coins
            </div>
            <div className="header-subDrop-drop--button">
              <FontAwesomeIcon
                className="header-subDrop-drop--icon header-subDrop-drop--icon--orange"
                icon={faShieldAlt}
              />
              Premium
            </div>
          </div>
        )}
      </div>

      <div className="header-searchBar">
        <FontAwesomeIcon className="header-searchBar--icon" icon={faSearch} />
        <input
          className="header-searchBar--input"
          type="text"
          placeholder={`Search r/${sub.slug}`}
        ></input>
      </div>

      <div className="header-links">
        <div>
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <div className="header-links--right">
          <FontAwesomeIcon icon={faChartBar} />
        </div>
      </div>
      <div className="header-access">
        <div className="header-access--login">LOG IN</div>
        <div className="header-access--signup">SIGN UP</div>
      </div>
      <div className="header-options">
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <FontAwesomeIcon
            className="header-options-icon--sortDown"
            icon={faSortDown}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
