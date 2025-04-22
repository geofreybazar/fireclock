import Data from "../Data";

const generateDataSets = (labels, data, title, totalNumberofFatalities) => {
  const dataSets = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        additionalData: totalNumberofFatalities,
      },
    ],
  };

  return dataSets;
};

function fireIncidentPerMonthsPerCity(fireIncidents, city) {
  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );
  const fireIncident = [];
  const monthNames = Data.MONTHS;
  monthNames.forEach((month) => {
    fireIncident.push({
      month: month,
      totalNumberOfFireIncidents: 0,
    });
  });

  if (city === "NCR") {
    structuralFire.forEach((item) => {
      const monthIndex = new Date(item.dateAndTimeOfFire).getMonth();

      const monthName = monthNames[monthIndex];
      const existingMonth = fireIncident.find(
        (entry) => entry.month === monthName
      );
      existingMonth.totalNumberOfFireIncidents += 1;
    });
  } else {
    const fireIncidentWithSameCity = structuralFire.filter(
      (item) => item.cityOrMunicipality === city
    );
    fireIncidentWithSameCity.forEach((item) => {
      const monthIndex = new Date(item.dateAndTimeOfFire).getMonth();
      const monthName = monthNames[monthIndex];
      const existingMonth = fireIncident.find(
        (entry) => entry.month === monthName
      );
      existingMonth.totalNumberOfFireIncidents += 1;
    });
  }
  return fireIncident;
}

function fireIncidentsPerCities(fireIncidents) {
  const cities = Data.CITIES;
  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );
  const fireIncidentsPerCity = [];

  const citiesWithOutNCR = cities.filter((city) => city !== "NCR");
  citiesWithOutNCR.forEach((city) => {
    fireIncidentsPerCity.push({
      city: city,
      totalNumberOfFireIncidents: 0,
    });
  });

  structuralFire.forEach((data) => {
    const city = data.cityOrMunicipality;

    const existingCity = fireIncidentsPerCity.find(
      (item) => item.city === city
    );

    if (existingCity) {
      existingCity.totalNumberOfFireIncidents += 1;
    } else {
      fireIncidentsPerCity.push({
        city: city,
        totalNumberOfFireIncidents: 1,
      });
    }
  });

  return fireIncidentsPerCity;
}

function fireIncidentsPerHour(fireIncidents) {
  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  const hourlyFireIncidents = Array.from({ length: 24 }, (_, hour) => ({
    time: `${hour.toString().padStart(2, "0")}:00 - ${hour
      .toString()
      .padStart(2, "0")}:59`,
    totalNumberOfFireIncidents: 0,
  }));

  structuralFire.forEach((data) => {
    const hour = new Date(data.dateAndTimeOfFire).getHours();
    hourlyFireIncidents[hour].totalNumberOfFireIncidents += 1;
  });

  return hourlyFireIncidents;
}

function getFatalitiesPerTime(fireIncidents) {
  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  const hourlyFireIncidents = Array.from({ length: 24 }, (_, hour) => ({
    time: `${hour.toString().padStart(2, "0")}:00 - ${hour
      .toString()
      .padStart(2, "0")}:59`,
    totalNumberOfFatalities: 0,
  }));

  structuralFire.forEach((data) => {
    const hour = new Date(data.dateAndTimeOfFire).getHours();
    const fatalities = Number(data.totalCivilianNumberOfFatalities);
    hourlyFireIncidents[hour].totalNumberOfFatalities += fatalities;
  });

  return hourlyFireIncidents;
}

function fireIncidentPerMonths(fireIncidents) {
  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  const fireIncidentPerMonth = [];

  structuralFire.forEach((data) => {
    const city = new Date(data.dateAndTimeOfFire);
    const month = city.getMonth();

    const existingMonth = fireIncidentPerMonth.find(
      (item) => item.month === month
    );

    if (existingMonth) {
      existingMonth.totalNumberOfFireIncidents += 1;
    } else {
      fireIncidentPerMonth.push({
        month: month,
        totalNumberOfFireIncidents: 1,
      });
    }
  });

  return fireIncidentPerMonth;
}

