import { useMemo } from "react";
import BarChart from "./BarChart";
import Data from "../Data";
import { Chart as ChartJS } from "chart.js/auto";
import functions from "../functions/functions.js";
const generateDataSets = functions.generateDataSets;

const fireIncidents = Data.fireIncidents;
const fireIncidentsPerCities = functions.fireIncidentsPerCities;

function PerCity() {
  const fireIncidentsPerCity = useMemo(
    () => fireIncidentsPerCities(fireIncidents),
    [fireIncidents]
  );

  const labels = fireIncidentsPerCity.map((data) => data.city);
  const title = "Fire Incident Per  City";
  const data = fireIncidentsPerCity.map(
    (data) => data.totalNumberOfFireIncidents
  );

  const returnedDataSets = generateDataSets(labels, data, title);

  return (
    <div>
      <BarChart chartData={returnedDataSets} />
    </div>
  );
}

export default PerCity;
