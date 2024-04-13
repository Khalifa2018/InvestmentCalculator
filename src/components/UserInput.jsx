export default function UserInput({ inputData, OnInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INTIAL INVESTMENT</label>
          <input
            id="initialInvestment"
            type="number"
            required
            value={inputData.initialInvestment}
            onChange={OnInputChange}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            id="annualInvestment"
            type="number"
            required
            value={inputData.annualInvestment}
            onChange={OnInputChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            id="expectedReturn"
            type="number"
            required
            value={inputData.expectedReturn}
            onChange={OnInputChange}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            id="duration"
            type="number"
            
            value={inputData.duration}
            onChange={OnInputChange}
          />
        </p>
      </div>
    </section>
  );
}
