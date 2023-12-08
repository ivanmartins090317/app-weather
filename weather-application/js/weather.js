const APIkey = "BJLIzq8KZR4yFGwLymqcoH99nmGfuGCZ";
const language = "pt-BR";
const baseUrl = "http://dataservice.accuweather.com/";

const getCityUrl = (cityName) =>
  `${baseUrl}locations/v1/cities/search?apikey=${APIkey}&q=${cityName}`;

const getCityWeatherUrl = (cityKey) =>
  `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIkey}&language=${language}`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Dados não encontrados");
    }
    return response.json();
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};

const getCityData = (cityName) => fetchData(getCityUrl(cityName));
const getCityWeather = cityKey => fetchData(getCityWeatherUrl(cityKey));


