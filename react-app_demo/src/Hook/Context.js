import { useState, createContext } from "react";
import './Context.css';
import Content from './Content';

export const ThemeContext = createContext();

function Context() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: 20 }}>
                <button onClick={toggleTheme}>Toggle-Theme</button>
                <Content/>
            </div>
        </ThemeContext.Provider>
    );
}

export default Context;