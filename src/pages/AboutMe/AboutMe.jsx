/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import { Row, Card, Col, Container } from "react-bootstrap";
import { FaBriefcase, FaLaptopCode, FaCloud } from 'react-icons/fa';

export const AboutMe = () => {
  const experienciaLaboral = [
    {
      puesto: "IT Support Manager and Software Developer",
      empresa: "Marian Baker School",
      fecha: "January 2019 - October 2021",
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
      puesto: "Java full stack developer",
      empresa: "IBM Consulting Costa Rica",
      fecha: "November 2021 - Present",
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
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "JAVA",
    "C#",
    "REACT JS",
    "SPRING BOOT",
    "ASP NET CORE",
    "MS SQL SERVER",
    "MYSQL",
    "MONGO DB",
    "GIT",
    "AZURE",
    "AWS",
    "CICD"
  ];

  return (
    <Container className="generalContainer my-5">
      <Row className="text-center mb-4">
        <Col>
          <h2 className="text-primary">Current Experience</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
             
              {experienciaLaboral.map((experiencia, index) => (
                <Card key={index} className="mb-4 border-primary">
                  <Card.Body>
                    <Card.Title className="text-success">{experiencia.puesto}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {experiencia.empresa}
                    </Card.Subtitle>
                    <Card.Text><strong>{experiencia.fecha}</strong></Card.Text>
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
      <Row className="mt-5">
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-secondary"><FaLaptopCode /> Skills</Card.Title>
              <Row>
                {habilidades.map((habilidad, index) => (
                  <Col key={index} xs={6} md={4} className="mb-2">
                    <Card className="border-light">
                      <Card.Body className="text-center">
                        <Card.Text>{habilidad}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
