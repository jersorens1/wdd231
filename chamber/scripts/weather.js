// weather information
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const feelsLike = document.querySelector('#feels-like');
const tempHigh = document.querySelector('#temp-high');
const tempLow = document.querySelector('#temp-low');
const humidity = document.querySelector('#humidity');

// forecast information
const todayTemp = document.querySelector('#today-temp');
const tomorrowTemp = document.querySelector('#tomorrow-temp');
const nextdayTemp = document.querySelector('#next-day-temp');

const myKey = "f465d894b2acde4840eb46ffd89bc82a";
const myLat = "40.60995";
const myLong = "-111.94076";
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}
&units=imperial`;
const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  async function apiFetch2() {
    try {
      const response = await fetch(forecastURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults2(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

//   DISPLAY THE JSON DATA ONTO MY WEB PAGE
function displayResults(data) {
    captionDesc.innerHTML = data.weather[0].main
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`
    feelsLike.innerHTML = `${Math.round(data.main.feels_like)}&deg;F`
    tempHigh.innerHTML = `${Math.round(data.main.temp_max)}&deg;F`
    tempLow.innerHTML = `${Math.round(data.main.temp_min)}&deg;F`
    humidity.innerHTML = `${Math.round(data.main.humidity)}&#x25;`
    todayTemp.innerHTML = `<strong>${Math.round(data.main.temp_max)}&deg;F</strong>`

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].main)
}


function displayResults2(data) {
    tomorrowTemp.innerHTML = `<strong>${Math.round(data.list[6].main.temp)}&deg;F</strong>`
    nextdayTemp.innerHTML = `<strong>${Math.round(data.list[14].main.temp)}&deg;F</strong>`
}

  
// START THE PROCESS
  apiFetch();
  apiFetch2();

