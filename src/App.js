import React, { Component} from "react";
import "./App.css";
import ClickTime from "./ClickTime/ClickTime";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <ClickTime></ClickTime>
      </div>
    );
  }
}

export default App;