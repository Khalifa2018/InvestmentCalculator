export default function Results({ result }) {
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
        {result.map((row) => (
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
