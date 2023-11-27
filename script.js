'use strict';

// Function to fetch weather data based on the city name
function searchWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ae5c9dfbef09f4bd7576a320458270b&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let dateObj = new Date();
      let month = monthNames[dateObj.getMonth()];
      let day = dateObj.getDate();
      let year = dateObj.getFullYear();
      let newdate = `${month} ${day}, ${year}`;

      const app = document.querySelector('.app');


      app.insertAdjacentHTML('afterbegin', `
      <div class="titlebar">
      <p class="date">${newdate}</p>
      <h4 class="city">${data.name}</h4>
      <p class="description">${data.weather[0].description}</p>
      </div>
  
      <div class="temperature">
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      <h2>${Math.round(data.main.temp)}°C</h2>
      </div>
  
  
      <div class="detail">
      <div class="col">
          <div class="view">
              <h5>Wind</h5>
              <p>${data.wind.speed}mps</p>
  
              <div class="info"></div>
              <h5>Visibility</h5>
              <p>${data.visibility}m</p>
          </div>
  
  
      </div>
  
      <div class="col">
          <div class="view">
              <h5>Humidity</h5>
              <p>${data.main.humidity}%</p>
          </div>
  
          <div class="info">
              <h5>Air pressure</h5>
              <p>${data.main.pressure}pa</p>
          </div>
      </div>
  </div>
        <!-- Footer -->
        <div class="footer">
          <p>&copy 2023 Nit Net</p>
        </div>
      `);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Add error handling
    });
}

const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const city = document.getElementById('cityInput').value;
  searchWeather(city); // Call the function to fetch weather data for the entered city
});
