import React, { Fragment, useState, useRef, useEffect } from "react";
import "./listadoOrdenes.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Offcanvas,
  Row
} from "react-bootstrap";
import "../../components/NavbarComp/NavbarComp.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from 'react-client-session';

export function ListadoOrdenes() {
  const buscarguia = (e) =>  {
      console.log("hola Guia!!")
      const guia={};
      guia.id_guia= document.getElementById("trackNumber").value;
      guia.username="geraldine";
      console.log(guia);
  }
  const cerrar_session=()=>{
    ReactSession.remove("username");
    window.location.href = "/"
  }

  if(ReactSession.get("username")){
    console.log("existe usuario", ReactSession.get("username"))
    
  }else{
    window.location.href = "/login"
    
  }

  return (

    <div>
      {["md"].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 navbarInterno">
          <Container fluid>
            <Navbar.Brand href="#" className="LogoInstaya">
              InstaYA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-end ">
                <Nav className="justify-content-end ">
                  <Nav.Link href="/" className="items_menu">
                    Inicio
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                  <Nav.Link href="/registro-paquete" className="items_menu">
                    Registrar solicitud
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                  <Nav.Link href="/seguimiento" className="items_menu">
                    Seguimiento de solicitud
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                  <Nav.Link onClick={cerrar_session} className="items_menu">
                    Cerrar sesión
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
              <div className='container seguimiento'>
        <blockquote className="blockquote text-center">

          <div className='container my-5 pb-3'>
            <h1 className="guia">Guia # ...</h1>
          </div>
          <Row className="justify-content-md-center">

            
            <div class="multi-search-bar" style={{position: "inherit"}}>
               <div class="search-bar-field">
                  <span>Consultar</span>
               </div>
               
               <div class="search-bar-field number">
                  <input type="text" class="form-control" id="trackNumber" placeholder="Ingresa el # de guía"/>
               </div>
               <div class="search-bar-field search-bar-btn">
                <a href="listadoOrdenes">

                  <button class="search-bar-consult" ><img src="../mayorque.png" width="100%" height="100%" alt="Consultar" onClick={buscarguia}/></button>
                </a>
               </div>
            </div>
           
          </Row>
          {/* <div className='container py-5 parrafo'>
            <p>Ingrese en este campo el numero de su solicitud</p>
            <input type="text" placeholder="Rastrear solicitud..." />
            <button className="btn btn-primary ms-3">Buscar</button>
          </div> */}
          
          <div className='container px-auto py-5'>
          <table className="table">
            <thead className="table-active">
              <tr>
                <th scope='col'>Numero Solicitud</th>
                <th scope='col'>Fecha de solicitud</th>
                <th scope='col'>Ciudad Origen</th>
                <th scope='col'>Ciudad Destino</th>
                <th scope='col'>Estado</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope='row'className="fw-normal parrafo2">1035236598</th>
                  <th className="fw-normal parrafo2">22/09/2022</th>
                  <th className="fw-normal parrafo2">Medellin</th>
                  <th className="fw-normal parrafo2">Bogota</th>
                  <th className="fw-normal parrafo2">Completado</th>
                </tr>
            </tbody>
          </table>
          </div>
          {/* <div className='container my-5 parrafo'>
          <p>Su envio esta en proceso de entrega, recuerde que puede cancelar su solicitud hasta 22 horas despues de creada la misma</p>
          <button className='btn btn-danger'>Cancelar solicitud</button>
          </div> */}
        </blockquote>
      </div>
    </div>
  );
}
