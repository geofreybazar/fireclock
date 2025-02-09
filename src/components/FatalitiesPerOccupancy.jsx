import { useMemo } from "react";
import functions from "../functions/functions";
import PieChart from "./PieChart";

import Data2023 from "../Data2023";
import Data2024 from "../Data2024";

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;

const numberOfFatalitiesPerOccupancy2023 =
  functions.getTopFiveOccupancyWithHighFatalities(fireIncidents2023);

const numberOfFatalitiesPerOccupancy2024 =
  functions.getTopFiveOccupancyWithHighFatalities(fireIncidents2024);

// console.log(numberOfFatalitiesPerOccupancy2024);
const occupancyNames2023 = numberOfFatalitiesPerOccupancy2023.map(
  (item) => item.occupancyType
);

const numberOfFatalities2023 = numberOfFatalitiesPerOccupancy2023.map(
  (item) => item.fatalities
);

const occupancyNames2024 = numberOfFatalitiesPerOccupancy2024.map(
  (item) => item.occupancyType
);

const numberOfFatalities2024 = numberOfFatalitiesPerOccupancy2024.map(
  (item) => item.fatalities
);

const dataSets2023 = functions.pieChartDataSet(
  occupancyNames2023,
  numberOfFatalities2023
);

const dataSets2024 = functions.pieChartDataSet(
  occupancyNames2024,
  numberOfFatalities2024
);

function FatalitiesPerOccupancy() {
  return (
    <div className='h-full flex flex-col items-center text-center gap-5'>
      <p className='text-2xl font-semibold'>
        Top 5 Occupancy Type per fatalities
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

export default FatalitiesPerOccupancy;
