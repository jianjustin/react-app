import React, {useContext} from 'react';
import {ThemeContext,themes} from '../theme-context';

function ThemeButton(){
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>测试Context</button>
    );
}

export default ThemeButton;

