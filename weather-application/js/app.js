const cityForm = document.querySelector("[data-js=change-location]");
const cityName = document.querySelector("[data-js='city-name']");
const cityWeather = document.querySelector("[data-js='city-weather']");
const cityTemperature = document.querySelector("[data-js='city-temperature']");
const cityCard = document.querySelector("[data-js='city-card']");
let imgTime = document.querySelector("[data-js='time']");
const timeIconContainer = document.querySelector("[data-js='time-icon']");

const showCityCard = () => {
  if (cityCard.classList.contains("d-none")) {
    cityCard.classList.remove("d-none");
  }
};

const fetchWeatherInfo = async (cityNameInfo) => {
  const [{ Key, LocalizedName }] = await getCityData(cityNameInfo);
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key);

  return { LocalizedName, WeatherText, Temperature, IsDayTime, WeatherIcon };
}
const showWeatherCityInfo = async (cityNameInfo) => {  
try{
  const { LocalizedName, WeatherText, Temperature, IsDayTime, WeatherIcon} =
  await fetchWeatherInfo(cityNameInfo);

  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`;

  imgTime.src = IsDayTime ? "./src/day.svg" : "./src/night.svg";
  timeIconContainer.innerHTML = timeIcon;
  cityName.textContent = LocalizedName;
  cityWeather.textContent = WeatherText;
  cityTemperature.textContent = Temperature.Metric.Value;

  showCityCard();
}catch(error){
  alert('Error: Cidade não encontrada')
}

};

const getCityNameOnLocalStorage = () => {
  const city = localStorage.getItem("lastValueUser");
  if (city) {
    showWeatherCityInfo(city);
  }
};

const hendleFormSubmit = (event) => {
  event.preventDefault();

  const inputValue = event.target.city.value;
  localStorage.setItem("lastValueUser", inputValue);

  showWeatherCityInfo(inputValue);
  cityForm.reset();
}

cityForm.addEventListener("submit", hendleFormSubmit);

getCityNameOnLocalStorage();
