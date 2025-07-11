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
const fireIncidentPerMonthsPerCity = functions.fireIncidentPerMonthsPerCity;

const CITIES = Data.CITIES;

function PerCItyPerMonth() {
  const [selectedCity, setSelectedCity] = useState("NCR");

  const fireIncidentsPerMonthPerCities2023 = useMemo(
    () => fireIncidentPerMonthsPerCity(fireIncidents2023, selectedCity),
    [selectedCity]
  );

  const fireIncidentsPerMonthPerCities2024 = useMemo(
    () => fireIncidentPerMonthsPerCity(fireIncidents2024, selectedCity),
    [selectedCity]
  );

  const fireIncidentsPerMonthPerCities2020 = useMemo(
    () => fireIncidentPerMonthsPerCity(fireIncidents2020, selectedCity),
    [selectedCity]
  );

  const fireIncidentsPerMonthPerCities2021 = useMemo(
    () => fireIncidentPerMonthsPerCity(fireIncidents2021, selectedCity),
    [selectedCity]
  );

  const fireIncidentsPerMonthPerCities2022 = useMemo(
    () => fireIncidentPerMonthsPerCity(fireIncidents2022, selectedCity),
    [selectedCity]
  );

  const labels = fireIncidentsPerMonthPerCities2023.map((data) => data.month);

  const title2023 = "2023";
  const data2023 = fireIncidentsPerMonthPerCities2023.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const title2024 = "2024";
  const data2024 = fireIncidentsPerMonthPerCities2024.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const title2020 = "2020";
  const data2020 = fireIncidentsPerMonthPerCities2020.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const title2021 = "2021";
  const data2021 = fireIncidentsPerMonthPerCities2021.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const title2022 = "2022";
  const data2022 = fireIncidentsPerMonthPerCities2022.map(
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
        chartTitle="Fire Incident Per Month Per City"
      />
    </div>
  );
}

export default PerCItyPerMonth;
