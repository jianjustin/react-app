import React, {useContext} from 'react';
import {ThemeContext,themes} from '../theme-context';

function ThemeButton(props){
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }} onClick={props.changeTheme}>测试Context</button>
    );
}

export default ThemeButton;

