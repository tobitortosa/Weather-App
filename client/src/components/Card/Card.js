import React from "react";
import s from "./Card.module.css";

export default function Card({ min, max, name, img, onClose, id }) {

  return (
    <div className={s.container}>
      <div className={s.cardContainer}>
      <button id={s.closeCard} onClick={() => onClose(id)}>X</button>
        <h5>{name}</h5>
        <div className={s.elseContainer}>
          <div className={s.temps}>
            <div className={s.minMax}>
              <h4>Max</h4>
              <h4>Min</h4>
            </div>
            <div className={s.numbers}>
              <h4>{`${max}°`}</h4>
              <h4>{`${min}°`}</h4>
            </div>
          </div>
          <div className={s.img}>
            <img  src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
          </div>
        </div>
      </div>
    </div>
  );
}
