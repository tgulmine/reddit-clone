import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.scss";

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
  });

  return (
    <div class="navbar-container">
      <div class="navbar-logo" />
      <div class="navbar-sub-drop">
        <div class="navbar-sub-drop--logo" />
        <div class="navbar-sub-drop--title">r/{sub.slug}</div>
      </div>
      <input
        class="navbar-searchBar"
        type="text"
        placeholder={`Search r/${sub.slug}`}
      ></input>
      <div class="navbar-links">
        <div>P</div>
        <div>A</div>
      </div>
      <div class="navbar-access">
        <div class="navbar-access--login">LOG IN</div>
        <div class="navbar-access--signup">SIGN UP</div>
      </div>
      <div class="navbar-options">U</div>
    </div>
  );
}

export default Navbar;
