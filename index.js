function showWheaterDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
const apiKey = `245b2cdfdbe3aa4dfa4daa2471ebc421`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

fetch(apiUrl)
    .then(Response => Response.json())
    .then(data => {
        const wheaterInfo = document.getElementById('wheaterInfo');
        wheaterInfo.innerHTML = `<h>Wheater in ${data.name}</h>
                                 <p>Temperature: ${data.main.temp} &#8451;</p>
                                 <p>Wheater: ${data.wtheater[0].description}</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showWheaterDetails);
