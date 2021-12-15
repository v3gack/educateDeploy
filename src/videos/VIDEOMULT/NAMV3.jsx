import React from "react";
import styles from './video.module.css';
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function NAMV3(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>NIVEL ÁRBOL - MULTIPLICACIÓN</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe text-align = "center" src="https://www.youtube.com/embed/lgPs3UxM2kU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                     history.push("/NAMV2");
                 }         
             }>
                Video Anterior
            </button> 
            {/* <button className = {styles.videoSiguiente} onClick ={
                 ()=>{
                     history.push("/NAMV2");
                 }         
             }>
                Video Siguiente
            </button> */}
    </div> 
    );
}