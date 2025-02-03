import { useMemo, useState } from "react";
import BarChart from "./BarChart.jsx";
import Data from "../Data.js";
import { Chart as ChartJS } from "chart.js/auto";
import functions from "../functions/functions.js";

const fireIncidents = Data.fireIncidents;
const CITIES = Data.CITIES;
const generateDataSets = functions.generateDataSets;

const fireIncidentPerMonthsPerCity = functions.fireIncidentPerMonthsPerCity;

function PerCItyPerMonth() {
  const [selectedCity, setSelectedCity] = useState("NCR");

  const fireIncidentsPerMonthPerCities = useMemo(
    () => fireIncidentPerMonthsPerCity(fireIncidents, selectedCity),
    [fireIncidents, selectedCity]
  );

  const labels = fireIncidentsPerMonthPerCities.map((data) => data.month);
  const title = "Fire Incident Per  City Per Month";
  const data = fireIncidentsPerMonthPerCities.map(
    (data) => data.totalNumberOfFireIncidents
  );
  const returnedDataSets = generateDataSets(labels, data, title);

  return (
    <div>
      <label>Choose City: </label>
      <select
        className='border border-black'
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {CITIES.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <BarChart chartData={returnedDataSets} />
    </div>
  );
}

export default PerCItyPerMonth;
