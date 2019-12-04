import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "../../styles/main.scss";
/* import PostList from "./posts/PostList"; */
import Header from "../../components/Header/index";
import Banner from "../../components/Banner/index";
import SortBar from "../../components/SortBar/index";
import PostArea from "../../components/PostArea/index";

function App(props) {
  const [sub, setSub] = useState({});
  const idSub = props.idSub;
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tgulmine/reddit-clone/subs/${idSub}`
      )
      .then(res => {
        console.log(res);
        setSub(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idSub]);

  function triggerNightMode() {
    setNightMode(!nightMode);
    console.log("nighto");
  }

  return (
    <>
      <Helmet title={sub.page_name} />
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
    </>
  );
}

export default App;
