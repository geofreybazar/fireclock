import { useMemo } from "react";
import BarChart from "./BarChart";
import Data from "../Data";
import functions from "../functions/functions.js";
import { Chart as ChartJS } from "chart.js/auto";
import Data2023 from "../Data2023.js";
import Data2024 from "../Data2024.js";

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;
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

  const labels = fatalitiesPerHour2023.map((data) => data.time);

  const title = "Number of Fatalities Per Hour";

  const data2023 = fatalitiesPerHour2023.map(
    (data) => data.totalNumberOfFatalities
  );
  const data2024 = fatalitiesPerHour2024.map(
    (data) => data.totalNumberOfFatalities
  );

  const fireData2023 = { title: "2023", data: data2023 };
  const fireData2024 = { title: "2024", data: data2024 };

  const returnedDataSets = generateDataSetsCombined(
    labels,
    fireData2023,
    fireData2024
  );
  return (
    <div>
      <BarChart chartData={returnedDataSets} chartTitle={title} />
    </div>
  );
}

export default TimeVsFatalities;
