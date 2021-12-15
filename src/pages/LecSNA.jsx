import React from "react";
import Juego from "../images/juego1.png";
import Practica from "../images/practica.png";
import Video from "../images/video1.png";

import stylesDiv from "./LecDivision.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {useHistory} from "react-router-dom";

export function LecSNA(){
  let history = useHistory();
    return (
    <Router>
    <ul className = {stylesDiv.niveles}>
        <li>
        <Link className = {stylesDiv.sub} to ="/suma" onClick ={
                 ()=>{
                     history.push("/suma");
                 }         
             }>
          Nivel Semilla 
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.sub} to ="/LecSNB" onClick ={
                 ()=>{
                     history.push("/LecSNB");
                 }         
             }>
          Nivel Brote
        </Link>
        </li>

        <li>
        <Link className = {stylesDiv.sub} to ="/LecSNP" onClick ={
                 ()=>{
                     history.push("/LecSNP");
                 }         
             }>
          Nivel Planta
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.semilla} to ="/LecSNA" onClick ={
                 ()=>{
                     history.push("/LecSNA");
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
          
          <Link to = "/JuegoSumaA" onClick ={
                 ()=>{
                     history.push("/JuegoSumaA");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Juego} alt="juego" />
          </Link>
        </li>
        <li>
          <Link to="/PSA" onClick={
            ()=>{
              history.push("/PSA");
            }
          }>
            <img className={stylesDiv.ImgStyle} src={Practica} alt="practicas" />
          </Link>
        </li>
        <li>
          <Link to="/NASV1" onClick ={
                 ()=>{
                     history.push("/NASV1");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Video} alt="video" />
          </Link>
        </li>
      </ul>
  </Router>
  );
}