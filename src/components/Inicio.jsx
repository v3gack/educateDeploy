import React from "react";
import { useHistory } from "react-router";
import Astro from "../images/astronauta.png";
import styleInicio from "./Inicio.module.css";

export function Inicio() {
  let history = useHistory();
  return (
    <div>
      <h1 className = {styleInicio.tit}>
        EducaTe <br />
        Matemáticas de 1er Grado
      </h1>
      <div className={styleInicio.texto}>
        <img className={styleInicio.astronauta} src={Astro} alt="Astronauta" />

        <div className={styleInicio.texto2}>
        Esta página te servirá para reforzar y profundizar en el mundo de las matemáticas. 
        Aquí encontraras actividades divertidas y variadas. Entre estas te podemos ofrecer videos, practicas y juegos para que puedas estimular tus conocimientos. 
        Te invitamos a aceptar este desafío, que te ayudará en el aprendizaje de las Matemáticas.
        </div>
      </div>
      <button
        className={styleInicio.btt}
        onClick={() => {
          history.push("/homepage");
        }}
      >
        Aprende
      </button>

      <button
        className={styleInicio.btAdmin}
        onClick={() => {
          history.push("/Login");
        }}
      >
        Subir Material
      </button>      
    </div>
  );
}
