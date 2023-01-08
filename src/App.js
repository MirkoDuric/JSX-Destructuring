import cars from "./practice";

function App() {
  const [honda, tesla] = cars;
  const {
    speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty },
  } = honda;
  const {
    coloursByPopularity: [hondaTopColour, hondabotomColour],
  } = honda;
  const {
    speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty },
  } = tesla;
  const {
    coloursByPopularity: [teslaTopColour, teslabotomColour],
  } = tesla;
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  );
}

export default App;
