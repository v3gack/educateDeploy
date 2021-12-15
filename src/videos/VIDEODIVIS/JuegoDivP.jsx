import React from "react";
import styles from "./video.module.css"
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function JuegoDivP(){
    let history = useHistory();
   return  (<div><br/><br/>
       <h1 className = {styles.title}>NIVEL PLANTA - DIVISIÓN</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe title="Suma y Elige" text-align = "center" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://wordwall.net/es/embed/2d74ab69a327448c944e8b57b1530a75?themeId=23&templateId=5" ></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecDNP");
                 }         
             }>
                🠔atrás
            </button>
            
    </div> 
    );
}