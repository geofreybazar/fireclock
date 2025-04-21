import { useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import PerHour from "./components/PerHour.jsx";
import PerCity from "./components/PerCity.jsx";
import FireCause from "./components/FireCause.jsx";
import PerCItyPerMonth from "./components/PerCItyPerMonth.jsx";
import TotalStruturalFire from "./components/TotalStruturalFire.jsx";
import FireIncidentPerOccupancyType from "./components/FireIncidentPerOccupancyType.jsx";
import TimeVsFatalities from "./components/TimeVsFatalities.jsx";
import FatalitiesPerOccupancy from "./components/FatalitiesPerOccupancy.jsx";
import GetTotalEstimatedDamage from "./components/GetTotalEstimatedDamage.jsx";
import EstimatedCostPerMonthPerCity from "./components/EstimatedCostPerMonthPerCity.jsx";

function App() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="h-screen m-10 flex flex-col items-center gap-5">
      <p className="text-4xl font-semibold text-center p-5">
        BFP-NCR Fire Incident Report FY2020-2024
      </p>

      <TotalStruturalFire />
      <div className="px-10">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Top 5 Occupancies Per Fire Incident"
                value="1"
                wrapped
                sx={{ whiteSpace: "normal", maxWidth: 150 }}
              />
              <Tab
                label="Top 5 Causes Per Fire Incident"
                value="2"
                wrapped
                sx={{ whiteSpace: "normal", maxWidth: 150 }}
              />
              <Tab
                label="Top 5 Occupancies Per Fatalities"
                value="3"
                wrapped
                sx={{ whiteSpace: "normal", maxWidth: 150 }}
              />
              <Tab
                label="Fire Incidents Per Month"
                value="4"
                wrapped
                sx={{ whiteSpace: "normal", maxWidth: 150 }}
              />
              <Tab
                label="Fire Incidents Per City"
                value="5"
                wrapped
                sx={{ whiteSpace: "normal", maxWidth: 150 }}
              />
              <Tab
                label="Fire Incidents Per Hour"
                value="6"
                wrapped
                sx={{ whiteSpace: "normal", maxWidth: 150 }}
              />
              <Tab
                label="Number of Fatalities per hour"
                value="7"
                wrapped
                sx={{ whiteSpace: "normal", maxWidth: 150 }}
              />
              <Tab
                label="Estimated Cost of Damage per City"
                value="8"
                wrapped
                sx={{ whiteSpace: "normal", maxWidth: 150 }}
              />
              <Tab
                label="Estimated Cost of Damage Per Month"
                value="9"
                wrapped
                sx={{ whiteSpace: "normal", maxWidth: 150 }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <FireIncidentPerOccupancyType />
          </TabPanel>
          <TabPanel value="2">
            <FireCause />
          </TabPanel>
          <TabPanel value="3">
            <FatalitiesPerOccupancy />
          </TabPanel>
          <TabPanel value="4">
            <PerCItyPerMonth />
          </TabPanel>
          <TabPanel value="5">
            <PerCity />
          </TabPanel>
          <TabPanel value="6">
            <PerHour />
          </TabPanel>
          <TabPanel value="7">
            <TimeVsFatalities />
          </TabPanel>
          <TabPanel value="8">
            <GetTotalEstimatedDamage />
          </TabPanel>
          <TabPanel value="9">
            <EstimatedCostPerMonthPerCity />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}

export default App;
