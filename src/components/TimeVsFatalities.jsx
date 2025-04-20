import { useMemo } from "react";
import BarChart from "./BarChart";
import functions from "../functions/functions.js";
import { Chart as ChartJS } from "chart.js/auto";
import Data2023 from "../Data2023.js";
import Data2024 from "../Data2024.js";
import Data2020 from "../Data2020.js";

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;
const fireIncidents2020 = Data2020.fireIncidents2020;
const generateDataSetsCombined = functions.generateDataSetsCombined;

const numberOfFatalitiesPerTime = functions.getFatalitiesPerTime;

function TimeVsFatalities() {
  const fatalitiesPerHour2023 = useMemo(
    () => numberOfFatalitiesPerTime(fireIncidents2023),
    [fireIncidents2023]
  );

  const fatalitiesPerHour2024 = useMemo(
    () => numberOfFatalitiesPerTime(fireIncidents2024),
    [fireIncidents2024]
  );

  const fatalitiesPerHour2020 = useMemo(
    () => numberOfFatalitiesPerTime(fireIncidents2020),
    [fireIncidents2020]
  );

  const labels = fatalitiesPerHour2023.map((data) => data.time);

  const title = "Number of Fatalities Per Hour";

  const data2023 = fatalitiesPerHour2023.map(
    (data) => data.totalNumberOfFatalities
  );
  const data2024 = fatalitiesPerHour2024.map(
    (data) => data.totalNumberOfFatalities
  );
  const data2020 = fatalitiesPerHour2020.map(
    (data) => data.totalNumberOfFatalities
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
      <BarChart chartData={returnedDataSets} chartTitle={title} />
    </div>
  );
}

export default TimeVsFatalities;
