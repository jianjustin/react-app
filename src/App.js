import React, { useState, Component} from "react";
import "./App.css";
import ClickTime from "./ClickTime/ClickTime";
import useRandomTimer from './Random/RandomStatus';
import ThemeButton from './ThemeButton/ThemeButton';

function App(){
    const value = useRandomTimer();


    return (
    <div className="App">
        <h1> Hello, World! </h1>
        <ClickTime></ClickTime>
        <div>主页 - 随机数是：{value}</div>
        <ThemeButton></ThemeButton>
    </div>
    );
}

export default App;