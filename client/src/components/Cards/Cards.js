import React from "react";
import Card from "../Card/Card";
import s from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  return (
    <div className={s.container}>
      {cities &&
        cities.map((c) => (
          <Card key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          />
        ))}
    </div>
  );
}