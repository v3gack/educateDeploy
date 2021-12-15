import React from "react";
import styles from "./video.module.css"
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function JuegoDivB(){
    let history = useHistory();
   return  (<div><br/><br/>
       <h1 className = {styles.title}>NIVEL BROTE - DIVISIÓN</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe title="Suma y Elige" text-align = "center" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://wordwall.net/es/embed/effde427b918495d9d04c95110642eed?themeId=1&templateId=5" ></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecDNB");
                 }         
             }>
                🠔atrás
            </button>
            
    </div> 
    );
}