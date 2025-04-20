import { useMemo } from "react";
import BarChart from "./BarChart";
import { Chart as ChartJS } from "chart.js/auto";
import functions from "../functions/functions";
import Data2023 from "../Data2023";
import Data2024 from "../Data2024";
import Data2020 from "../Data2020";

const generateDataSetsCombined = functions.generateDataSetsCombined;
const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;
const fireIncidents2020 = Data2020.fireIncidents2020;

function GetTotalEstimatedDamage() {
  const getTotalEstimatedDamageCostPerCity2023 = useMemo(
    () => functions.estimatedDamagePerCities(fireIncidents2023),
    [fireIncidents2023]
  );

  const getTotalEstimatedDamageCostPerCity2024 = useMemo(
    () => functions.estimatedDamagePerCities(fireIncidents2024),
    [fireIncidents2024]
  );

  const getTotalEstimatedDamageCostPerCity2020 = useMemo(
    () => functions.estimatedDamagePerCities(fireIncidents2020),
    [fireIncidents2020]
  );

  const labels = getTotalEstimatedDamageCostPerCity2023.map(
    (data) => data.city
  );

  const title2023 = "2023";
  const data2023 = getTotalEstimatedDamageCostPerCity2023.map(
    (data) => data.estimatedCostOfDamage
  );

  const title2024 = "2024";
  const data2024 = getTotalEstimatedDamageCostPerCity2024.map(
    (data) => data.estimatedCostOfDamage
  );

  const title2020 = "2020";
  const data2020 = getTotalEstimatedDamageCostPerCity2020.map(
    (data) => data.estimatedCostOfDamage
  );

  const fireData2023 = { title: title2023, data: data2023 };
  const fireData2024 = { title: title2024, data: data2024 };
  const fireData2020 = { title: title2020, data: data2020 };

  const returnedDataSets = generateDataSetsCombined(
    labels,
    fireData2023,
    fireData2024,
    fireData2020
  );
  return (
    <div>
      <BarChart
        chartData={returnedDataSets}
        chartTitle='Total Estimated Cost Per City'
      />
    </div>
  );
}

export default GetTotalEstimatedDamage;