function getFireCauses(fireIncidents) {
  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  const fireCause = [];
  structuralFire.forEach((item) => {
    const cause = item.cause;
    const existingCause = fireCause.find((item) => item.cause === cause);
    if (existingCause) {
      existingCause.total += 1;
    } else {
      fireCause.push({
        cause: cause,
        total: 1,
      });
    }
  });
  const sortedFireCause = fireCause
    .toSorted(function (a, b) {
      return a.total - b.total;
    })
    .reverse();

  const top5Causes = sortedFireCause.slice(0, 5);
  return top5Causes;
}

function getTotalStruturalFire(fireIncidents) {
  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  return structuralFire.length;
}

function getFireIncidentsPerOccupancyType(fireIncidents) {
  const fireIncidentsPerOccupanyType = [];

  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  const occupancyType = structuralFire.map(
    (item) => item.propertyTypeSubCategory
  );

  const uniqueOccupancyType = [...new Set(occupancyType)];

  uniqueOccupancyType.forEach((type) => {
    fireIncidentsPerOccupanyType.push({
      occupancyType: type,
      totalNumberOfFireIncidents: 0,
    });
  });

  structuralFire.forEach((data) => {
    const occupancyType = data.propertyTypeSubCategory;
    const existingOccupancyType = fireIncidentsPerOccupanyType.find(
      (item) => item.occupancyType === occupancyType
    );

    if (existingOccupancyType) {
      existingOccupancyType.totalNumberOfFireIncidents += 1;
    }
  });

  const sortedfireIncidentsPerOccupanyType = fireIncidentsPerOccupanyType
    .toSorted(function (a, b) {
      return a.totalNumberOfFireIncidents - b.totalNumberOfFireIncidents;
    })
    .reverse();

  const top5 = sortedfireIncidentsPerOccupanyType.slice(0, 5);
  return top5;
}

function getTopFiveOccupancyWithHighFatalities(fireIncident) {
  const structuralFire = fireIncident.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  const occupancyWithHighFatalities = [];
  structuralFire.forEach((item) => {
    const occupancyType = item.propertyTypeSubCategory;
    const existingOccupancy = occupancyWithHighFatalities.find(
      (item) => item.occupancyType === occupancyType
    );
    if (existingOccupancy) {
      existingOccupancy.fatalities =
        existingOccupancy.fatalities +
        Number(item.totalCivilianNumberOfFatalities);
    } else {
      occupancyWithHighFatalities.push({
        occupancyType: occupancyType,
        fatalities: Number(item.totalCivilianNumberOfFatalities),
      });
    }
  });

  const filtered = occupancyWithHighFatalities.filter(
    (item) => item.fatalities > 0
  );
  const sortedFireOccupany = filtered
    .toSorted(function (a, b) {
      return a.fatalities - b.fatalities;
    })
    .reverse();
  // const top5Causes = sortedFireOccupany.slice(0, 5);

  return filtered;
}

function getTotalEstimatedCostOfDamage() {
  const structuralFire = Data.fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  const estimatedCostOfDamage = structuralFire.map((item) =>
    Number(item.estimatedCostOfDamage.replace(/,/g, ""))
  );

  const totalEstimatedCostOfDamage = estimatedCostOfDamage.reduce(
    (acc, num) => acc + num,
    0
  );

  return totalEstimatedCostOfDamage;
}

const generateDataSetsCombined = (
  labels,
  fireData2023,
  fireData2024,
  fireData2020,
  fireData2021,
  fireData2022
) => {
  const dataSets = {
    labels: labels,
    datasets: [
      {
        label: fireData2020.title,
        data: fireData2020.data,
      },
      {
        label: fireData2021.title,
        data: fireData2021.data,
      },
      {
        label: fireData2022.title,
        data: fireData2022.data,
      },
      {
        label: fireData2023.title,
        data: fireData2023.data,
      },
      {
        label: fireData2024.title,
        data: fireData2024.data,
      },
    ],
  };

  return dataSets;
};

