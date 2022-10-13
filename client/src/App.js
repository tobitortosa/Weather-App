import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import React from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities") || "[]")
  );

  async function onSearch(ciudad) {
    const card = await axios.get(
      `https://weather-app-api-woad.vercel.app/card?city=${ciudad}`
    );
    if (typeof(card.data) === "object") {
      setCities([...cities.filter((c) => c.id !== card.data.id), card.data]);
    } else {
      alert("Ciudad no encontrada");
    }
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
