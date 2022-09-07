import { useLayoutEffect, useState } from 'react';

function useLayoutEffectHook() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0);
    }, [count]);

    const handleCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <layout>{count}</layout>
            <br></br>
            <button onClick={handleCount}>Count</button>
        </div>
    );
}
export default useLayoutEffectHook;