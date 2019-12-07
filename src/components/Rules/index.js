import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Rules.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Rules(props) {
  const [sub, setSub] = useState({});
  const [rules, setRules] = useState({});
  const [color, setColor] = useState({});
  const { idSub, nightMode } = props;

  const [openRule, setOpenRule] = useState([]);

  async function getData(r) {
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/subs/${idSub}`
      );
      console.log(res);
      setSub(res.data);
    } catch (err) {
      console.log(err);
    }
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone-rules-${r}/rules/${idSub}`
      );
      console.log("rules", res);
      setRules(res.data);
      setOpenRule(res.data.titles.map(_ => false));
    } catch (err) {
      console.log(err);
    }
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
    if (idSub < 4) getData(1);
    else if (idSub > 3 && idSub < 6) getData(2);
    else if (idSub > 5 && idSub < 8) getData(3);
    else if (idSub > 7) getData(4);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rules-container">
      <div
        className={
          !nightMode ? "rules-topbar" : "rules-topbar rules-topbar--night"
        }
        style={{
          backgroundColor: color.postarea_topbar_bg,
          color: color.postarea_topbar_text
        }}
      >
        r/{sub.slug} rules
      </div>
      <div
        className={!nightMode ? "rules-main" : "rules-main rules-main--night"}
      >
        {rules.titles &&
          rules.titles.map((rule, index) => (
            <button
              type="button"
              className={
                !nightMode
                  ? "rules-main-rule"
                  : "rules-main-rule rules-main-rule--night"
              }
              onClick={() => {
                setOpenRule(
                  openRule.map((_, i) =>
                    index === i ? !openRule[i] : openRule[i]
                  )
                );
              }}
            >
              <div className="rules-main-rule--title">
                <div className="rules-main-rule--title--number">
                  {index + 1}.
                </div>
                <div className="rules-main-rule--title--name">{rule}</div>
                <FontAwesomeIcon
                  icon={openRule[index] ? faChevronUp : faChevronDown}
                  className="rules-main-rule--title--icon"
                />
              </div>

              {rules.descriptions && openRule[index] && (
                <div className="rules-main-rule--desc font-noto">
                  {rules.descriptions[index]}
                </div>
              )}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Rules;
