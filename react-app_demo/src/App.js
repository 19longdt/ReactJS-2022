import { useState } from 'react'


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

  const handleIncrease = () => {
    // setCounter(counter + 1);

    setCounter(preState => preState + 1);
  };

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: 'fried chicken'
    })
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>

      <br></br>

      <h2>{JSON.stringify(info)}</h2>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
