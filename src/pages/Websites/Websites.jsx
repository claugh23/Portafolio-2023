import React from "react";
import { Container, Row, Col, Card, Badge, Accordion, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import website1 from "../../assets/websites/web1.png";
import website2 from "../../assets/websites/web2.png";
import website3 from "../../assets/websites/web3.png";
import website4 from "../../assets/websites/web4.png";
import website5 from "../../assets/websites/web5.png";
import website6 from "../../assets/websites/web6.png";
import { useNavigate, useNavigation } from "react-router-dom";

export const Websites = () => {

  const navigator = useNavigate();

  const loadWeb1 = () => {
    navigator("https://tickets-support-app.netlify.app/TicketsAppLogin");
  }


  return (
    <div>
      <Container className="mt-4">

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Tickets Support App</Accordion.Header>
            <Accordion.Body>
              <Card>

                <Card.Body>
                  <Card.Text>
                    <img src={website5} className="img-fluid" alt="" srcset="" />
                    <a className="btn btn-info mt-2 mb-2" href="https://tickets-support-app.netlify.app/TicketsAppLogin" target="blank" style={{ color: "black" }}>Visitar Sitio</a>

                    <p className="text-justify">
                      Este sitio web fue desarrollado como una iniciativa de automatizacion de procesos de tickets de soporte tecnico de los cliente internos
                      para el colegio Marian Baker. el sistema en un desarrollo web desde 0 bajo la arquitectura de desarrollo MVC aplicado con Angular
                      y utilizando un servidor API Rest con asp net core 6.0

                    </p>
                    <ul>
                      <li>Crear nueva cuenta e iniciar sesion</li>
                      <li>Crear tickets bajo la sesion actual</li>
                      <li>Consultar el estado de los tickets</li>
                      <li>Consultar los inventarios actuales y filtrar por categoria</li>
                      <li>Panel de administracion</li>
                      <li>Creacion y control de inventarios</li>
                      <li>Gestion de Tickets</li>
                      <li>Control total de usuarios internos</li>
                      <li>Bitacoras del sistema en general</li>
                      <li>Envios de correo electronico a usuarios del sistema</li>

                    </ul>
                    <hr />
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Angular
                    </Badge>
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Asp Net Core 6.0
                    </Badge>
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Bootstrap
                    </Badge>
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Mongo Db
                    </Badge>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Marian Baker School Site</Accordion.Header>
            <Accordion.Body>
              <Card>

                <Card.Body>
                  <Card.Text>
                    <img src={website4} className="img-fluid" alt="" srcset="" />
                    <a className="btn btn-info mt-2 mb-2" href="https://mbs-webpage-2021.netlify.app/" target="blank" style={{ color: "black" }}>Visitar Sitio</a>

                    <p className="text-justify">
                      Este sitio web fue desarrollado como una iniciativa de mejora sobre la pagina actual del colegio Marian Baker, en donde se pretendia
                      darle una nueva imagen a la institucion en internet y posicionamiento web en general con una mantenibilidad mas facil con capacidad
                      de mejora a largo plazo

                    </p>

                    <hr />
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Angular
                    </Badge>

                    <Badge pill variant="info" className="mr-2 mb-2">
                      Bootstrap
                    </Badge>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Somos Goes Ulacit Site</Accordion.Header>
            <Accordion.Body>
              <Card>

                <Card.Body>
                  <Card.Text>
                    <img src={website6} className="img-fluid" alt="" srcset="" />
                    <a className="btn btn-info mb-2" href="https://somosgoesulacit.netlify.app/" target="blank" style={{ color: "black" }}>Visitar Sitio</a>

                    <p className="text-justify">
                      Este sitio web fue desarrollado como un proyecto interno para el gobierno estudiantil de la Ulacit, durante el periodo 2021-2022, en conjunto
                      con miembros de la facultad de Ingenieria Informatica y la junta directiva del partido.

                    </p>

                    <hr />
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Angular
                    </Badge>

                    <Badge pill variant="info" className="mr-2 mb-2">
                      Bootstrap
                    </Badge>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Tico Net Games App</Accordion.Header>
            <Accordion.Body>
              <Card>

                <Card.Body>
                  <Card.Text>
                    <img src={website2} className="img-fluid" alt="" srcset="" />
                    <a className="btn btn-info mb-2 mt-2" href="https://ticonetgamesulacit.netlify.app/" target="blank" style={{ color: "black" }}>Visitar Sitio</a>

                    <p className="text-justify">
                      Este sitio web fue desarrollado como parte del proyecto final para el curso de diseño de software, este sitio simula una tienda en linea
                      de videojuegos a manera de prototipo como si fuera Steam, Epic Games, Ubisoft etc, fue desarrollado con Angular 14 e implementa un API Rest
                      con Spring Boot y Mongo DB como base de datos, algunas funciones que implementa son:

                    </p>
                    <ul>
                      <li>Crear nueva cuenta e iniciar sesion</li>
                      <li>Ver los juegos en un catalogo</li>
                      <li>Ver el perfil de usuario y editar la informacion personal</li>
                      <li>Comprar un juego seleccionado y tener un carrito de compras</li>
                      <li>Panel Administrativo General</li>
                      <li>Gestion de cuentas de clientes en general</li>
                      <li>Gestion de catalogos de juegos</li>
                    </ul>
                    <hr />
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Angular
                    </Badge>
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Spring Boot
                    </Badge>
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Bootstrap
                    </Badge>
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Mongo Db
                    </Badge>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>All on Six Costa Rica</Accordion.Header>
            <Accordion.Body>
              <Card>

                <Card.Body>
                  <Card.Text>
                    <img src={website3} className="img-fluid" alt="" srcset="" />
                    <a className="btn btn-info mb-2 mt-2" href="https://www.allonsixcostarica.com/" target="blank" style={{ color: "black" }}>Visitar Sitio</a>

                    <p className="text-justify">
                      Este sitio web fue desarrollado de manera freelance para un consultorio odontologico en Sabana Norte, este es un sitio informativo para potenciales clientes
                      que necesiten obtener informacion sobre la clinica, e incluye un formulario de contacto para solicitar informacion en general.

                    </p>
                    <hr />
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Angular
                    </Badge>

                    <Badge pill variant="info" className="mr-2 mb-2">
                      Bootstrap
                    </Badge>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Fut Tico Canchas App</Accordion.Header>
            <Accordion.Body>
              <Card>

                <Card.Body>
                  <Card.Text>
                    <img src={website1} className="img-fluid" alt="" srcset="" />
                    <a className="btn btn-info mb-2 mt-2" href="https://fut-tico-canchas-v1.netlify.app/" target="blank" style={{ color: "black" }}>Visitar Sitio</a>

                    <p className="text-justify">
                      Esta aplicacion, actualmente esta en desarrollo, pero el proposito es que las personas que quieran organizar un partido de futbol y no 
                      tenga cancha, pueden buscar y reservar la cancha mas cerca en su localidad y puedan gestionar la solicitud de manera automatica, este app 
                      implementa React JS, Api rest con Spring Boot y bases de datos MongoDB, algunas de las funciones a implementar son:
                    </p>
                    <ul>
                      <li>Crear cuenta e iniciar sesion</li>
                      <li>Gestion de cuenta personal general</li>
                      <li>Ver canchas actuales</li>
                      <li>Buscar canchas actuales y filtrar por categorias como tipo de juego o localizacion</li>
                      <li>Creacion y gestion de reservas a las canchas</li>
                      <li>Gestionar y organizar torneo privados o publicos</li>
                     
                    </ul>
                    <hr />
                    <Badge pill variant="info" className="mr-2 mb-2">
                      React Js
                    </Badge>
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Spring Boot
                    </Badge>
                    <Badge pill variant="info" className="mr-2 mb-2">
                      React Bootstrap
                    </Badge>
                    <Badge pill variant="info" className="mr-2 mb-2">
                      Mongo Db
                    </Badge>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};
