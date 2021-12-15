import React from "react";
import styles from "./video.module.css"
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function JuegoMultS(){
    let history = useHistory();
   return  (<div>
       <br/><br/>
       <br/><br/>
       <h1 className = {styles.title}>NIVEL SEMILLA - MULTIPLICACIÓN</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe title="Suma y Elige" text-align = "center" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://wordwall.net/es/embed/8a79bda06a3d419c8a3ac47710d5c96c?themeId=2&templateId=25" ></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/multiplicacion");
                 }         
             }>
                🠔atrás
            </button>
            
    </div> 
    );
}