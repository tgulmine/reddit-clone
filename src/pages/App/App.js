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
      <Header
        idSub={idSub}
        nightMode={nightMode}
        triggerNightMode={triggerNightMode}
      />
      <Banner idSub={idSub} nightMode={nightMode} />
      <SortBar idSub={idSub} nightMode={nightMode} />
      <PostArea idSub={idSub} nightMode={nightMode} />
    </div>
  );
}

export default App;
