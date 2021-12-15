import React from "react";
import styles from "./video.module.css"
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function JuegoSumaB(){
    let history = useHistory();
   return  (<div><br/><br/>
       <h1 className = {styles.title}>NIVEL BROTE - SUMA</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe title="Suma y Elige" text-align = "center" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://wordwall.net/es/embed/53f86e57ffdd4f689f07825475617f5f?themeId=21&templateId=69" ></iframe>
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
            
    </div> 
    );
}