function estimatedDamagePerCities(fireIncidents) {
  const cities = Data.CITIES;
  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  const estimatedDamgePerCity = [];

  const citiesWithOutNCR = cities.filter((city) => city !== "NCR");
  citiesWithOutNCR.forEach((city) => {
    estimatedDamgePerCity.push({
      city: city,
      estimatedCostOfDamage: 0,
    });
  });

  structuralFire.forEach((data) => {
    const city = data.cityOrMunicipality;
    const existingCity = estimatedDamgePerCity.find(
      (item) => item.city === city
    );

    if (existingCity) {
      existingCity.estimatedCostOfDamage =
        existingCity.estimatedCostOfDamage +
        Number(data.estimatedCostOfDamage.replace(/,/g, ""));
    } else {
      estimatedDamgePerCity.push({
        city: city,
        estimatedCostOfDamage: Number(
          data.estimatedCostOfDamage.replace(/,/g, "")
        ),
      });
    }
  });

  return estimatedDamgePerCity;
}

function estimatedDamgeCostPerMonthPerCity(fireIncidents, city) {
  const structuralFire = fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  const estimatedDamageCost = [];
  const monthNames = Data.MONTHS;
  monthNames.forEach((month) => {
    estimatedDamageCost.push({
      month: month,
      totalEstimatedDamageCost: 0,
    });
  });

  if (city === "NCR") {
    structuralFire.forEach((item) => {
      const monthIndex = new Date(item.dateAndTimeOfFire).getMonth();
      const monthName = monthNames[monthIndex];
      const existingMonth = estimatedDamageCost.find(
        (entry) => entry.month === monthName
      );
      existingMonth.totalEstimatedDamageCost =
        existingMonth.totalEstimatedDamageCost +
        Number(item.estimatedCostOfDamage.replace(/,/g, ""));
    });
  } else {
    const fireIncidentWithSameCity = structuralFire.filter(
      (item) => item.cityOrMunicipality === city
    );

    fireIncidentWithSameCity.forEach((item) => {
      const monthIndex = new Date(item.dateAndTimeOfFire).getMonth();
      const monthName = monthNames[monthIndex];
      const existingMonth = estimatedDamageCost.find(
        (entry) => entry.month === monthName
      );
      existingMonth.totalEstimatedDamageCost =
        existingMonth.totalEstimatedDamageCost +
        Number(item.estimatedCostOfDamage.replace(/,/g, ""));
    });
  }

  return estimatedDamageCost;
}

function getHighestDamageIncident(fireIncidents) {
  return fireIncidents.reduce((maxIncident, currentIncident) => {
    const currentCost = currentIncident.estimatedCostOfDamage
      ? Number(currentIncident.estimatedCostOfDamage.replace(/,/g, ""))
      : 0;

    const maxCost = maxIncident.estimatedCostOfDamage
      ? Number(maxIncident.estimatedCostOfDamage.replace(/,/g, ""))
      : 0;

    return currentCost > maxCost ? currentIncident : maxIncident;
  }, fireIncidents[0]);
}

const pieChartDataSet = (labels, pieChartDataSet) => {
  const data = {
    labels: labels,
    datasets: [{ data: pieChartDataSet }],
  };
  return data;
};

export default {
  generateDataSets,
  fireIncidentPerMonthsPerCity,
  fireIncidentsPerCities,
  fireIncidentsPerHour,
  fireIncidentPerMonths,
  getFireCauses,
  getTotalStruturalFire,
  getFireIncidentsPerOccupancyType,
  getFatalitiesPerTime,
  getTopFiveOccupancyWithHighFatalities,
  getTotalEstimatedCostOfDamage,
  generateDataSetsCombined,
  estimatedDamagePerCities,
  estimatedDamgeCostPerMonthPerCity,
  getHighestDamageIncident,
  pieChartDataSet,
};
