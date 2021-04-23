import React, { useState, Component} from "react";
import "./App.css";
import {ThemeContext,themes} from './theme-context';
import ClickTime from "./ClickTime/ClickTime";
import useRandomTimer from './Random/RandomStatus';
import ThemeButton from './ThemeButton/ThemeButton';
import BasicRouter from './BasicRouter/BasicRouter';

function App(){
    const value = useRandomTimer();
    const [theme, setTheme] = useState(themes.light);
    
    function changeThemeColor(){
        setTheme(theme == themes.light?themes.dark:themes.light);
    }

    return (
    <div className="App">
        <h1> Hello, World! </h1>
        <ClickTime></ClickTime>
        <div>主页 - 随机数是：{value}</div>
        <ThemeContext.Provider value={theme}>
            <ThemeButton changeTheme={changeThemeColor}></ThemeButton>
        </ThemeContext.Provider>
        <BasicRouter></BasicRouter>
    </div>
    );
}

export default App;