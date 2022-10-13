import React from "react";
import s from "./Nav.module.css";
import { useState } from "react";

export default function Nav({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");
  };


  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <nav className={s.container}>
      <a href="/" id={s.link}>
        <div className={s.logo}>
          <div id={s.logoImg}></div>
          <h4>Weather App</h4>
        </div>
      </a>

      <form className={s.searchBar} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="Ciudad..."
        />
        <button onClick={handleSubmit}>Agregar</button>
      </form>
    </nav>
  );
}
