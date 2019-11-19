import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SortBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faGripLines,
  faBars,
  faAlignJustify,
  faBurn
} from "@fortawesome/free-solid-svg-icons";

function SortBar(props) {
  const [color, setColor] = useState({});
  const idSub = props.idSub;

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
    <div className="sortBar-container">
      <div className="sortBar-view">
        <div className="sortBar-view--text">VIEW</div>
        <div className="sortBar-view--icon">
          <FontAwesomeIcon
            className="sortBar-view--icon--on"
            icon={faGripLines}
          />
        </div>
        <div className="sortBar-view--icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="sortBar-view--icon">
          <FontAwesomeIcon icon={faAlignJustify} />
        </div>
      </div>
      <div className="sortBar-sort">
        <div className="sortBar-sort--text">SORT</div>
        <div className="sortBar-sort--button">
          <div className="sortBar-sort--button--icon">
            <FontAwesomeIcon icon={faBurn} />
          </div>
          <div className="sortBar-sort--button--text">HOT</div>
          <div className="sortBar-sort--button--arrow">
            <FontAwesomeIcon icon={faSortDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortBar;
