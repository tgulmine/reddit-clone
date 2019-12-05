/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { render } from "react-dom";
import Routes from "./routes/Routes";
import axios from "axios";

function Entry() {
  const [subs, setSubs] = useState(null);
  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/tgulmine/reddit-clone/subs`)
      .then(res => {
        console.log(res);
        setSubs(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (subs == null) {
    return "loading";
  }

  return <Routes subs={subs} />;
}

render(<Entry />, document.getElementById("root"));

/* <Route path="*" render={props => <App {...props} idSub={3} />} /> */

/* ReactDOM.render(<App />, document.getElementById("root")); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
