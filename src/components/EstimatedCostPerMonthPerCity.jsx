import { useMemo, useState } from "react";
import BarChart from "./BarChart.jsx";
import Data from "../Data.js";
import { Chart as ChartJS } from "chart.js/auto";
import functions from "../functions/functions.js";
import Data2023 from "../Data2023.js";
import Data2024 from "../Data2024.js";

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;

const highestDamgeCost = functions.getHighestDamageIncident;

const generateDataSetsCombined = functions.generateDataSetsCombined;
const estimatedCostOfDamagePerCityPerMonth =
  functions.estimatedDamgeCostPerMonthPerCity;

const CITIES = Data.CITIES;

function EstimatedCostPerMonthPerCity() {
  const [selectedCity, setSelectedCity] = useState("NCR");

  const estimatedCostOfDamagePerCityPerMonth2023 = useMemo(
    () => estimatedCostOfDamagePerCityPerMonth(fireIncidents2023, selectedCity),
    [fireIncidents2023, selectedCity]
  );

  const estimatedCostOfDamagePerCityPerMonth2024 = useMemo(
    () => estimatedCostOfDamagePerCityPerMonth(fireIncidents2024, selectedCity),
    [fireIncidents2024, selectedCity]
  );
  const labels = estimatedCostOfDamagePerCityPerMonth2023.map(
    (data) => data.month
  );

  const title2023 = "2023";
  const data2023 = estimatedCostOfDamagePerCityPerMonth2023.map(
    (data) => data.totalEstimatedDamageCost
  );

  const title2024 = "2024";
  const data2024 = estimatedCostOfDamagePerCityPerMonth2024.map(
    (data) => data.totalEstimatedDamageCost
  );

  const fireData2023 = { title: title2023, data: data2023 };
  const fireData2024 = { title: title2024, data: data2024 };

  const returnedDataSets = generateDataSetsCombined(
    labels,
    fireData2023,
    fireData2024
  );

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
      <BarChart
        chartData={returnedDataSets}
        chartTitle='Estimated Damage Cost Per Month Per City'
      />
    </div>
  );
}

export default EstimatedCostPerMonthPerCity;
