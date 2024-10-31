// ================================================================JavaScript for hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
});
//======================================================================================== TIME and DATA
document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `<span class="currentYear">
${today.getFullYear()} </span>`;

document.querySelector("#lastModified").innerHTML = `<span class="lastModified">
Last Modification: ${document.lastModified}</span>`;
//=============================================================================================== WEATHER
const weatherApiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const city = 'YOUR_CITY'; // Replace with your city name

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
        const data = await response.json();
        
        if (data.weather) {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const isRaining = weatherDescription.includes('rain');

            document.getElementById('weather-info').innerHTML = `
                <p>${temperature}°C</p>
                <p>${weatherDescription}</p>
                <p>${isRaining ? "🌧️ It's raining! Bring your rain gear." : "🌤️ No rain, enjoy your ride!"}</p>
            `;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = '<p>Unable to get weather data.</p>';
    }
}

getWeather();


 //=============================================================================== TRAILS

    function scheduleRide(trailName) {
    alert('You have scheduled a ride for ' + trailName + '.');
}

