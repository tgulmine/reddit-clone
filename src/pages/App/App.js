import * as React from "react";
import "../../styles/main.scss";
/* import PostList from "./posts/PostList"; */
import Header from "../../components/Header/index";
import Banner from "../../components/Banner/index";
import SortBar from "../../components/SortBar/index";
import PostArea from "../../components/PostArea/index";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      <SortBar />
      <PostArea />
    </div>
  );
}

export default App;
