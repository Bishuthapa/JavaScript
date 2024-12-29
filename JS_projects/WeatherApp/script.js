const url =
  "https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "823967ce2bmsh9cef3b8a0391549p1c9775jsn91a64e2fe301",
    "x-rapidapi-host": "tomorrow-io1.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json()) // Parse the response as JSON
  .then((response) => {
    console.log(response); // Log the response for debugging
    
    // Assign values from the response to HTML elements
    cloudBase.innerHTML = response.cloudBase;
    cloudCeiling.innerHTML = response.cloudCeiling;
    cloudCover.innerHTML = response.cloudCover;
    dewPoint.innerHTML = response.dewPoint;
    evapotranspiration.innerHTML = response.evapotranspiration;
    freezingRainIntensity.innerHTML = response.freezingRainIntensity;
    hailProbability.innerHTML = response.hailProbability;
    hailSize.innerHTML = response.hailSize;
    humidity.innerHTML = response.humidity;
    iceAccumulation.innerHTML = response.iceAccumulation;
    iceAccumulationLwe.innerHTML = response.iceAccumulationLwe;
    precipitationProbability.innerHTML = response.precipitationProbability;
    pressureSurfaceLevel.innerHTML = response.pressureSurfaceLevel;
    rainAccumulation.innerHTML = response.rainAccumulation;
    rainAccumulationLwe.innerHTML = response.rainAccumulationLwe;
    rainIntensity.innerHTML = response.rainIntensity;
    sleetAccumulation.innerHTML = response.sleetAccumulation;
    sleetAccumulationLwe.innerHTML = response.sleetAccumulationLwe;
    sleetIntensity.innerHTML = response.sleetIntensity;
    snowAccumulation.innerHTML = response.snowAccumulation;
    snowAccumulationLwe.innerHTML = response.snowAccumulationLwe;
    snowIntensity.innerHTML = response.snowIntensity;
    temperature.innerHTML = response.temperature;
    temperatureApparent.innerHTML = response.temperatureApparent;
    uvHealthConcern.innerHTML = response.uvHealthConcern;
    uvIndex.innerHTML = response.uvIndex;
    visibility.innerHTML = response.visibility;
    weatherCode.innerHTML = response.weatherCode;
    windDirection.innerHTML = response.windDirection;
    windGust.innerHTML = response.windGust;
    windSpeed.innerHTML = response.windSpeed;
  })
  
  .catch(err => console.error(err));
