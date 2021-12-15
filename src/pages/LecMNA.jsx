import React from "react";
import Juego from "../images/juego1.png";
import Practica from "../images/practica.png";
import Video from "../images/video1.png";

import stylesDiv from "./LecDivision.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {useHistory} from "react-router-dom";

export function LecMNA(){
  let history = useHistory();
    return (
    <Router>
    <ul className = {stylesDiv.niveles}>
        <li>
        <Link className = {stylesDiv.sub} to ="/multiplicacion" onClick ={
                 ()=>{
                     history.push("/multiplicacion");
                 }         
             }>
          Nivel Semilla 
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.sub} to ="/LecMNB" onClick ={
                 ()=>{
                     history.push("/LecMNB");
                 }         
             }>
          Nivel Brote
        </Link>
        </li>

        <li>
        <Link className = {stylesDiv.sub} to ="/LecMNP" onClick ={
                 ()=>{
                     history.push("/LecMNP");
                 }         
             }>
          Nivel Planta
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.semilla} to ="/LecMNA" onClick ={
                 ()=>{
                     history.push("/LecMNA");
                 }         
             }>
            Nivel Árbol
        </Link>
        </li>
    </ul>
    <button className = {stylesDiv.botonAtras} onClick ={
                 ()=>{
                     history.push("/homepage");
                 }         
             }>
                🠔atrás
            </button>
    <ul className={stylesDiv.LeccionGrid}>
        <li>
          
          <Link to = "/JuegoMultA" onClick ={
                 ()=>{
                     history.push("/JuegoMultA");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Juego} alt="juego" />
          </Link>
        </li>

        <li>
          <Link to="/PMA" onClick={
            ()=>{
              history.push("/PMA");
            }
          }>
            <img className={stylesDiv.ImgStyle} src={Practica} alt="practicas" />
          </Link>
        </li>


        <li>
          <Link to="/NAMV1" onClick ={
                 ()=>{
                     history.push("/NAMV1");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Video} alt="video" />
          </Link>
        </li>
      </ul>
  </Router>
  );
}