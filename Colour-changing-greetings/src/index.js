import React from "react";
import ReactDOM from "react-dom";
import './index.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';

const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = 'Green';
}
else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = 'Orange';
}
else {
  greeting = "Good Night";
  cssStyle.color = 'Blue';
}

ReactDOM.render(
  <>
    <h1>Hello Everyone, <span style={cssStyle}>{greeting}</span></h1>
  </>
  , document.getElementById('root'))



