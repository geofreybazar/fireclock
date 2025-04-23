import { useMemo } from "react";
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

const getFireCauses = functions.getFireCauses;

function FireCause() {
  const fireIncidentsPerCity2023 = useMemo(
    () => getFireCauses(fireIncidents2023),
    [fireIncidents2023]
  );

  const fireIncidentsPerCity2024 = useMemo(
    () => getFireCauses(fireIncidents2024),
    [fireIncidents2024]
  );

  const fireIncidentsPerCity2020 = useMemo(
    () => getFireCauses(fireIncidents2020),
    [fireIncidents2020]
  );

  const fireIncidentsPerCity2021 = useMemo(
    () => getFireCauses(fireIncidents2021),
    [fireIncidents2021]
  );

  const fireIncidentsPerCity2022 = useMemo(
    () => getFireCauses(fireIncidents2022),
    [fireIncidents2022]
  );

  const causes2023 = fireIncidentsPerCity2023.map((item) => item.cause);
  const causes2024 = fireIncidentsPerCity2024.map((item) => item.cause);
  const causes2020 = fireIncidentsPerCity2020.map((item) => item.cause);
  const causes2021 = fireIncidentsPerCity2021.map((item) => item.cause);
  const causes2022 = fireIncidentsPerCity2022.map((item) => item.cause);

  const numberOfFireIncidents2023 = fireIncidentsPerCity2023.map(
    (item) => item.total
  );
  const numberOfFireIncidents2024 = fireIncidentsPerCity2024.map(
    (item) => item.total
  );
  const numberOfFireIncidents2020 = fireIncidentsPerCity2020.map(
    (item) => item.total
  );
  const numberOfFireIncidents2021 = fireIncidentsPerCity2021.map(
    (item) => item.total
  );

  const numberOfFireIncidents2022 = fireIncidentsPerCity2022.map(
    (item) => item.total
  );

  const dataSets2023 = functions.pieChartDataSet(
    causes2023,
    numberOfFireIncidents2023
  );

  const dataSets2024 = functions.pieChartDataSet(
    causes2024,
    numberOfFireIncidents2024
  );

  const dataSets2020 = functions.pieChartDataSet(
    causes2020,
    numberOfFireIncidents2020
  );

  const dataSets2021 = functions.pieChartDataSet(
    causes2021,
    numberOfFireIncidents2021
  );

  const dataSets2022 = functions.pieChartDataSet(
    causes2022,
    numberOfFireIncidents2022
  );

  return (
    <div className="h-full flex flex-col items-center text-center gap-5">
      <p className="text-2xl font-semibold">Top 5 Causes Per Fire Incident</p>
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

export default FireCause;
