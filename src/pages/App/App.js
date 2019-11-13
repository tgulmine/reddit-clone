import * as React from "react";
import "../../styles/main.scss";
/* import PostList from "./posts/PostList"; */
import Navbar from "../../components/Navbar/index";
import Banner from "../../components/Banner/index";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
