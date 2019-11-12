import * as React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div class="navbar-container">
      <div class="navbar-logo" />
      <div class="navbar-sub-drop">
        <div class="navbar-sub-drop--logo" />
        <div class="navbar-sub-drop--title">r/Showerthoughts</div>
      </div>
      <input
        class="navbar-searchBar"
        type="text"
        placeholder="O Search.. r/Showerthoughts"
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
