import './Result.css';
import { formatter } from '../../util/investment';

export default function Result({ resultData }) {
  let results;

  if (resultData) {
    results = resultData.reduce((acc, item, index) => {
      const totalInterest =
        index === 0
          ? item.interest
          : item.interest + acc[index - 1].totalInterest;
      const investedCapital = item.valueEndOfYear - totalInterest;
      acc.push({
        totalInterest,
        investedCapital,
        ...item,
      });
      return acc;
    }, []);
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investmant Volume</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map((item) => (
            <tr key={`${item.year}`}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.totalInterest)}</td>
              <td>{formatter.format(item.investedCapital)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
