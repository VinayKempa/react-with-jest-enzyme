import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [errorMessage, setError] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
    setError(null);
  };

  const handleDecrement = () => {
    if (count === 0) {
      setError("Count cannot go below 0");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={handleIncrement}>
        Increment Counter
      </button>
      <button data-test="decrement-button" onClick={handleDecrement}>
        Decrement Counter
      </button>
      {errorMessage && (
        <p data-test="counter-error" style={{ color: "red" }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default App;
