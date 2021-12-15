import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import styles from "./Login.module.css";
import { useHistory } from "react-router";

const baseUrl="http://localhost:3002/usuarios";
const cookies = new Cookies();


export class Login extends Component /*export function*/ {
    state={
        form:{
            username: '',
            password: ''
        }
    }
    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenid@ ${respuesta.nombre}`);
                window.location.href="./Menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./Menu"; 
            /*lo comente por que me da error al entrar sin iniciar sesion */ 
        }
    }
    

    render() {
        
        return (  
     <div> 
      <button className={styles.btnAtras} onClick={()=>  window.location.href="./"}>🠔atrás</button>                   
    <div className={styles.containerPrincipal}>
        
        <div className={styles.containerSecundario}>
        <div className={styles.logoPagina}>
            
            </div> 
          <div className={styles.formgroup}>
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className={styles.formcontrol}
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className={styles.formcontrol}
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className={styles.btnInicio} onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
      </div> 
      
        );
    }
}
/*export default Login;  */
