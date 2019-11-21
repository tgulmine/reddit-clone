import React, { useState } from "react";
import "../../styles/main.scss";
/* import PostList from "./posts/PostList"; */
import Header from "../../components/Header/index";
import Banner from "../../components/Banner/index";
import SortBar from "../../components/SortBar/index";
import PostArea from "../../components/PostArea/index";

function App() {
  const idSub = 1;
  const [nightMode, setNightMode] = useState(false);

  function triggerNightMode() {
    setNightMode(!nightMode);
    console.log("nighto");
  }

  return (
    <div className="app-container">
      <Header idSub={idSub} triggerNightMode={triggerNightMode} />
      <Banner idSub={idSub} />
      <SortBar idSub={idSub} />
      <PostArea idSub={idSub} />
    </div>
  );
}

export default App;
