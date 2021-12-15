import React from "react";
import styles from './video.module.css';
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function NBSV2(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>NIVEL BROTE - SUMA</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe text-align = "center" src="https://www.youtube.com/embed/k46QCr1GofU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecSNB");
                 }         
             }>
                🠔atrás
            </button>
            <button className = {styles.videoAnterior} onClick ={
                 ()=>{
                     history.push("/NBSV1");
                 }         
             }>
                Video Anterior
            </button> 
            <button className = {styles.videoSiguiente} onClick ={
                 ()=>{
                     history.push("/NBSV3");
                 }         
             }>
                Video Siguiente
            </button>
    </div> 
    );
}