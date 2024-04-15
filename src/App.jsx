import React, { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

const INITAIL_USERINPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInputData, setUserInputData] = useState(INITAIL_USERINPUT);

  const inputIsValid = userInputData.duration >= 1;

  function handleInputChange(event) {
    setUserInputData((prevInputData) => {
      return { ...prevInputData, [event.target.id]: +event.target.value };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputData={userInputData} OnInputChange={handleInputChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results userInputData={userInputData} />}
    </>
  );
}

export default App;
