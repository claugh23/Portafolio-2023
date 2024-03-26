import React from "react";
import "./index.css";
import { Col, Container, Row, Image, Button, Badge } from "react-bootstrap";
import ProfileImage from "../../assets/images/ProfilePhoto.jpeg";
import { useNavigate } from "react-router-dom";
import contents from "../../utils/contents.json";
import softDevelopment from "../../assets/images/software-development-specialist.jpg";
export const Home = () => {
  const cloud = ["Aws", "Azure", "Clever Cloud"];
  const appNavigator = useNavigate();

  const loadProfile = () => {
    appNavigator("/Perfil");
  };
  return (
    <div className="homePage">
      <Container className="">
        <Row className="mx-auto">
          <Col lg={12} md={12}>
            <h1 className="text-white text-center">{contents.home.titulo}</h1>
            <img
             src={ProfileImage}
              alt="Profile"
              className="img-fluid rounded-circle mx-auto d-flex"
              width={350}
            />
         
            <br />
            <p className="text-white text-center">{contents.home.carrera}</p>
            <Button variant="primary mt-5 mb-3 mx-auto" onClick={loadProfile}>
              Ver mi perfil
            </Button>
            <p className="text-white" style={{ textAlign: "justify" }}>
              {contents.home.descripcion}
            </p>

            <br />
            <h2 className="text-white">
              {contents.home.skills.frontend.titulo}
            </h2>
            <div className="d-flex flex-wrap">
              {contents.home.skills.frontend.stack.map((tech, index) => (
                <Badge key={index} pill variant="info" className="mr-2 mb-2">
                  {tech}
                </Badge>
              ))}
            </div>
            <br />
            <h2 className="text-white">
              {contents.home.skills.backend.titulo}
            </h2>
            <div className="d-flex flex-wrap">
              {contents.home.skills.backend.stack.map((innovation, index) => (
                <Badge key={index} pill variant="success" className="mr-2 mb-2">
                  {innovation}
                </Badge>
              ))}
            </div>
            <br />
            <h2 className="text-white">
              {contents.home.skills.databases.titulo}
            </h2>
            <div className="d-flex flex-wrap">
              {contents.home.skills.databases.stack.map((innovation, index) => (
                <Badge key={index} pill variant="success" className="mr-2 mb-2">
                  {innovation}
                </Badge>
              ))}
            </div>
            <br />
            <h2 className="text-white">{contents.home.skills.cloud.titulo}</h2>
            <div className="d-flex flex-wrap">
              {contents.home.skills.cloud.stack.map((innovation, index) => (
                <Badge key={index} pill variant="success" className="mr-2 mb-2">
                  {innovation}
                </Badge>
              ))}
            </div>
          </Col>
          <hr />
          <Col lg={6} md={12} className="mt-4 mt-lg-0">
            <h2 className="text-white">Porque es importante la automatizacion de procesos</h2>
            <br />
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/lb70jmD05-U"
              title="Entendiendo el proceso de automatización de la información - Udla en línea"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
