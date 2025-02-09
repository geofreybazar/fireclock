import { useMemo } from "react";
import BarChart from "./BarChart";
import { Chart as ChartJS } from "chart.js/auto";
import functions from "../functions/functions.js";
import Data2023 from "../Data2023.js";
import Data2024 from "../Data2024.js";

const generateDataSetsCombined = functions.generateDataSetsCombined;

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;

const fireIncidentsPerCities = functions.fireIncidentsPerCities;

function PerCity() {
  const fireIncidentsPerCity2023 = useMemo(
    () => fireIncidentsPerCities(fireIncidents2023),
    [fireIncidents2023]
  );

  const fireIncidentsPerCity2024 = useMemo(
    () => fireIncidentsPerCities(fireIncidents2024),
    [fireIncidents2024]
  );

  const labels = fireIncidentsPerCity2023.map((data) => data.city);

  const title2023 = "2023";
  const data2023 = fireIncidentsPerCity2023.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const title2024 = "2024";
  const data2024 = fireIncidentsPerCity2024.map(
    (data) => data.totalNumberOfFireIncidents
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
      <BarChart
        chartData={returnedDataSets}
        chartTitle='Fire Incident Per City'
      />
    </div>
  );
}

export default PerCity;
