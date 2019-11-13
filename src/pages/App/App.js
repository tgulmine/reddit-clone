import * as React from "react";
import "../../styles/main.scss";
/* import PostList from "./posts/PostList"; */
import Navbar from "../../components/Navbar/index";
import Banner from "../../components/Banner/index";
import SortBar from "../../components/SortBar/index";
import PostArea from "../../components/PostArea/index";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner />
      <SortBar />
      <PostArea />
    </div>
  );
}

export default App;
