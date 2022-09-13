import { useStore, actions } from './store';

function GlobalState() {

    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
    };

    return (
        <div>
            <input
                value={todoInput}
                placeholder="Enter todo.."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            <br></br>
            <br></br>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default GlobalState;