import { useMemo } from "react";
import functions from "../functions/functions";
import Data from "../Data";

const fireIncidents = Data.fireIncidents;
const getFireCauses = functions.getFireCauses;

function FireCause() {
  const fireIncidentsPerCity = useMemo(
    () => getFireCauses(fireIncidents),
    [fireIncidents]
  );

  return (
    <div className='w-full flex justify-center'>
      <table className='border border-black'>
        <thead>
          <tr>
            <th colSpan='2' className='font-semibold text-xl text-center'>
              Top 5 Causes of Fire in National Capital Region
            </th>
          </tr>
        </thead>
        <thead>
          <tr className='border border-black'>
            <th className='border border-black p-2'>Cause</th>
            <th className='border border-black p-2'>Total Cases</th>
          </tr>
        </thead>
        <tbody>
          {fireIncidentsPerCity.map((cause, index) => (
            <tr key={index} className='border border-black'>
              <td className='border border-black p-2'>{cause.cause}</td>
              <td className='border border-black p-2 text-center'>
                {cause.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FireCause;
