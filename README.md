
# Date Counter React App

This is a simple date counter app built using React. The app allows users to adjust the step value and see the calculated future date based on the current date.

## Features

- Increment and decrement step values using buttons and a range slider.
- Display the calculated future date based on the current step and step value.
- Reset the step and step values to their initial states.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Ngumbaujjdev/date-counter-react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd date-counter-react
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Adjust the step value using the range slider.
- Use the '+' and '-' buttons to increment and decrement the count value.
- The calculated future date based on the current step and step value will be displayed.
- Click the "Reset" button to reset the step and step values to their initial states.

## Code Explanation

### App Component

The `App` component serves as the root component and renders the `Counter` component.

```jsx
import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
```

### Counter Component

The `Counter` component handles the main logic of the date counter app.

```jsx
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

  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + step + steps);

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
```

### Explanation of Main Functions

- `addCount`: Increases the step value by the current steps value.
- `reduceCount`: Decreases the step value by the current steps value, if step is greater than 1.
- `addSteps`: Increases the steps value by 1.
- `reduceSteps`: Decreases the steps value by 1, if steps is greater than 0.
- `handleReset`: Resets the step and steps values to their initial states.
- `futureDate` Calculation: Calculates the future date based on the current date and the sum of step and steps values.
- `formattedDate`: Formats the future date for display.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.

---
