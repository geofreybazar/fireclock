import { useMemo } from "react";
import BarChart from "./BarChart";
import functions from "../functions/functions.js";
import { Chart as ChartJS } from "chart.js/auto";

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
const fireIncidentsPerHour = functions.fireIncidentsPerHour;

function PerHour() {
  const hourlyFireIncidents2023 = useMemo(
    () => fireIncidentsPerHour(fireIncidents2023),
    [fireIncidents2023]
  );

  const hourlyFireIncidents2024 = useMemo(
    () => fireIncidentsPerHour(fireIncidents2024),
    [fireIncidents2024]
  );

  const hourlyFireIncidents2020 = useMemo(
    () => fireIncidentsPerHour(fireIncidents2020),
    [fireIncidents2020]
  );

  const hourlyFireIncidents2021 = useMemo(
    () => fireIncidentsPerHour(fireIncidents2021),
    [fireIncidents2021]
  );

  const hourlyFireIncidents2022 = useMemo(
    () => fireIncidentsPerHour(fireIncidents2022),
    [fireIncidents2022]
  );

  const labels = hourlyFireIncidents2023.map((data) => data.time);

  const data2023 = hourlyFireIncidents2023.map(
    (data) => data.totalNumberOfFireIncidents
  );
  const data2024 = hourlyFireIncidents2024.map(
    (data) => data.totalNumberOfFireIncidents
  );
  const data2020 = hourlyFireIncidents2020.map(
    (data) => data.totalNumberOfFireIncidents
  );
  const data2021 = hourlyFireIncidents2021.map(
    (data) => data.totalNumberOfFireIncidents
  );
  const data2022 = hourlyFireIncidents2022.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const fireData2023 = { title: "2023", data: data2023 };
  const fireData2024 = { title: "2024", data: data2024 };
  const fireData2020 = { title: "2020", data: data2020 };
  const fireData2021 = { title: "2021", data: data2021 };
  const fireData2022 = { title: "2022", data: data2022 };

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
        chartTitle="Fire Incident Per Hour"
      />
    </div>
  );
}

export default PerHour;
