import React from "react";
import s from "./Card.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Card({
  min,
  max,
  name,
  img,
  onClose,
  id,
  clouds,
  latitud,
  longitud,
  wind,
}) {
  const [modal, setModal] = useState(false);

  return (
    <div
      onClick={() => setModal(!modal)}
      className={modal ? s.containerModal : s.container}
    >
      <div className={s.cardContainer}>
        <button id={s.closeCard} onClick={() => onClose(id)}>
          ✖
        </button>
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
            <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} />
          </div>
        {!modal && <p id={s.flecha}>🡇</p>}
        </div>
      </div>
      {modal && (
        <Modal
          clouds={clouds}
          wind={wind}
          latitud={latitud}
          longitud={longitud}
        />
      )}
    </div>
  );
}
