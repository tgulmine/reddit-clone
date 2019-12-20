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
  faShieldAlt,
  faMoon,
  faSignInAlt,
  faExternalLinkAlt,
  faNetworkWired
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

function Header(props) {
  const [sub, setSub] = useState({});
  const { idSub, nightMode } = props;

  const [subDrop, setSubDrop] = useState(false);
  const [optDrop, setOptDrop] = useState(false);

  document.addEventListener("click", function(event) {
    if (!document.getElementById("subDropContainer").contains(event.target)) {
      console.log("setSubDrop(false)");
      setSubDrop(false);
    }
    if (!document.getElementById("optDropContainer").contains(event.target)) {
      console.log("setOptDrop(false)");
      setOptDrop(false);
    }
  });

  async function getData() {
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/subs/${idSub}`
      );
      console.log(res);
      setSub(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function subDropButtonCss() {
    if (subDrop) {
      if (nightMode) {
        return `header-subDrop-button header-subDrop-button--night header-subDrop-button--dropOn header-subDrop-button--dropOn--night`;
      } else {
        return "header-subDrop-button header-subDrop-button--dropOn";
      }
    } else {
      if (nightMode) {
        return `header-subDrop-button header-subDrop-button--night header-subDrop-button--dropOff 
        header-subDrop-button--dropOff--night`;
      } else {
        return "header-subDrop-button header-subDrop-button--dropOff";
      }
    }
  }

  function optDropButtonCss() {
    if (subDrop) {
      if (nightMode) {
        return `header-options-button header-options-button--night header-options-button--dropOn header-options-button--dropOn--night`;
      } else {
        return "header-options-button header-options-button--dropOn";
      }
    } else {
      if (nightMode) {
        return `header-options-button header-options-button--night header-options-button--dropOff 
        header-options-button--dropOff--night`;
      } else {
        return "header-options-button header-options-button--dropOff";
      }
    }
  }

  return (
    <div
      className={
        !nightMode
          ? "header-container"
          : "header-container header-container--night"
      }
    >
      <div
        className={
          !nightMode ? "header-logo" : "header-logo header-logo--night"
        }
      />
      <div className="header-subDrop-container" id="subDropContainer">
        <button
          type="button"
          className={subDropButtonCss()}
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
          <div
            className={
              !nightMode
                ? "header-subDrop-drop"
                : "header-subDrop-drop header-subDrop-drop--night"
            }
          >
            <div
              className={
                !nightMode
                  ? "header-subDrop-drop--filter"
                  : "header-subDrop-drop--filter header-subDrop-drop--filter--night"
              }
            >
              <input
                className="header-subDrop-drop--filter--input"
                type="text"
                placeholder="Filter"
              ></input>
            </div>
            <div className="header-subDrop-drop--title">REDDIT FEEDS</div>
            <div
              className={
                !nightMode
                  ? "header-subDrop-drop--button"
                  : "header-subDrop-drop--button header-subDrop-drop--button--night"
              }
            >
              <FontAwesomeIcon
                className="header-subDrop-drop--icon"
                icon={faChartLine}
              />
              Popular
            </div>
            <div
              className={
                !nightMode
                  ? "header-subDrop-drop--button"
                  : "header-subDrop-drop--button header-subDrop-drop--button--night"
              }
            >
              <FontAwesomeIcon
                className="header-subDrop-drop--icon"
                icon={faChartBar}
              />
              All
            </div>
            <div
              className={
                !nightMode
                  ? "header-subDrop-drop--button"
                  : "header-subDrop-drop--button header-subDrop-drop--button--night"
              }
            >
              <FontAwesomeIcon
                className="header-subDrop-drop--icon"
                icon={faListOl}
              />
              Top Communities
            </div>
            <div className="header-subDrop-drop--title">OTHER</div>
            <div
              className={
                !nightMode
                  ? "header-subDrop-drop--button"
                  : "header-subDrop-drop--button header-subDrop-drop--button--night"
              }
            >
              <FontAwesomeIcon
                className="header-subDrop-drop--icon header-subDrop-drop--icon--yellow"
                icon={faCoins}
              />
              Coins
            </div>
            <div
              className={
                !nightMode
                  ? "header-subDrop-drop--button"
                  : "header-subDrop-drop--button header-subDrop-drop--button--night"
              }
            >
              <FontAwesomeIcon
                className="header-subDrop-drop--icon header-subDrop-drop--icon--orange"
                icon={faShieldAlt}
              />
              Premium
            </div>
          </div>
        )}
      </div>

      <div
        className={
          !nightMode
            ? "header-searchBar"
            : "header-searchBar header-searchBar--night"
        }
      >
        <FontAwesomeIcon className="header-searchBar--icon" icon={faSearch} />
        <input
          className="header-searchBar--input"
          type="text"
          placeholder={`Search r/${sub.slug}`}
        ></input>
      </div>

      <div
        className={
          !nightMode ? "header-links" : "header-links header-links--night"
        }
      >
        <div className="header-links--notRight">
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <div className="header-links--notRight">
          <FontAwesomeIcon icon={faChartBar} />
        </div>
        <div>
          <FontAwesomeIcon icon={faNetworkWired} />
        </div>
      </div>
      <div
        className={
          !nightMode ? "header-access" : "header-access header-access--night"
        }
      >
        <div
          className={
            !nightMode
              ? "header-access--login"
              : "header-access--login header-access--login--night"
          }
        >
          LOG IN
        </div>
        <div
          className={
            !nightMode
              ? "header-access--signup"
              : "header-access--signup header-access--signup--night"
          }
        >
          {" "}
          SIGN UP
        </div>
      </div>
      <div className="header-options-container" id="optDropContainer">
        <button
          type="button"
          className={optDropButtonCss()}
          onClick={() => setOptDrop(!optDrop)}
        >
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            <FontAwesomeIcon
              className="header-options-button--icon--sortDown"
              icon={faSortDown}
            />
          </div>
        </button>
        {optDrop && (
          <div
            className={
              !nightMode
                ? "header-options-drop"
                : "header-options-drop header-options-drop--night"
            }
          >
            <div className="header-options-drop--title">VIEW OPTIONS</div>
            <button
              className={
                !nightMode
                  ? "header-options-drop--button"
                  : "header-options-drop--button header-options-drop--button--night"
              }
              onClick={props.triggerNightMode}
            >
              <FontAwesomeIcon
                className="header-options-drop--icon"
                icon={faMoon}
                id="opt-drop-icon"
              />
              Night Mode
              <div
                className={
                  !nightMode
                    ? "header-options-drop--switch"
                    : "header-options-drop--switch header-options-drop--switch--night"
                }
              >
                <div
                  className={
                    !nightMode
                      ? "header-options-drop--switch--pin"
                      : "header-options-drop--switch--pin header-options-drop--switch--pin--night"
                  }
                />
              </div>
            </button>
            <div className="header-options-drop--title">MORE STUFF</div>
            <div
              className={
                !nightMode
                  ? "header-options-drop--button--coins"
                  : "header-options-drop--button--coins header-options-drop--button--night"
              }
            >
              <div className="header-options-drop--button--coins--above">
                <FontAwesomeIcon
                  className="header-options-drop--icon"
                  icon={faCoins}
                  id="opt-drop-icon"
                />
                Reddit Coins
              </div>
              <div className="header-options-drop--button--coins--below">
                0 Coins
              </div>
            </div>
            <div
              className={
                !nightMode
                  ? "header-options-drop--button"
                  : "header-options-drop--button header-options-drop--button--night"
              }
            >
              <FontAwesomeIcon
                className="header-options-drop--icon"
                icon={faShieldAlt}
                id="opt-drop-icon"
              />
              Reddit Premium
            </div>
            <div
              className={
                !nightMode
                  ? "header-options-drop--button"
                  : "header-options-drop--button header-options-drop--button--night"
              }
            >
              <FontAwesomeIcon
                className="header-options-drop--icon"
                icon={faQuestionCircle}
                id="opt-drop-icon"
              />
              Help Center
              <FontAwesomeIcon
                className="header-options-drop--icon--small"
                icon={faExternalLinkAlt}
                id="opt-drop-icon"
              />
            </div>
            <div
              className={
                !nightMode
                  ? "header-options-drop--button header-options-drop--button--last"
                  : `header-options-drop--button header-options-drop--button--night 
                  header-options-drop--button--last--night`
              }
            >
              <FontAwesomeIcon
                className="header-options-drop--icon"
                icon={faSignInAlt}
                id="opt-drop-icon"
              />
              Log In / Sign Up
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
