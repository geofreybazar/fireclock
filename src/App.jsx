import PerHour from "./components/PerHour.jsx";
import PerCity from "./components/PerCity.jsx";
import FireCause from "./components/FireCause.jsx";
import PerCItyPerMonth from "./components/PerCItyPerMonth.jsx";
import TotalStruturalFire from "./components/TotalStruturalFire.jsx";
import FireIncidentPerOccupancyType from "./components/FireIncidentPerOccupancyType.jsx";
import TimeVsFatalities from "./components/TimeVsFatalities.jsx";
import PerMonths from "./components/PerMonths.jsx";

function App() {
  return (
    <div className='p-5 flex flex-col items-center'>
      <p className='text-4xl font-semibold text-center p-10'>
        BFP-NCR Fire Analytics for CY 2024
      </p>
      <div className='w-3/5 flex flex-col gap-10'>
        <TotalStruturalFire />
        <div className='flex gap-10 items-center'>
          <FireIncidentPerOccupancyType />
          <FireCause />
        </div>
        <PerCItyPerMonth />
        <PerCity />
        <PerHour />
        <TimeVsFatalities />
        {/* <PerMonths /> */}
      </div>
    </div>
  );
}

export default App;
