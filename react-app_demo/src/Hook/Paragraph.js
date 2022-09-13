import { useContext } from 'react';
import { ThemeContext } from './Context';

function Paragraph() {
    const theme = useContext(ThemeContext);
    return (
        <p className={theme}>This is Paragraph</p>
    );
}

export default Paragraph;