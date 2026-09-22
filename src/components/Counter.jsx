import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="container">
        <button onClick={() => setSteps((s) => s - 1)}>
          Decrement
        </button>

        <span>Steps: {steps}</span>

        <button onClick={() => setSteps((s) => s + 1)}>
          Increment
        </button>
      </div>

      <div className="container">
        <button onClick={() => setCount((c) => c - steps)}>
          Decrement
        </button>

        <span>Count: {count}</span>

        <button onClick={() => setCount((c) => c + steps)}>
          Increment
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>

        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

export default Counter;