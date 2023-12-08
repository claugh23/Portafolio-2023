// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";

export const TecnologiesStack = () => {
  const tecnologias = [
    {
      nombre: "Tecnologia Frontend",
      descripcion: ["Html", "Css", "Javascript", "React JS", "Wordpress"],
    },
    {
      nombre: "Tecnologias Backend",
      descripcion: ["Java", "C#", "Python", "Asp net core", "Spring Boot"],
    },
    {
      nombre: "Base de Datos",
      descripcion: [
        "MongoDB",
        "Firebase",
        "Cassandra",
        "MySQL",
        "MS Sql Server",
      ],
    },
    {
      nombre: "Computacion en la nube",
      descripcion: ["Amazon Web Services", "Azure", "Red Hat"],
    },
    {
      nombre: "Integracion Continua",
      descripcion: ["Github", "Gitlab", "Heroku", "Clever Cloud", "Firebase"],
    },
    {
      nombre: "Contenedores Virtuales",
      descripcion: ["Docker","Azure Container Instances"],
    },
    // Puedes agregar más tecnologías según sea necesario
  ];

  return (
    <Container>
      <h2 className="text-white mt-4">Stack Tecnológico</h2>
      {tecnologias.map((tecnologia, index) => (
        <Row key={index} className="mb-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{tecnologia.nombre}</Card.Title>
                <ul>
                  {tecnologia.descripcion.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
