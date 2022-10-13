import "./App.css";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import React from "react";
import "./App.css";
import { useState } from "react";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export default function App() {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities") || "[]")
  );

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities([...cities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  localStorage.setItem("cities", JSON.stringify(cities));

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
// const nombre = [3,4,1];

// localStorage.setItem("nombreDeUsuario", nombre);

// const nombre = localStorage.getItem("nombreDeUsuario")

// console.log(nombre)

// const users = ["tobi", "agus"]

// localStorage.setItem("users", JSON.stringify(users));

// let users = JSON.parse(localStorage.getItem("users") || "[]");

// console.log(users)
