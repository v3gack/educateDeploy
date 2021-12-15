import React from "react";
import styles from "./video.module.css"
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function JuegoMultP(){
    let history = useHistory();
   return  (<div><br/><br/>
       <h1 className = {styles.title}>NIVEL PLANTA - MULTIPLICACIÓN</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe title="Suma y Elige" text-align = "center" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://wordwall.net/es/embed/ebe15e088f5e487cb397830db556d25e?themeId=1&templateId=35" ></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecMNP");
                 }         
             }>
                🠔atrás
            </button>
            
    </div> 
    );
}