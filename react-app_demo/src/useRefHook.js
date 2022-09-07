import { memo, useRef, useState, useEffect } from "react";

function useRefHook() {

    console.log('test memo');

    const [count, setCount] = useState(60);
    const timer = useRef();
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const handleStart = () => {
        timer.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);
    };

    const handleEnd = () => {
        clearInterval(timer.current);
    };

    return (
        <div>
            <label>{count}</label>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleEnd}>End</button>
        </div>
    );
}

export default memo(useRefHook);