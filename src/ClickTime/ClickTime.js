import React, { useState, useEffect } from 'react';
import useRandomTimer from '../Random/RandomStatus';

function ClickTime(){

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const value= useRandomTimer();

    useEffect(() => {
        document.title = `你点击${count}次`;
    },[count]);

    useEffect(() => {
        document.title = `ddd你点击${count1}次`;
    },[count1]);


    return (
    <div>
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
        <div>
            <p>You clicked {count1} times</p>
            <button onClick={() => setCount1(count1 + 1)}>
            Click me
            </button>
        </div>
        <div>随机数是：{value}</div>
    </div>
    );
}

export default ClickTime;