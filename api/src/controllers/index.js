const axios = require("axios");

module.exports = {
  getWeatherDetails: async (ciudad) => {
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
    const card = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    );

    const obj = {
      min: Math.round(card.data.main.temp_min),
      max: Math.round(card.data.main.temp_max),
      img: card.data.weather[0].icon,
      id: card.data.id,
      wind: card.data.wind.speed,
      temp: card.data.main.temp,
      name: card.data.name,
      weather: card.data.weather[0].main,
      clouds: card.data.clouds.all,
      latitud: card.data.coord.lat,
      longitud: card.data.coord.lon,
    };

    return obj;
  },
};
