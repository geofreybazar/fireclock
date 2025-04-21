import { useMemo } from "react";
import BarChart from "./BarChart";
import { Chart as ChartJS } from "chart.js/auto";
import functions from "../functions/functions.js";
import Data2023 from "../Data2023.js";
import Data2024 from "../Data2024.js";
import Data2020 from "../Data2020.js";
import Data2021 from "../Data2021.js";
import Data2022 from "../Data2022.js";

const generateDataSetsCombined = functions.generateDataSetsCombined;

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;
const fireIncidents2020 = Data2020.fireIncidents2020;
const fireIncidents2021 = Data2021.fireIncidents2021;
const fireIncidents2022 = Data2022.fireIncidents2022;

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

  const fireIncidentsPerCity2020 = useMemo(
    () => fireIncidentsPerCities(fireIncidents2020),
    [fireIncidents2020]
  );

  const fireIncidentsPerCity2021 = useMemo(
    () => fireIncidentsPerCities(fireIncidents2021),
    [fireIncidents2021]
  );

  const fireIncidentsPerCity2022 = useMemo(
    () => fireIncidentsPerCities(fireIncidents2022),
    [fireIncidents2022]
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

  const title2020 = "2020";
  const data2020 = fireIncidentsPerCity2020.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const title2021 = "2021";
  const data2021 = fireIncidentsPerCity2021.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const title2022 = "2022";
  const data2022 = fireIncidentsPerCity2022.map(
    (data) => data.totalNumberOfFireIncidents
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
      <BarChart
        chartData={returnedDataSets}
        chartTitle="Fire Incident Per City"
      />
    </div>
  );
}

export default PerCity;
