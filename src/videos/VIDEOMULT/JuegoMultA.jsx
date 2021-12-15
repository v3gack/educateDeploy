import React from "react";
import styles from "./video.module.css"
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function JuegoMultA(){
    let history = useHistory();
   return  (<div><br/><br/>
       <h1 className = {styles.title}>NIVEL ÁRBOL - MULTIPLICACIÓN</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe title="Suma y Elige" text-align = "center" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://wordwall.net/es/embed/f5879e93f0ea41c290acfdabc06668e8?themeId=41&templateId=5" ></iframe>
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
            
    </div> 
    );
}