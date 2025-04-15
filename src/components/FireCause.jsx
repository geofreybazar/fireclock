import { useMemo } from "react";
import functions from "../functions/functions";
import Data from "../Data";

import PieChart from "./PieChart";
import Data2023 from "../Data2023";
import Data2024 from "../Data2024";
import Data2020 from "../Data2020";

const fireIncidents2023 = Data2023.fireIncidents2023;
const fireIncidents2024 = Data2024.fireIncidents2024;
const fireIncidents2020 = Data2020.fireIncidents2020;

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

  const causes2023 = fireIncidentsPerCity2023.map((item) => item.cause);
  const causes2024 = fireIncidentsPerCity2024.map((item) => item.cause);
  const causes2020 = fireIncidentsPerCity2020.map((item) => item.cause);

  const numberOfFireIncidents2023 = fireIncidentsPerCity2023.map(
    (item) => item.total
  );
  const numberOfFireIncidents2024 = fireIncidentsPerCity2024.map(
    (item) => item.total
  );
  const numberOfFireIncidents2020 = fireIncidentsPerCity2020.map(
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
    causes2024,
    numberOfFireIncidents2020
  );

  return (
    <div className="h-full flex flex-col items-center text-center gap-5">
      <p className="text-2xl font-semibold">Top 5 Causes per fire Incident</p>
      <div className="h-full flex justify-center ">
        <div className="w-[600px] h-[600px]">
          <p className="text-2xl font-semibold">2023 </p>
          <PieChart data={dataSets2023} />
        </div>
        <div className="w-[600px] h-[600px]">
          <p className="text-2xl font-semibold">2024</p>
          <PieChart data={dataSets2024} />
        </div>
        <div className="w-[600px] h-[600px]">
          <p className="text-2xl font-semibold">2020</p>
          <PieChart data={dataSets2020} />
        </div>
      </div>
    </div>
  );
}

export default FireCause;
