//var React = require("react");
//var ReactDOM = require("react-dom");
//new way
import React from "react";
import ReactDOM from "react-dom";

//By using import and the export keywords, we're able to modularise these
//dependencies far better. We end up with code that's better organized.

//ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT);
//anything inside <div> is treated as single element, coz we can pass only 1 element
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a para</p>
  </div>,
  document.getElementById("root")
);
//react works by creating JSX files, files where we have HTML in the body of JS file,
//And what happened behind the scenes is that our HTML
//is picked up by a compiler and it gets converted or compiled down to actual JavaScript. And the compiler
//comes from including this React module
//So inside the React module, there is something called Babel. And Babel, as they tell you, is a JavaScript
//compiler. So it's able to take next generation JavaScript like ES 6, 7, 8 and compile it down
//to a version of JavaScript that every browser can understand.
//And this includes compiling JSX down to plain old JavaScript.

//pure js
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);

//babel allows us to use next gen js like ES6, ES2015 etc,
//. And we can use some of the new constructs that are available through
//these new versions of JavaScript and it's able to compile it down into bog standard normal JavaScript.
// ES6 is latest js

//it is to start using React to create our web pages to inject HTML inside JavaScript code
// and for it to be as easily readable as any other HTML file.
