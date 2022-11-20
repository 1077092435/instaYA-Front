import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavbarComp from "../../components/NavbarComp/NavbarComp.jsx";
import "../../pages/Home/Home.css";




export class Home extends Component {
  render() {
    return (
      <div>
        
        <NavbarComp />
        
        <Container>
       
        <img src="../video.gif" width="100%" height="600px" />
          <Row className="justify-content-md-center">

            
            <div class="multi-search-bar">
               <div class="search-bar-field">
                  <span>Consultar</span>
               </div>
               
               <div class="search-bar-field number">
                  <input type="text" class="form-control" id="trackNumber" placeholder="Ingresa el # de guía"/>
               </div>
               <div class="search-bar-field search-bar-btn">
                <a href="listadoOrdenes">

                  <button class="search-bar-consult" ><img src="../mayorque.png" width="100%" height="100%" alt="Consultar"/></button>
                </a>
               </div>
            </div>
           
          </Row>
        </Container>
        
      </div>
    );
  }
}
