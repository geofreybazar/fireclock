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

function getTotalStruturalFire() {
  const structuralFire = Data.fireIncidents.filter(
    (item) => item.propertyTypeGeneralCategory !== "TRANSPORT"
  );

  return structuralFire.length;
}

function getFireIncidentsPerOccupancyType() {
  const fireIncidentsPerOccupanyType = [];
  const structuralFire = Data.fireIncidents.filter(
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
};
