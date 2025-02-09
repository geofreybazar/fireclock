import PieChart from "./PieChart";
import { Chart as ChartJS } from "chart.js/auto";

import functions from "../functions/functions";
import Data2023 from "../Data2023";
import Data2024 from "../Data2024";

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;

const fireIncidentsPerOccupancyType2023 =
  functions.getFireIncidentsPerOccupancyType(fireIncidents2023);

const occupancyNames2023 = fireIncidentsPerOccupancyType2023.map(
  (item) => item.occupancyType
);

const numberOfFireIncidentsPerOccupancy2023 =
  fireIncidentsPerOccupancyType2023.map(
    (item) => item.totalNumberOfFireIncidents
  );

const fireIncidentsPerOccupancyType2024 =
  functions.getFireIncidentsPerOccupancyType(fireIncidents2024);

const occupancyNames2024 = fireIncidentsPerOccupancyType2024.map(
  (item) => item.occupancyType
);

const numberOfFireIncidentsPerOccupancy2024 =
  fireIncidentsPerOccupancyType2024.map(
    (item) => item.totalNumberOfFireIncidents
  );

const dataSets2023 = functions.pieChartDataSet(
  occupancyNames2023,
  numberOfFireIncidentsPerOccupancy2023
);

const dataSets2024 = functions.pieChartDataSet(
  occupancyNames2024,
  numberOfFireIncidentsPerOccupancy2024
);

function FireIncidentPerOccupancyType() {
  return (
    <div className='h-full flex flex-col items-center text-center gap-5'>
      <p className='text-2xl font-semibold'>
        Top 5 Occupancy Type per fire Incident
      </p>
      <div className='h-full flex justify-center '>
        <div className='w-[600px] h-[600px]'>
          <p className='text-2xl font-semibold'>2023 </p>
          <PieChart data={dataSets2023} />
        </div>
        <div className='w-[600px] h-[600px]'>
          <p className='text-2xl font-semibold'>2024</p>
          <PieChart data={dataSets2024} />
        </div>
      </div>
    </div>
  );
}

export default FireIncidentPerOccupancyType;
