import * as React from "react";
import "./styles/main.scss";
import { Button } from "reactstrap";
import PostList from "./posts/PostList";

const App: React.FC = () => {
  return (
    <div>
      <PostList />
    </div>
  );
};

export default App;
