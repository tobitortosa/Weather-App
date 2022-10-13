const axios = require("axios");

module.exports = {
  getWeatherDetails: async (ciudad) => {
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
    const card = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    );

    return card.data;
  },
};
