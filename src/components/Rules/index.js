import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Rules.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Rules(props) {
  const [sub, setSub] = useState({});
  const [rules, setRules] = useState({});
  const [color, setColor] = useState({});
  const idSub = props.idSub;
  const nightMode = props.nightMode;

  const [hoverJoin, setHoverJoin] = useState(false);
  const toggleHoverJoin = () => setHoverJoin(!hoverJoin);
  const [hoverCreate, setHoverCreate] = useState(false);
  const toggleHoverCreate = () => setHoverCreate(!hoverCreate);
  const [openRule, setOpenRule] = useState([]);

  let a = 2;

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
    try {
      const res = await axios.get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/rules/${idSub}`
      );
      console.log(res);
      setRules(res.data);
      setOpenRule(res.data.ruleTitles.map(_ => false));
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
    getData();
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
        {rules.ruleTitles &&
          rules.ruleTitles.map((rule, index) => (
            <button
              type="button"
              className="rules-main-rule"
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

              {rules.ruleDesc && openRule[index] && (
                <div className="rules-main-rule--desc font-noto">
                  {rules.ruleDesc[index]}
                </div>
              )}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Rules;
