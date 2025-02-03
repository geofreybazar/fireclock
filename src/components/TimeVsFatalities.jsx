import { useMemo } from "react";
import BarChart from "./BarChart";
import Data from "../Data";
import functions from "../functions/functions.js";
import { Chart as ChartJS } from "chart.js/auto";

const fireIncidents = Data.fireIncidents;
const generateDataSets = functions.generateDataSets;
const numberOfFatalitiesPerTime = functions.getFatalitiesPerTime;

function TimeVsFatalities() {
  const fatalitiesPerHour = useMemo(
    () => numberOfFatalitiesPerTime(fireIncidents),
    [fireIncidents]
  );
  const labels = fatalitiesPerHour.map((data) => data.time);
  const title = "Number of Fatalities Per Hour";
  const data = fatalitiesPerHour.map((data) => data.totalNumberOfFatalities);
  const returnedDataSets = generateDataSets(labels, data, title);

  return (
    <div>
      <BarChart chartData={returnedDataSets} />
    </div>
  );
}

export default TimeVsFatalities;
