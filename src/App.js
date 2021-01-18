import React from "react";
import Tree from "react-tree-graph";
import data from "./mockData";
import "react-tree-graph/dist/style.css";
import "./App.css";

const App = (props) => {
  const handleClick = (event, node) => {
    console.log("handle click ", event);
    console.log("handle click node", node);
    alert(`${node} got clicked`);
  };
  return (
    <Tree
      data={data}
      nodeRadius={15}
      margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
      height={700}
      width={1000}
      gProps={{
        className: "node",
        onClick: handleClick,
      }}
    />
  );
};

export default App;
