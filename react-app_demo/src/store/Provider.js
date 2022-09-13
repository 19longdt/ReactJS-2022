import { useReducer } from "react";
import Context from "./Context";
import logger from "./logger";
import reducer, { initState } from "./reducer";

function Provider({ children }) {

    const [state, dispach] = useReducer(logger(reducer), initState);

    return (
        <Context.Provider value={[state, dispach]}>
            {children}
        </Context.Provider>
    );

};

export default Provider;