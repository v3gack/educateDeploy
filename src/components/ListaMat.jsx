import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import stylesLG from "./HomePage.module.css";
function Notes(){
    const[notes, setNotes] = useState([{
        title: '', 
        description: '',
        link: ''
    }])
    useEffect(() =>{
        fetch("/notes").then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })
    return(
        <div className='container'>
            <h1 className={stylesLG.titulo}>Materiales</h1>
            {notes.map(note =><div className={stylesLG.admin}>
                <h1 className={stylesLG.titmat}>Material: {note.title}</h1>
                <h2>Descripción: {note.description}</h2>
                <h3>Link de Documento: <a href={note.link} target="_blank" >presione aqui </a></h3>
            </div>

            )}

        </div>
    )
}
export default Notes;