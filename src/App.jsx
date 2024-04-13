import React, { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults, formatter } from "./util/investment";

const INITAIL_USERINPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function deriveInvestmentResults(userInputData) {
  const results = calculateInvestmentResults(userInputData);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  console.log(results);

  const deriveResults = [];

  for (const row of results) {
    const totalInterest =
      row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;

    const totalAmountInvested = row.valueEndOfYear - totalInterest;

    deriveResults.push({
      year: row.year,
      inevestmantValue: formatter.format(row.valueEndOfYear),
      interest: formatter.format(row.interest),
      totalInterest: formatter.format(totalInterest),
      investedCapital: formatter.format(totalAmountInvested),
    });
  }

  return deriveResults;
}

function App() {
  const [userInputData, setUserInputData] = useState(INITAIL_USERINPUT);

  const investmentResults = deriveInvestmentResults(userInputData);

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
      {inputIsValid && <Results result={investmentResults} />}
    </>
  );
}

export default App;
