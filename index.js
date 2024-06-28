function getWeatherEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
      return '⛈️'; // Thunderstorm
    } else if (weatherId >= 300 && weatherId < 500) {
      return '🌧️'; // Drizzle
    } else if (weatherId >= 500 && weatherId < 600) {
      return '🌧️'; // Rain
    } else if (weatherId >= 600 && weatherId < 700) {
      return '❄️'; // Snow
    } else if (weatherId >= 700 && weatherId < 800) {
      return '🌫️'; // Atmosphere (fog, mist, etc.)
    } else if (weatherId === 800) {
      return '☀️'; // Clear
    } else if (weatherId > 800 && weatherId < 900) {
      return '☁️'; // Clouds
    } else {
      return '❓'; // Unknown
    }
  }
  function displayTemperature(response) {
      console.log(response);
      let temperatureElement = document.querySelector("#current-temperature");
      let windElement = document.querySelector("#wind-speed");
      let cityElement = document.querySelector("#current-city");
      let iconElement = document.querySelector("#current-temperature-icon");
      let descriptionElement =document.querySelector("#weather-description")

      let weatherDescription = response.data.weather[0].description;
      let temperature = Math.round(response.data.main.temp);
      let weatherId = response.data.weather[0].id;
      let windSpeed = response.data.wind.speed;
  
      descriptionElement.innerHTML = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);  // Capitalize first letter
      cityElement.innerHTML = response.data.name;
      temperatureElement.innerHTML = `${temperature}°C`;
      iconElement.innerHTML = getWeatherEmoji(weatherId);
      windElement.innerHTML = `${windSpeed} m/s`;
  }
  
  
      function search(event) {
      event.preventDefault();
      let searchInputElement = document.querySelector("#search-input");  
      let city = searchInputElement.value;
      let apiKey = "4074f81e75e4860f1f7cbf820809aaaa";
      let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(displayTemperature);
    }
    
    function formatDate(date) {
      let minutes = date.getMinutes();
      let hours = date.getHours();
      let day = date.getDay();
    
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    
      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (hours < 10) {
          hours = `0${hours}`;
        }
      
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ];
      
        let formattedDay = days[day];
        return `${formattedDay} ${hours}:${minutes}`;
    }
    
    let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", search);
    
    let currentDateELement = document.querySelector("#current-date");
    let currentDate = new Date();
    
    currentDateELement.innerHTML = formatDate(currentDate);
