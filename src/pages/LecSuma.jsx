import React from "react";
import Juego from "../images/juego1.png";
import Practica from "../images/practica.png";
import Video from "../images/video1.png";

import stylesDiv from "./LecDivision.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {useHistory} from "react-router-dom";

export function LecSuma(){
  let history = useHistory();
    return (
    <main>
    <div className = {stylesDiv.niveles}>
        <div>
        <Link className = {stylesDiv.semilla} to ="/suma" >
          Nivel Semilla 
        </Link>
        </div>
        <div>
        <Link className = {stylesDiv.sub} to ="/LecSNB" >
          Nivel Brote
        </Link>
        </div>

        <div>
        <Link className = {stylesDiv.sub} to ="/LecSNP" >
          Nivel Planta
        </Link>
        </div>
        <div>
        <Link className = {stylesDiv.sub} to ="/LecSNA" >
            Nivel Árbol
        </Link>
        </div>
    </div>
    <button className = {stylesDiv.botonAtras} onClick ={
                 ()=>{
                     history.push("/homepage");
                 }         
             }>
                🠔atrás
            </button>
     <div className={stylesDiv.LeccionGrid}>
        <div>
          
          <Link to = "/juegoSumaS" >
            <img className={stylesDiv.ImgStyle} src={Juego} alt="juego" />
          </Link>
        </div>
        
        <li>
          <Link to="/PSB" onClick={
            ()=>{
              history.push("/PSB");
            }
          }>
            <img className={stylesDiv.ImgStyle} src={Practica} alt="practicas" />
          </Link>
        </li>

        <div>
          <Link to="/NivelSemillaSumaV1" >
            <img className={stylesDiv.ImgStyle} src={Video} alt="video" />
          </Link>
        </div>
      </div> 
      </main>
  );
}
     
       
        
     
    