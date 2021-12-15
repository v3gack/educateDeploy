import React from "react";
import styles from './video.module.css';
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function NARV1(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>NIVEL ÁRBOL - RESTA</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe text-align = "center" src="https://www.youtube.com/embed/0tSnwVlDIBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecRNA");
                 }         
             }>
                🠔atrás
            </button>
            {/* <button className = {styles.videoAnterior} onClick ={
                 ()=>{
                     history.push("/NARV2");
                 }         
             }>
                Video Anterior
            </button>  */}
            <button className = {styles.videoSiguiente} onClick ={
                 ()=>{
                     history.push("/NARV2");
                 }         
             }>
                Video Siguiente
            </button> 
    </div> 
    );
}