import { useMemo } from "react";
import BarChart from "./BarChart";
import Data from "../Data";
import functions from "../functions/functions.js";
import { Chart as ChartJS } from "chart.js/auto";

const fireIncidents = Data.fireIncidents;
const generateDataSets = functions.generateDataSets;
const fireIncidentsPerHour = functions.fireIncidentsPerHour;

function PerHour() {
  const hourlyFireIncidents = useMemo(
    () => fireIncidentsPerHour(fireIncidents),
    [fireIncidents]
  );
  const labels = hourlyFireIncidents.map((data) => data.time);
  const title = "Fire Incident Per  Hour";
  const data = hourlyFireIncidents.map(
    (data) => data.totalNumberOfFireIncidents
  );
  const returnedDataSets = generateDataSets(labels, data, title);

  return (
    <div>
      <BarChart chartData={returnedDataSets} />
    </div>
  );
}

export default PerHour;
