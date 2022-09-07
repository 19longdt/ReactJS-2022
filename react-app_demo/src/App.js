import { useCallback, useState } from 'react';
import UseEffect from './useEffectHook';
import UseLayoutEffect from './useLayoutEffectHook';
import UseRefHook from './useRefHook';
import UseCallbackHook from './useCallbackHook'

const orders = [100, 200, 300];
function App() {
  // {/* useState | Hook */ }

  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, currentValue) => total + currentValue);

    return total;
  });

  const [info, setInfo] = useState({
    name: 'longdo',
    age: 12
  });

  const handleIncrease = useCallback(() => {
      // setCounter(counter + 1);
      setCounter(preState => preState + 1);
    }
  );

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: 'fried chicken'
    })
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>

      <br></br>

      <h2>{JSON.stringify(info)}</h2>
      <button onClick={handleUpdate}>Update</button>

      <br></br>
      <br></br>

      <button onClick={() => setShow(!show)} >UseEffect</button>
      {show && <UseEffect />}
      <button onClick={() => setShow1(!show1)} >UseLayoutEffect</button>
      {show1 && <UseLayoutEffect />}
      <button onClick={() => setShow2(!show2)} >UseRef</button>
      {show2 && <UseRefHook />}
      <button onClick={() => setShow3(!show3)} >UseCallbackHook</button>
      {show3 && <UseCallbackHook onIncrease={handleIncrease} />}
    </div>
  );
}

export default App;
