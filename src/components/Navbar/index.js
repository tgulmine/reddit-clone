import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSearch,
  faUser,
  faChartLine,
  faChartBar,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [sub, setSub] = useState({});
  const idSub = 1;

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/subreddits/${idSub}`
      )
      .then(res => {
        console.log(res);
        setSub(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-logo" />
      <div className="navbar-sub-drop">
        <div className="navbar-sub-drop--logo" />
        <div className="navbar-sub-drop--title">r/{sub.slug}</div>
        <FontAwesomeIcon className="navbar-sub-drop--icon" icon={faSortDown} />
      </div>
      <div className="navbar-searchBar">
        <FontAwesomeIcon className="navbar-searchBar--icon" icon={faSearch} />
        <input
          className="navbar-searchBar--input"
          type="text"
          placeholder={`Search r/${sub.slug}`}
        ></input>
      </div>

      <div className="navbar-links">
        <div>
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <div>
          <FontAwesomeIcon icon={faChartBar} />
        </div>
      </div>
      <div className="navbar-access">
        <div className="navbar-access--login">LOG IN</div>
        <div className="navbar-access--signup">SIGN UP</div>
      </div>
      <div className="navbar-options">
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <FontAwesomeIcon
            className="navbar-options-icon--sortDown"
            icon={faSortDown}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
