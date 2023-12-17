const API = "0c1683c24d6ce797bb03e4cb2ded649d";
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API}&units=metric&`;

let seacrh_city = document.querySelector(".seacrh-box");
let city = document.querySelector(".city");
let weather = document.querySelector(".weather");
let temp = document.querySelector(".temp");
let date = document.querySelector(".date");
let sunrise = document.querySelector(".sunrise");
let sunset = document.querySelector(".sunset");

//? Get weather by location
navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  getWeather(`lat=${latitude}&lon=${longitude}`);
});

//? Get weather by input
seacrh_city.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    getWeather(`q=${seacrh_city.value}`);
  }
});

function getWeather(str) {
  fetch(URL + str)
    .then((response) => response.json())
    .then((data) => {
      try {
        date.innerHTML = new Date().toLocaleString("default", {
          month: "long",
          day: "numeric",
          weekday: "long",
          year: "numeric",
        });

        city.innerHTML = `${data.name}, ${data.sys.country}`;
        temp.innerHTML = `${data.main.temp.toFixed()}°C`;
        weather.innerHTML = data.weather[0].main;

        sunrise.innerHTML = `sunrise: ${new Date(
          data.sys.sunrise * 1000
        ).toLocaleString("default", { timeStyle: "short" })}`;

        sunset.innerHTML = `sunset: ${new Date(
          data.sys.sunset * 1000
        ).toLocaleString("default", { timeStyle: "short" })}`;

        seacrh_city.value = "";
      } catch (error) {
        if (error.name == "TypeError") {
          alert("Please enter valid country or city!");
        }
        console.log(error);
      }
    });
}


const header = document.querySelector('header');
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.alignItems = 'center';
header.style.padding = '50px 15px 15px';

const body = document.querySelector('body');
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'top center';
body.style.fontFamily = `"montserrat", sans-serif` ;
body.style.margin = '0';
body.style.padding = '0';
body.style.boxSizing = 'border-box';
body.style.fontFamily = `"Courier New", Courier, monospace`;

const main = document.querySelector('main')
main.style.marginTop = '20vh';
main.style.padding = '25px 25px 50px';
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';
main.style.textAlign = 'center';


seacrh_city.style.width = '100%';
seacrh_city.style.maxWidth = '280px';
seacrh_city.style.padding = '10px 15px';
seacrh_city.style.border = 'none';
seacrh_city.style.outline = 'none';
seacrh_city.style.fontSize = '20px';
seacrh_city.style.FontWeight = '300';
seacrh_city.style.color = '#333';
seacrh_city.style.borderRadius = '16px 0 16px 0';
seacrh_city.style.borderBottom = '3px solid #df8e00';
seacrh_city.style.backgroundColor = 'rgba(255 , 255, 255, 0.2)';

const Allwrap = document.querySelector('.app-wrap');
Allwrap.style.display = 'grid';
Allwrap.style.height = '100vh';
Allwrap.style.gridTemplateColumns = '50% 50%';
Allwrap.style.backgroundImage = ` linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))`

sunset.style.color = '#fff';
sunset.style.fontSize = '20px';
sunset.style.FontWeight = '500';
sunset.style.marginLeft = '-12px';
sunset.style.textShadow = '0px 4px rgba(0, 0, 0, 0.4)';


sunrise.style.color = '#fff';
sunrise.style.fontSize = '20px';
sunrise.style.FontWeight = '500';
sunrise.style.marginBottom = '10px';
sunrise.style.textShadow = '0px 4px rgba(0, 0, 0, 0.4)';

date.style.color = '#fff';
date.style.fontSize = '16px';


span.style.FontWeight = '500';


city.style.color = '#fff';
city.style.fontSize = '32px';
city.style.FontWeight = '500';
city.style.marginBottom = '5px';
