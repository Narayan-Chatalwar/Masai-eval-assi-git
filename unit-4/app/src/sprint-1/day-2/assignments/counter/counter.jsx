import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  const handleDbl = () => {
    setCount(count * 2);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => handleInc()}>Inc</button>
      <button onClick={() => handleDec()}>Dec</button>
      <button onClick={() => handleDbl()}>Double</button>
    </>
  );
}

export default Counter;