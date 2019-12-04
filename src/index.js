/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

render(
  <Router>
    <Route path="/">
      <Route
        path="/r/announcements"
        render={props => <App {...props} idSub={1} />}
      />
      <Route path="/r/funny" render={props => <App {...props} idSub={2} />} />
      <Route
        path="/r/AskReddit"
        render={props => <App {...props} idSub={3} />}
      />
      <Route path="/r/gaming" render={props => <App {...props} idSub={4} />} />
      <Route path="/r/pics" render={props => <App {...props} idSub={5} />} />
      <Route path="/r/science" render={props => <App {...props} idSub={6} />} />
      <Route
        path="/r/worldnews"
        render={props => <App {...props} idSub={7} />}
      />
      <Route path="/r/aww" render={props => <App {...props} idSub={8} />} />
      <Route path="/r/movies" render={props => <App {...props} idSub={9} />} />
      <Route
        path="/r/todayilearned"
        render={props => <App {...props} idSub={10} />}
      />
      {/* <Route path="*" render={props => <App {...props} idSub={3} />} /> */}
    </Route>
  </Router>,
  document.getElementById("root")
);

/* ReactDOM.render(<App />, document.getElementById("root")); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
