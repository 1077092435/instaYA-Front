import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Registro} from "./pages/Registro/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import {Home} from "./pages/Home/Home";
import {ListadoOrdenes} from "./pages/listadoOrdenes/listadoOrdenes";
import {Formulario} from "./pages/registroPaquete/registroPaquete";

export const App = () => {

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/listadoOrdenes" element={<ListadoOrdenes />} />
            <Route path="/registro-paquete" element={<Formulario />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }


