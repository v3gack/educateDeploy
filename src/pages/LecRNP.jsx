import React from "react";
import Juego from "../images/juego1.png";
import Practica from "../images/practica.png";
import Video from "../images/video1.png";

import stylesDiv from "./LecDivision.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {useHistory} from "react-router-dom";

export function LecRNP(){
  let history = useHistory();
    return (
    <main>
    <ul className = {stylesDiv.niveles}>
        <li>
        <Link className = {stylesDiv.sub} to ="/resta" onClick ={
                 ()=>{
                     history.push("/resta");
                 }         
             }>
          Nivel Semilla 
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.sub} to ="/LecRNB" onClick ={
                 ()=>{
                     history.push("/LecRNB");
                 }         
             }>
          Nivel Brote
        </Link>
        </li>

        <li>
        <Link className = {stylesDiv.semilla} to ="/LecRNP" onClick ={
                 ()=>{
                     history.push("/LecRNP");
                 }         
             }>
          Nivel Planta
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.sub} to ="/LecRNA" onClick ={
                 ()=>{
                     history.push("/LecRNA");
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
          
          <Link to = "/JuegoRestaP" onClick ={
                 ()=>{
                     history.push("/JuegoRestaP");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Juego} alt="juego" />
          </Link>
        </li>
        <li>
          <Link to="/PRP" onClick={
            ()=>{
              history.push("/PRP");
            }
          }>
            <img className={stylesDiv.ImgStyle} src={Practica} alt="practicas" />
          </Link>
        </li>
        <li>
          <Link to="/NPRV1" onClick ={
                 ()=>{
                     history.push("/NPRV1");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Video} alt="video" />
          </Link>
        </li>
      </ul>
      </main>
  );
}