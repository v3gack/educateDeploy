import React from "react";
import styles from './video.module.css';
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function NAMV2(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>NIVEL ÁRBOL - MULTIPLICACIÓN</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe text-align = "center" src="https://www.youtube.com/embed/Ma7qMYzwmJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecMNA");
                 }         
             }>
                🠔atrás
            </button>
            <button className = {styles.videoAnterior} onClick ={
                 ()=>{
                     history.push("/NAMV1");
                 }         
             }>
                Video Anterior
            </button> 
            <button className = {styles.videoSiguiente} onClick ={
                 ()=>{
                     history.push("/NAMV3");
                 }         
             }>
                Video Siguiente
            </button>
    </div> 
    );
}