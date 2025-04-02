
const buttonElement = document.getElementById('read-more');
const pElement = document.getElementById('more-info');
const showInfo = (domElement) => {
    if (domElement.style.display !== 'block') {
        domElement.style.display = 'block';
    } else {
        domElement.style.display = 'none'

    }
}
buttonElement.addEventListener('click', () => {
    showInfo(pElement);
})
const menu = document.querySelector(".header__right-menu ");
const items = document.querySelectorAll(".item");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
function navmenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
hamburger.addEventListener('click', navmenu);
items.forEach(
    function (item) {
        item.addEventListener('click', navmenu);
    }
)
let weather = {
    apikey: "169ea1bcf7343a0cc211782e287a9b74",
    fetchweather: function (city) {
       fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.apikey
        
       )
       .then((response) => response.json())
       .then((data) => this.displayWeather(data));
    },
   displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "Km/h";


   },
   search: function () {
   this.fetchweather(document.querySelector(".search-bar").value);
   },
};
document.querySelector(".search button")
.addEventListener("click", function() {
weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
if (event.key == "Enter") {
    weather.search();
}
})