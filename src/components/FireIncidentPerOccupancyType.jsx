import PieChart from "./PieChart";
import { Chart as ChartJS } from "chart.js/auto";

import functions from "../functions/functions";
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

const fireIncidentsPerOccupancyType2020 =
  functions.getFireIncidentsPerOccupancyType(fireIncidents2020);

const occupancyNames2020 = fireIncidentsPerOccupancyType2020.map(
  (item) => item.occupancyType
);

const numberOfFireIncidentsPerOccupancy2020 =
  fireIncidentsPerOccupancyType2020.map(
    (item) => item.totalNumberOfFireIncidents
  );

const fireIncidentsPerOccupancyType2021 =
  functions.getFireIncidentsPerOccupancyType(fireIncidents2021);

const occupancyNames2021 = fireIncidentsPerOccupancyType2021.map(
  (item) => item.occupancyType
);

const numberOfFireIncidentsPerOccupancy2021 =
  fireIncidentsPerOccupancyType2021.map(
    (item) => item.totalNumberOfFireIncidents
  );

const fireIncidentsPerOccupancyType2022 =
  functions.getFireIncidentsPerOccupancyType(fireIncidents2022);

const occupancyNames2022 = fireIncidentsPerOccupancyType2022.map(
  (item) => item.occupancyType
);

const numberOfFireIncidentsPerOccupancy2022 =
  fireIncidentsPerOccupancyType2022.map(
    (item) => item.totalNumberOfFireIncidents
  );

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

const dataSets2020 = functions.pieChartDataSet(
  occupancyNames2020,
  numberOfFireIncidentsPerOccupancy2020
);

const dataSets2021 = functions.pieChartDataSet(
  occupancyNames2021,
  numberOfFireIncidentsPerOccupancy2021
);

const dataSets2022 = functions.pieChartDataSet(
  occupancyNames2022,
  numberOfFireIncidentsPerOccupancy2022
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
    <div className="h-full flex flex-col items-center text-center gap-5">
      <p className="text-2xl font-semibold">
        Top 5 Occupancy Type per fire Incident
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

export default FireIncidentPerOccupancyType;
