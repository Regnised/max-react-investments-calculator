import './UserInput.css';

export default function UserInput({ onInvestDataChanged, investData }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            value={investData.initialInvestment}
            required
            type="number"
            onChange={(event) =>
              onInvestDataChanged('initialInvestment', event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            value={investData.annualInvestment}
            required
            type="number"
            onChange={(event) =>
              onInvestDataChanged('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={investData.expectedReturn}
            required
            type="number"
            onChange={(event) =>
              onInvestDataChanged('expectedReturn', event.target.value)
            }
            step="0.1"
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            value={investData.duration}
            required
            type="number"
            onChange={(event) =>
              onInvestDataChanged('duration', event.target.value)
            }
          />
        </p>
      </div>
    </div>
  );
}
