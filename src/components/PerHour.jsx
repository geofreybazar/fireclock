import { useMemo } from "react";
import BarChart from "./BarChart";
import Data from "../Data";
import functions from "../functions/functions.js";
import { Chart as ChartJS } from "chart.js/auto";

import Data2023 from "../Data2023.js";
import Data2024 from "../Data2024.js";
import Data2020 from "../Data2020.js";

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;
const fireIncidents2020 = Data2020.fireIncidents2020;

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

  const labels = hourlyFireIncidents2023.map((data) => data.time);
  const title = "Fire Incident Per  Hour";
  const data2023 = hourlyFireIncidents2023.map(
    (data) => data.totalNumberOfFireIncidents
  );
  const data2024 = hourlyFireIncidents2024.map(
    (data) => data.totalNumberOfFireIncidents
  );
  const data2020 = hourlyFireIncidents2020.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const fireData2023 = { title: "2023", data: data2023 };
  const fireData2024 = { title: "2024", data: data2024 };
  const fireData2020 = { title: "2020", data: data2020 };

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
        chartTitle='Fire Incident Per Hour'
      />
    </div>
  );
}

export default PerHour;
