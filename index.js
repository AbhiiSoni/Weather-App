const API_KEY = 'd28c2c78fbc7cbbb252b6b3326bf22b9';
const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const weather = document.querySelector('.weather');
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

const fetchWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... </h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();   
    return showWeather(data);
}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h2> City Not Found </h2>`
        return;
    }
    if(input.value == ''){
        weather.innerHTML = `<h2> Please Enter City </h2>`
    }
    weather.innerHTML = ` <h2 class="city">Weather in ${data.name}</h2>
                          <h1 class="temp">${Math.round(data.main.temp)} °C</h1>
                        <div class="description"> 
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="image" class="icon">
                        <div class="des">${data.weather[0].description}</div>
                        </div> 
                        <div class="humidity">Humidity: ${data.main.humidity}</div>
                        <div class="wind">Wind speed: ${data.wind.speed} km/h</div>`
}


button.addEventListener('click',() => {
    {
        fetchWeather(input.value);
    }
})
