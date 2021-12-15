import React from "react";
import Juego from "../images/juego1.png";
import Practica from "../images/practica.png";
import Video from "../images/video1.png";

import stylesDiv from "./LecDivision.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {useHistory} from "react-router-dom";

export function LecDNP(){
  let history = useHistory();
    return (
    <Router>
    <ul className = {stylesDiv.niveles}>
        <li>
        <Link className = {stylesDiv.sub} to ="/division" onClick ={
                 ()=>{
                     history.push("/division");
                 }         
             }>
          Nivel Semilla 
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.sub} to ="/LecDNB" onClick ={
                 ()=>{
                     history.push("/LecDNB");
                 }         
             }>
          Nivel Brote
        </Link>
        </li>

        <li>
        <Link className = {stylesDiv.semilla} to ="/LecDNP" onClick ={
                 ()=>{
                     history.push("/LecDNP");
                 }         
             }>
          Nivel Planta
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.sub} to ="/LecDNA" onClick ={
                 ()=>{
                     history.push("/LecDNA");
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
          
          <Link to = "/JuegoDivP" onClick ={
                 ()=>{
                     history.push("/JuegoDivP");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Juego} alt="juego" />
          </Link>
        </li>

        <li>
          <Link to="/PDP" onClick={
            ()=>{
              history.push("/PDP");
            }
          }>
            <img className={stylesDiv.ImgStyle} src={Practica} alt="practicas" />
          </Link>
        </li>

        <li>
          <Link to="/NPDV1" onClick ={
                 ()=>{
                     history.push("/NPDV1");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Video} alt="video" />
          </Link>
        </li>
      </ul>
  </Router>
  );
}