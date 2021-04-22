import React, { useState, Component} from "react";
import "./App.css";
import ClickTime from "./ClickTime/ClickTime";
import useInterval from './Random/RandomStatus';

function App(){
    const value = useInterval();


    return (
    <div className="App">
        <h1> Hello, World! </h1>
        <ClickTime></ClickTime>
        <div>主页 - 随机数是：{value}</div>
    </div>
    );
}

export default App;