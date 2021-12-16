import React, {useState} from "react";
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
import stylesLG from "./HomePage.module.css";
import swal from 'sweetalert';
function CreateNote(){
    const [input, setInput] = useState({
        title: '',
        description: '',
        link: ''
    })
    const alertaError = () =>{
        swal({
            title: "ERROR",
            text: "no se pudo subir el archivo debido a que los campos llenados no cumplen con los requisitos",
            icon: "error" 
        });
    }
    const mostrarAlerta = () =>{
        swal({
            title: "AGREGADO",
            text: "Se agrego con exito",
            icon: "success"  
        });
    }
    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleClick(event){
        
       if( /[!@"*-_#$%&\/()]/.test(input.title)){
        alertaError();
       
       }else if(input.title.length >= 4 && input.description.length>=10 && input.link.length>=20 && /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(input.link) ){
        
        mostrarAlerta();
        event.preventDefault();
        const newNote ={
            title: input.title,
            description: input.description,
            link: input.link
        }
        axios.post('http://localhost:4000/create', newNote)
        }else{
            alertaError();
        }
    }
   
    return (<div >
        <h1 className={stylesLG.titulo}>Crear Material</h1>
        <div className={stylesLG.formu}>
            <form >
                <div className={stylesLG.espacio}>
                    <input onChange={handleChange} name="title" value={input.title}autoComplete="off" data-validation="alphanumeric" placeholder="Título" maxLength="20" minLength="4" pattern="[A-Za-z0-9_-]" ></input>
                </div>
                <div className={stylesLG.espacio}>
                    <textarea onChange={handleChange} name="description" value={input.description} autoComplete="off" placeholder="Descripción" maxLength="50" minLength="10" ></textarea>
                </div>
                <div className={stylesLG.espacio}>
                    <input type="url" onChange={handleChange} name="link" pattern=".+\.com" value={input.link} autoComplete="off" placeholder="Enlace del documento"></input>
                </div>

                <button type="submit" className={stylesLG.boton} onClick={handleClick} >Enviar</button>
            </form>
        </div>
    </div>)
}
export default CreateNote;