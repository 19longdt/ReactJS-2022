import { memo, useState, useCallback } from "react";

function useCallbackHook({ onIncrease }) {

    console.log('re-render');

    return (
        <>
            <h2>HELOOOOO</h2>
            <button
                onClick={onIncrease}
            >
                Clickme
            </button>
        </>
    );
}

export default memo(useCallbackHook);