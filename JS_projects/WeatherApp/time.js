const url =
  "https://sunrise-sunset-times-pro.p.rapidapi.com/api/Solar/solartimes?date=2024-11-29&latitude=19.2568&longitude=-129.3678498";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "823967ce2bmsh9cef3b8a0391549p1c9775jsn91a64e2fe301",
    "x-rapidapi-host": "sunrise-sunset-times-pro.p.rapidapi.com",
  },
};

const wantedData = {
  latitude: 19.2568,
  longitude: -129.3678498,
};
async function fetchTime() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    document.querySelector(".SunriseTime").textContent =
      result.localTimeSunrise;
    document.querySelector(".SunsetTime").textContent = result.localTimeSunset;
  } catch (error) {
    console.error(error);
  }
}

const time = fetchTime();
