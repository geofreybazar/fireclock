import { useMemo, useState } from "react";
import BarChart from "./BarChart.jsx";
import Data from "../Data.js";
import { Chart as ChartJS } from "chart.js/auto";
import functions from "../functions/functions.js";
import Data2023 from "../Data2023.js";
import Data2024 from "../Data2024.js";
import Data2020 from "../Data2020.js";
import Data2021 from "../Data2021.js";
import Data2022 from "../Data2022.js";

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;
const fireIncidents2020 = Data2020.fireIncidents2020;
const fireIncidents2021 = Data2021.fireIncidents2021;
const fireIncidents2022 = Data2022.fireIncidents2022;

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

  const estimatedCostOfDamagePerCityPerMonth2020 = useMemo(
    () => estimatedCostOfDamagePerCityPerMonth(fireIncidents2020, selectedCity),
    [fireIncidents2020, selectedCity]
  );

  const estimatedCostOfDamagePerCityPerMonth2021 = useMemo(
    () => estimatedCostOfDamagePerCityPerMonth(fireIncidents2021, selectedCity),
    [fireIncidents2021, selectedCity]
  );

  const estimatedCostOfDamagePerCityPerMonth2022 = useMemo(
    () => estimatedCostOfDamagePerCityPerMonth(fireIncidents2022, selectedCity),
    [fireIncidents2022, selectedCity]
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

  const title2020 = "2020";
  const data2020 = estimatedCostOfDamagePerCityPerMonth2020.map(
    (data) => data.totalEstimatedDamageCost
  );
  const title2021 = "2021";
  const data2021 = estimatedCostOfDamagePerCityPerMonth2021.map(
    (data) => data.totalEstimatedDamageCost
  );

  const title2022 = "2022";
  const data2022 = estimatedCostOfDamagePerCityPerMonth2022.map(
    (data) => data.totalEstimatedDamageCost
  );

  const fireData2023 = { title: title2023, data: data2023 };
  const fireData2024 = { title: title2024, data: data2024 };
  const fireData2020 = { title: title2020, data: data2020 };
  const fireData2021 = { title: title2021, data: data2021 };
  const fireData2022 = { title: title2022, data: data2022 };

  const returnedDataSets = generateDataSetsCombined(
    labels,
    fireData2023,
    fireData2024,
    fireData2020,
    fireData2021,
    fireData2022
  );

  return (
    <div>
      <label>Choose City: </label>
      <select
        className="border border-black"
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
        chartTitle="Estimated Damage Cost Per Month Per City"
      />
    </div>
  );
}

export default EstimatedCostPerMonthPerCity;
