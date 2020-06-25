import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Mods.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Mods(props) {
  const [color, setColor] = useState({});
  const [mods, setMods] = useState({});
  const { idSub, nightMode } = props;

  const [hoveredIcon, setHoveredIcon] = useState(false);
  const toggleHoverIcon = () => setHoveredIcon(!hoveredIcon);

  async function getData() {
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone-mods/mods/${idSub}`
      );
      /* console.log(res); */
      setMods(res.data);
    } catch (err) {
      console.log(err);
    }
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone-colors/colors/${idSub}`
      );
      /* console.log(res); */
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
    <div className="mods-container">
      <div
        className={
          !nightMode ? "mods-topbar" : "mods-topbar mods-topbar--night"
        }
        style={{
          backgroundColor: color.postarea_topbar_bg,
          color: color.postarea_topbar_text
        }}
      >
        <div className="mods-topbar--title">MODERATORS</div>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="mods-topbar--icon"
          style={
            hoveredIcon
              ? { backgroundColor: color.mods_icon_bg }
              : { backgroundColor: null }
          }
          onMouseEnter={toggleHoverIcon}
          onMouseLeave={toggleHoverIcon}
        />
      </div>
      <div className={!nightMode ? "mods-main" : "mods-main mods-main--night"}>
        <div
          className="mods-main-list"
          style={{
            color: color.mods_text
          }}
        >
          {mods.list &&
            mods.list.map((mod, index) => (
              <div className="mods-main-list--line">
                <div
                  className={
                    !nightMode
                      ? "mods-main-list--line--name"
                      : "mods-main-list--line--name mods-main-list--line--name--night"
                  }
                >
                  u/{mod[0]}
                </div>
                <div
                  className={
                    !nightMode
                      ? "mods-main-list--line--title"
                      : "mods-main-list--line--title mods-main-list--line--title--night"
                  }
                >
                  {mod[1]}
                </div>
              </div>
            ))}
        </div>
        <div
          className={
            !nightMode
              ? "mods-main-button"
              : "mods-main-button mods-main-button--night"
          }
          style={{
            color: color.mods_text
          }}
        >
          VIEW ALL MODERATORS
        </div>
      </div>
    </div>
  );
}

export default Mods;
