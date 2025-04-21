import functions from "../functions/functions";
import PieChart from "./PieChart";

import Data2023 from "../Data2023";
import Data2024 from "../Data2024";
import Data2020 from "../Data2020";
import Data2021 from "../Data2021";
import Data2022 from "../Data2022";

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;
const fireIncidents2020 = Data2020.fireIncidents2020;
const fireIncidents2021 = Data2021.fireIncidents2021;
const fireIncidents2022 = Data2022.fireIncidents2022;

const numberOfFatalitiesPerOccupancy2023 =
  functions.getTopFiveOccupancyWithHighFatalities(fireIncidents2023);

const numberOfFatalitiesPerOccupancy2024 =
  functions.getTopFiveOccupancyWithHighFatalities(fireIncidents2024);

const numberOfFatalitiesPerOccupancy2020 =
  functions.getTopFiveOccupancyWithHighFatalities(fireIncidents2020);

const numberOfFatalitiesPerOccupancy2021 =
  functions.getTopFiveOccupancyWithHighFatalities(fireIncidents2021);

const numberOfFatalitiesPerOccupancy2022 =
  functions.getTopFiveOccupancyWithHighFatalities(fireIncidents2022);

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

const occupancyNames2020 = numberOfFatalitiesPerOccupancy2020.map(
  (item) => item.occupancyType
);

const numberOfFatalities2020 = numberOfFatalitiesPerOccupancy2020.map(
  (item) => item.fatalities
);

const occupancyNames2021 = numberOfFatalitiesPerOccupancy2021.map(
  (item) => item.occupancyType
);

const numberOfFatalities2021 = numberOfFatalitiesPerOccupancy2021.map(
  (item) => item.fatalities
);

const occupancyNames2022 = numberOfFatalitiesPerOccupancy2022.map(
  (item) => item.occupancyType
);

const numberOfFatalities2022 = numberOfFatalitiesPerOccupancy2022.map(
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

const dataSets2020 = functions.pieChartDataSet(
  occupancyNames2020,
  numberOfFatalities2020
);

const dataSets2021 = functions.pieChartDataSet(
  occupancyNames2021,
  numberOfFatalities2021
);

const dataSets2022 = functions.pieChartDataSet(
  occupancyNames2022,
  numberOfFatalities2022
);

function FatalitiesPerOccupancy() {
  return (
    <div className="h-full flex flex-col items-center text-center gap-5">
      <p className="text-2xl font-semibold">
        Top 5 Occupancy Type per fatalities
      </p>
      <div className="h-full flex flex-col gap-5 justify-center ">
        <div className="flex">
          <div className="w-[500px] h-[500px] p-2 flex flex-col">
            <p className="text-2xl font-semibold">2020</p>
            <div className="flex-1">
              <PieChart data={dataSets2020} />
            </div>
          </div>
          <div className="w-[500px] h-[500px] p-2 flex flex-col">
            <p className="text-2xl font-semibold">2021</p>
            <div className="flex-1">
              <PieChart data={dataSets2021} />
            </div>
          </div>
        </div>
        {/* sadsad */}
        <div className="flex">
          <div className="w-[500px] h-[500px] p-2 flex flex-col">
            <p className="text-2xl font-semibold">2022</p>
            <div className="flex-1">
              <PieChart data={dataSets2022} />
            </div>
          </div>
          <div className="w-[500px] h-[500px] p-2 flex flex-col">
            <p className="text-2xl font-semibold">2023</p>
            <div className="flex-1">
              <PieChart data={dataSets2023} />
            </div>
          </div>
        </div>
        {/* sads */}
        <div className="flex">
          <div className="w-[500px] h-[500px] p-2 flex flex-col">
            <p className="text-2xl font-semibold">2024</p>
            <div className="flex-1">
              <PieChart data={dataSets2024} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FatalitiesPerOccupancy;
