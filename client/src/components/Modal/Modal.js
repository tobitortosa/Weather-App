import React from "react";
import s from "./Modal.module.css";

export default function Modal({ clouds, latitud, longitud, wind }) {
  return (
    <div className={s.container}>
      <ul>
        <li>Clouds : {clouds}</li>
        <li>Latitude : {latitud}</li>
        <li>Lenght : {longitud}</li>
        <li>Wind : {wind}</li>
      </ul>
    </div>
  );
}
