/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import { Row, Card, Col, Container } from "react-bootstrap";

export const AboutMe = () => {
  const experienciaLaboral = [
    {
      puesto: "IT Manager and Software Developer",
      empresa: "Marian Baker School",
      fecha: "Enero 2019 - Octubre 2021",
      funciones: [
        "Network infrastructure configuration and administration with Cisco AP",
        "Configuration and administration of servers with active network services and SQL Server databases.",
        "Cloud Services Management at Google",
        "Website development and maintenance with Wordpress",
        "Development of web applications for administrative functions of the company with Angular Version 11/12 and Rest API with Asp net core",
        "Maintenance of computers and continuous integration applications in the cloud",
        "Technology training for teachers",
      ],
    },
    {
      puesto: "Full Stack Developer",
      empresa: "IBM Consulting Costa Rica",
      fecha: "Noviembre 2021 - Presente",
      funciones: [
        "Front end development with html, CSS and JavaScript with React JS",
        "Web Design Solutions for Cloud Environments",
        "Testing web servers based on rest api environments such as spring boot(Java), asp net core(C#) or JavaScript",
        "Cloud Integration on Heroku, Azure, AWS Platform",
        "Database management, MySQL, SQL Server, Firebase, MongoDB",
      ],
    },
    // Puedes agregar más experiencias laborales según sea necesario
  ];

  const habilidades = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux",
    "Git",
    "Responsive Design",
  ];

  return (
    <Container className="generalContainer">
      <Row>
        <Col>
          <h2 className="text-white mt-4">Experiencia Profesional Actual</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Experiencia Laboral</Card.Title>
              {experienciaLaboral.map((experiencia, index) => (
                <Card key={index} className="mb-2">
                  <Card.Body>
                    <Card.Title>{experiencia.puesto}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {experiencia.empresa}
                    </Card.Subtitle>
                    <Card.Text>{experiencia.fecha}</Card.Text>
                    <ul>
                      {experiencia.funciones.map((funcion, i) => (
                        <li key={i}>{funcion}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    </Container>
  );
};
