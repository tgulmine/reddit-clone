import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../pages/App/App";

function Routes(props) {
  const { subs } = props;

  return (
    <Router>
      {subs.map(sub => (
        <Route
          key={sub.id}
          path={`/r/${sub.slug}`}
          render={props => <App {...props} idSub={sub.id} />}
        />
      ))}
      <Route
        key={"home"}
        exact
        path="/"
        render={props => <App {...props} idSub={1} />}
      />
    </Router>
  );
}

export default Routes;
