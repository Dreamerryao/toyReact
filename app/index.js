import ReactDOM from 'react-dom';
import React from 'react';


const element = React.createElement(
  "h1",
  { title: "foo" },
  "Hello"
)
const container = document.getElementById("root")
ReactDOM.render(element, container)