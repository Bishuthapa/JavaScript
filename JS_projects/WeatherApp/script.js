const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '823967ce2bmsh9cef3b8a0391549p1c9775jsn91a64e2fe301',
    'x-rapidapi-host': 'tomorrow-io1.p.rapidapi.com'
  }
};
async function fetchWeather() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    // Assign values from the response to HTML elements
    document.querySelector("#cloudBase").innerHTML = result.timelines.hourly[0].values.cloudBase;
    document.querySelector("#cloudCeiling").innerHTML = result.timelines.hourly[0].values.cloudCeiling;
    document.querySelector("#cloudCover").innerHTML = result.timelines.hourly[0].values.cloudCover;
    document.querySelector("#dewPoint").innerHTML = result.timelines.hourly[0].values.dewPoint;
    document.querySelector("#evapotranspiration").innerHTML = result.timelines.hourly[0].values.evapotranspiration;
    document.querySelector("#freezingRainIntensity").innerHTML = result.timelines.hourly[0].values.freezingRainIntensity;
    document.querySelector("#humidity").innerHTML = result.timelines.hourly[0].values.humidity;
    document.querySelector("#iceAccumulation").innerHTML = result.timelines.hourly[0].values.iceAccumulation;
    document.querySelector("#iceAccumulationLwe").innerHTML = result.timelines.hourly[0].values.iceAccumulationLwe;
    document.querySelector("#precipitationProbability").innerHTML = result.timelines.hourly[0].values.precipitationProbability;
    document.querySelector("#pressureSurfaceLevel").innerHTML = result.timelines.hourly[0].values.pressureSurfaceLevel;
    document.querySelector("#rainAccumulation").innerHTML = result.timelines.hourly[0].values.rainAccumulation;
    document.querySelector("#rainAccumulationLwe").innerHTML = result.timelines.hourly[0].values.rainAccumulationLwe;
    document.querySelector("#rainIntensity").innerHTML = result.timelines.hourly[0].values.rainIntensity;
    document.querySelector("#sleetAccumulation").innerHTML = result.timelines.hourly[0].values.sleetAccumulation;
    document.querySelector("#sleetAccumulationLwe").innerHTML = result.timelines.hourly[0].values.sleetAccumulationLwe;
    document.querySelector("#sleetIntensity").innerHTML = result.timelines.hourly[0].values.sleetIntensity;
    document.querySelector("#snowAccumulation").innerHTML = result.timelines.hourly[0].values.snowAccumulation;
    document.querySelector("#snowAccumulationLwe").innerHTML = result.timelines.hourly[0].values.snowAccumulationLwe;
    document.querySelector("#snowIntensity").innerHTML = result.timelines.hourly[0].values.snowIntensity;
    document.querySelector("#temperature").innerHTML = result.timelines.hourly[0].values.temperature;
    document.querySelector("#temperatureApparent").innerHTML = result.timelines.hourly[0].values.temperatureApparent;
    document.querySelector("#uvHealthConcern").innerHTML = result.timelines.hourly[0].values.uvHealthConcern;
    document.querySelector("#uvIndex").innerHTML = result.timelines.hourly[0].values.uvIndex;
    document.querySelector("#visibility").innerHTML = result.timelines.hourly[0].values.visibility;
    document.querySelector("#weatherCode").innerHTML = result.timelines.hourly[0].values.weatherCode;
    document.querySelector("#windDirection").innerHTML = result.timelines.hourly[0].values.windDirection;
    document.querySelector("#windGust").innerHTML = result.timelines.hourly[0].values.windGust;
    document.querySelector("#windSpeed").innerHTML = result.timelines.hourly[0].values.windSpeed;
  } catch (error) {
    console.error(error);
  }
}

fetchWeather();

