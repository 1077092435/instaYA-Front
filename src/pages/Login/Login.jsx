import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./Login.css";


export const Login = () => {
  const iniciarSesion = (e) => {
    e.preventDefault();
    const formulario = {};
    formulario.nombreUsuario = document.getElementById("usuario").value;
    formulario.contraseña = document.getElementById("contraseña").value;
    console.log(formulario);
  };
  const redireccionRegistro = () => {
    window.location.href = "/registro";
  };
  return (
    <>
      <div className="login-box">
        <a href="/">
          <h2>Iniciar Sesíon</h2>
        </a>

        <form>
          <div className="user-box">
          <CustomInput placeholder="Usuario" type="text" name="usuario" id="usuario"/>
          </div>
          <div className="user-box">
          <CustomInput placeholder="Contraseña" type="password" name="contraseña" id="contraseña"/>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <CustomButton className="col-md-10" type="submit" placeholder="Iniciar Sesion" onclick={iniciarSesion}/>
          </a>

        </form>
          <h6 className="d-flex m-2">¿No tienes una cuenta? <CustomButton placeholder="Registrarme" onclick={redireccionRegistro}/></h6>
      </div>
    </>
  );
};
