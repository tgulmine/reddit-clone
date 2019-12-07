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
  const nightMode = props.nightMode;

  async function getData() {
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone-colors/colors/${idSub}`
      );
      console.log(res);
      setColor(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={
        !nightMode
          ? "sortBar-container"
          : "sortBar-container sortBar-container--night"
      }
    >
      <div className="sortBar-view">
        <div className="sortBar-view--text">VIEW</div>
        <div
          className={
            !nightMode
              ? "sortBar-view--icon"
              : "sortBar-view--icon sortBar-view--icon--on--night"
          }
          style={{
            color: color.sortbar_icons
          }}
        >
          <FontAwesomeIcon
            className="sortBar-view--icon--on"
            icon={faGripLines}
          />
        </div>
        <div
          className={
            !nightMode
              ? "sortBar-view--icon"
              : "sortBar-view--icon sortBar-view--icon--off--night"
          }
          style={{
            color: color.sortbar_icons__off
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div
          className={
            !nightMode
              ? "sortBar-view--icon"
              : "sortBar-view--icon sortBar-view--icon--off--night"
          }
          style={{
            color: color.sortbar_icons__off
          }}
        >
          <FontAwesomeIcon icon={faAlignJustify} />
        </div>
      </div>
      <div className="sortBar-sort">
        <div className="sortBar-sort--text">SORT</div>
        <div
          className={
            !nightMode
              ? "sortBar-sort--button"
              : "sortBar-sort--button sortBar-sort--button--night"
          }
        >
          <div
            className={
              !nightMode
                ? "sortBar-view--icon"
                : "sortBar-view--icon sortBar-view--icon--on--night"
            }
            style={{
              color: color.sortbar_icons
            }}
          >
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
