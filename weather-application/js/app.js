const cityForm = document.querySelector("[data-js=change-location]");
const cityName = document.querySelector("[data-js='city-name'");
const cityWeather = document.querySelector("[data-js='city-weather'");
const cityTemperature = document.querySelector("[data-js='city-temperature'");
const cityCard = document.querySelector("[data-js='city-card']")

cityForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const inputValeu = event.target.city.value;

  const [{ Key, LocalizedName }] = await getCityData(inputValeu);
  const [{ WeatherText, Temperature }] = await getCityWeather(Key);
  
  if(cityCard.classList.contains('d-none')){
    cityCard.classList.remove('d-none');
  }
  cityName.textContent = LocalizedName
  cityWeather.textContent = WeatherText
  cityTemperature.textContent = Temperature.Metric.Value

});
