import { useMemo } from "react";
import BarChart from "./BarChart";
import Data from "../Data";
import { Chart as ChartJS } from "chart.js/auto";
import functions from "../functions/functions.js";

const generateDataSets = functions.generateDataSets;
const fireIncidents = Data.fireIncidents;

const fireIncidentPerMonths = functions.fireIncidentPerMonths;

function PerMonths() {
  const fireIncidentsPerMonth = useMemo(
    () => fireIncidentPerMonths(fireIncidents),
    [fireIncidents]
  );

  const labels = fireIncidentsPerMonth.map((data) => data.month);
  const title = "Month";
  const data = fireIncidentsPerMonth.map(
    (data) => data.totalNumberOfFireIncidents
  );
  const returnedDataSets = generateDataSets(labels, data, title);

  return (
    <div>
      <BarChart chartData={returnedDataSets} />
    </div>
  );
}

export default PerMonths;
