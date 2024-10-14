import { useState } from 'react';
import Header from './components/Header/Header';
import Result from './components/Result/Result';
import UserInput from './components/UserInput/UserInput';
import { calculateInvestmentResults } from './util/investment';

function App() {
  const [investData, setInvestData] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });

  function handleDataChanged(name, value) {
    setInvestData((data) => {
      const newInvestData = {
        ...data,
        [name]: Number(value),
      };
      return newInvestData;
    });
  }

  const isInputValid = investData.duration >= 1;
  const result = calculateInvestmentResults(investData);

  return (
    <div className="center">
      <Header />
      <UserInput
        investData={investData}
        onInvestDataChanged={handleDataChanged}
      />
      {isInputValid ? (
        <Result resultData={result} />
      ) : (
        <p>Duration should be greater or equal to 1</p>
      )}
    </div>
  );
}

export default App;
