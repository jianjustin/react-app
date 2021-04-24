import React, { useState, Component} from "react";
import "./App.css";
import {ThemeContext,themes} from './theme-context';
import ClickTime from "./ClickTime/ClickTime";
import useRandomTimer from './Random/RandomStatus';
import ThemeButton from './ThemeButton/ThemeButton';
import BasicRouter from './BasicRouter/BasicRouter';
import ParamRouter from './ParamRouter/ParamRouter';
import QueryRouter from './QueryRouter/QueryRouter';
import LoginRouter from './LoginRouter/LoginRouter';
import NotMatchRouter from './NotMatchRouter/NotMatchRouter';
import SidebarRouter from './SidebarRouter/SidebarRouter';
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom';

function App(){
    const value = useRandomTimer();
    const [theme, setTheme] = useState(themes.light);
    
    function changeThemeColor(){
        setTheme(theme == themes.light?themes.dark:themes.light);
    }

    return (
    <BrowserRouter>
    <div className="App">
        <nav>
            <ul>
                <li><Link to = "/">主页</Link></li>
                <li><Link to = "/clicktime">hook使用案例</Link></li>
                <li><Link to = "/context">useContext使用案例</Link></li>
                <li>
                    <span>react router学习例子</span>
                    <ul>
                        <li><Link to = "/basicrouter">基础路由实现</Link></li>
                        <li><Link to = "/paramrouter">参数路由实现</Link></li>
                        <li><Link to = "/queryrouter">查询路由实现</Link></li>
                        <li><Link to = "/loginrouter">登录认证路由实现</Link></li>
                        <li><Link to = "/notmatchrouter">404路由实现</Link></li>
                        <li><Link to = "/sidebarrouter">导航栏路由实现</Link></li>
                    </ul>
                </li>
                
            </ul>
        </nav>
    </div>

    <Switch>
        <Route path="/basicrouter">
            <BasicRouter></BasicRouter>
        </Route>
        <Route path="/context">
            <ThemeContext.Provider value={theme}>
                <ThemeButton changeTheme={changeThemeColor}></ThemeButton>
            </ThemeContext.Provider>
        </Route>
        <Route path="/clicktime">
            <ClickTime></ClickTime>
            <div>主页 - 随机数是：{value}</div>
        </Route>
        <Route path="/paramrouter">
            <ParamRouter></ParamRouter>
        </Route>
        <Route path="/queryrouter">
            <QueryRouter></QueryRouter>
        </Route>
        <Route path="/loginrouter">
            <LoginRouter></LoginRouter>
        </Route>
        <Route path="/notmatchrouter">
            <NotMatchRouter></NotMatchRouter>
        </Route>
        <Route path="/sidebarrouter">
            <SidebarRouter></SidebarRouter>
        </Route>
        <Route path="/">
            <h1> Hello, World! </h1>
        </Route>
    </Switch>
    </BrowserRouter>
    );
}

export default App;