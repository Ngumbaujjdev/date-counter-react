import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [steps, setSteps] = useState(1);

  function addCount() {
    setStep((s) => s + steps);
  }

  function reduceCount() {
    if (step > 1) {
      setStep((s) => s - steps);
    }
  }

  function addSteps() {
    setSteps((s) => s + 1);
  }

  function reduceSteps() {
    if (steps > 0) {
      setSteps((s) => s - 1);
    }
  }

  function handleReset() {
    setStep(0);
    setSteps(1);
  }

  // Calculate the future date based on the current step and steps
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + step + steps);

  // Format the future date
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = futureDate.toLocaleDateString("en-US", options);

  return (
    <div className="counter-container">
      <div className="counter">
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
          className="slider"
        />
        <div className="count-display">Steps: {steps}</div>
      </div>
      <div className="counter">
        <button className="counter-button" onClick={reduceCount}>
          -
        </button>
        <div className="count-display">Count: {step}</div>
        <input
          type="text"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="text-input"
        />
        <button className="counter-button" onClick={addCount}>
          +
        </button>
      </div>
      <p>
        {step + steps} {step + steps === 1 ? "day" : "days"} from today{" "}
        {formattedDate}
      </p>
      {step !== 0 || steps !== 1 ? (
        <div>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
