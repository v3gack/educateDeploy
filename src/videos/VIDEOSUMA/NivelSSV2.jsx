import React from "react";
import styles from './video.module.css';
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function NivelSSV2(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>NIVEL SEMILLA - SUMA</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe text-align = "center" src="https://www.youtube.com/embed/br4Z-HZtIQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/suma");
                 }         
             }>
                🠔atrás
            </button>
             <button className = {styles.videoAnterior} onClick ={
                 ()=>{
                     history.push("/NivelSemillaSumaV1");
                 }         
             }>
                Video Anterior
            </button> 
            <button className = {styles.videoSiguiente} onClick ={
                 ()=>{
                     history.push("/NivelSSV3");
                 }         
             }>
                Video Siguiente
            </button>
    </div> 
    );
}
