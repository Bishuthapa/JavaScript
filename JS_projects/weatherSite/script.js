const apiKey = "cb4b8a7e6f7350e894a671eae0ef80ec";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const searchBox = document.querySelector('#search-bar');
const searchBtn = document.querySelector('#search-button');

async function fetchWeather(city) {
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        updateWeatherInfo(result, city);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function updateWeatherInfo(data, city) {
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)} &deg;C`;
    document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.querySelector('.pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
    document.querySelector('.wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.querySelector('.weather').textContent = `Weather: ${data.weather[0].description}`;
    document.querySelector('.city').innerHTML = city;
}

searchBtn.addEventListener('click', () => {
    const city = searchBox.value;
    fetchWeather(city);
});

fetchWeather('kathmandu').then(() => {
    document.querySelector('.date').textContent = new Date().toDateString();
    setTimeout(() => {
        fetchWeather('Biratnagar');
    }, 10000); // Changed the delay to 10 seconds
});



/*
const url = 'https://sunrise-sunset-times-pro.p.rapidapi.com/api/Solar/solartimes?date=2024-11-29&latitude=19.2568&longitude=-129.3678498';
	
		const TimeAPIKey = '823967ce2bmsh9cef3b8a0391549p1c9775jsn91a64e2fe301';
        const timeBaseUrl = 'https://sunrise-sunset-times-pro.p.rapidapi.com/api/Solar/solartimes';

        const fullURL = `${timeBaseUrl}?apiKey=${TimeAPIKey}&lat=${wantedData.latitude}&long=${wantedData.longitude}`;

	


const wantedData = {
    latitude: 19.2568,
    longitude: -129.3678498
};
async function fetchTime() {
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

document.querySelector('.SunriseTime').textContent = result.localTimeSunrise;
document.querySelector('.SunsetTime').textContent = result.localTimeSunset;






} catch (error) {
	console.error(error);
}
}

const time = fetchTime();
*/