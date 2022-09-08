import { useReducer, useRef } from "react";

const initState = 0;
const initState1 = {
    job: '',
    jobs: []
};

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DEL_JOB = 'delete_job';

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    };
};

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    };
};

const delJob = payload => {
    return {
        type: DEL_JOB,
        payload
    };
};

const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action');
    };
};

const reducer1 = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state, job: action.payload
            };
        case ADD_JOB:
            return {
                ...state, jobs: [...state.jobs, action.payload]
            };
        case DEL_JOB:
            const newJobs = [...state.jobs];

            newJobs.splice(action.payload, 1);
            return {
                ...state, jobs: newJobs
            };
        default:
            throw new Error('Invalid action');
    };
};

function useReducerHook() {

    const [count, dispach] = useReducer(reducer, initState);
    const [state, dispach1] = useReducer(reducer1, initState1);
    const { job, jobs } = state;
    const inputRef = useRef();


    const handleAdd = () => {
        dispach1(addJob(job));
        dispach1(setJob(''));

        inputRef.current.focus();
    }

    return (
        <div>
            <h2>{count}</h2>
            <br />
            <button onClick={() => dispach(UP_ACTION)}>Up</button>
            <br />
            <button onClick={() => dispach(DOWN_ACTION)}>Down</button>
            <br></br>
            <br></br>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo.."
                onChange={e => { dispach1(setJob(e.target.value)) }}
            />
            <button onClick={handleAdd} >Add</button>
            <br />
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job} 
                        <span onClick={() => dispach1(delJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default useReducerHook;