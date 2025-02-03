import functions from "../functions/functions";

const totalNumberStruturalFire = functions.getTotalStruturalFire();

function TotalStruturalFire() {
  return (
    <div className='border border-black p-5'>
      <h1 className='text-2xl font-semibold text-center'>
        Total Number of Structural Fire Incidents
      </h1>
      <h1 className='text-3xl font-semibold text-center text-red-500'>
        {totalNumberStruturalFire}
      </h1>
    </div>
  );
}

export default TotalStruturalFire;
