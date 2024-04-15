import { calculateInvestmentResults, formatter } from "../util/investment.js";

function deriveInvestmentResults(userInputData) {
  const results = calculateInvestmentResults(userInputData);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

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

export default function Results({ userInputData }) {
  const investmentResults = deriveInvestmentResults(userInputData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Inevestmant Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{row.inevestmantValue}</td>
            <td>{row.interest}</td>
            <td>{row.totalInterest}</td>
            <td>{row.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
