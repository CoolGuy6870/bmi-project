import React, { useState } from 'react';
import './BMIcalculator.css';

function BMIcalculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [message, setMessage] = useState('');

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  function calculateBMI() {
    const bmi = (weight / (height * height)) * 703;
    setBMI(bmi.toFixed(1));

    if (bmi > 25) {
      const lowWeight = (18.5 * height * height) / 703;
      const highWeight = (25 * height * height) / 703;
      setMessage(`Your BMI is too high. You should aim for a weight between ${lowWeight.toFixed(1)} - ${highWeight.toFixed(1)} pounds.`);
    } else if (bmi < 18.5) {
      const lowWeight = (18.5 * height * height) / 703;
      const highWeight = (25 * height * height) / 703;
      setMessage(`Your BMI is too low. You should aim for a weight between ${lowWeight.toFixed(1)} - ${highWeight.toFixed(1)} pounds.`);
    } else {
      setMessage('Your BMI is normal.');
    }
  }

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <label>
        Height (in inches):
        <input type="number" value={height} onChange={handleHeightChange} />
      </label>
      <br />
      <label>
        Weight (in pounds):
        <input type="number" value={weight} onChange={handleWeightChange} />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      <br />
      <label>
        Your BMI is: {BMI}
      </label>
      <br />
      <label>{message}</label>
    </div>
  );
}

export default BMIcalculator;