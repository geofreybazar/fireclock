import functions from "../functions/functions";

const fireIncidentsPerOccupancyType =
  functions.getFireIncidentsPerOccupancyType();

function FireIncidentPerOccupancyType() {
  return (
    <div className='w-full flex justify-center'>
      <table className='border border-black'>
        <thead>
          <tr>
            <th colSpan='2' className='font-semibold text-xl text-center'>
              Total Fire Incidents Per Occupancy Type
            </th>
          </tr>
        </thead>
        <thead>
          <tr className='border border-black'>
            <th className='border border-black p-2'>Occupancy Type</th>
            <th className='border border-black p-2'>No. of Fire Incidents</th>
          </tr>
        </thead>
        <tbody>
          {fireIncidentsPerOccupancyType.map((occupancyType, index) => (
            <tr key={index} className='border border-black'>
              <td className='border border-black p-2'>
                {occupancyType.occupancyType}
              </td>
              <td className='border border-black p-2 text-center'>
                {occupancyType.totalNumberOfFireIncidents}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FireIncidentPerOccupancyType;
