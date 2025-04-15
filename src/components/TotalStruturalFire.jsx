import Data2023 from "../Data2023";
import Data2024 from "../Data2024";
import Data2020 from "../Data2020";
import functions from "../functions/functions";

const totalNumberStruturalFire2020 = functions.getTotalStruturalFire(
  Data2020.fireIncidents2020
);
const totalNumberStruturalFire2023 = functions.getTotalStruturalFire(
  Data2023.fireIncidents2023
);
const totalNumberStruturalFire2024 = functions.getTotalStruturalFire(
  Data2024.fireIncidents2024
);

function TotalStruturalFire() {
  return (
    <div className="w-full flex justify-center text-center">
      <table className="border border-1 border-black">
        <thead className="border border-1 border-black text-2xl">
          <tr>
            <th colSpan="2" className="p-5">
              Total Number of Structural Fire Incidents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-1 border-black text-xl">
            <td className="border border-1 border-black">2023</td>
            <td>2024</td>
            <td className="border border-1 border-black">2020</td>
          </tr>
          <tr className="text-2xl text-red-600 font-semibold">
            <td className="border border-1 border-black">
              {totalNumberStruturalFire2023}
            </td>
            <td>{totalNumberStruturalFire2024}</td>
            <td>{totalNumberStruturalFire2020}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TotalStruturalFire;
