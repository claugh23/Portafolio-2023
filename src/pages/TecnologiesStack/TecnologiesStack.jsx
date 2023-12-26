import React from "react";
import { Container, Row, Card, Col, ListGroup } from "react-bootstrap";
import contentStack from "../../utils/contents.json";
import iconReact from "../../assets/icons/react.png";
import iconAngular from "../../assets/icons/angular.png";
import iconHtml from "../../assets/icons/html-5.png";
import iconCss from "../../assets/icons/css-3.png";
import iconJs from "../../assets/icons/js.png";
import iconJava from "../../assets/icons/Java.png";
import iconCsharp from "../../assets/icons/cSharp.png";
import iconPython from "../../assets/icons/python.png";
import iconAsp from "../../assets/icons/asp1.png";
import iconSpring from "../../assets/icons/springboot.png";
import iconMysql from "../../assets/Databases/mysql.png";
import iconmsserver from "../../assets/Databases/sqlserver.png";
import iconmongo from "../../assets/Databases/mongo.jpg";
import iconfirebase from "../../assets/Databases/firebase.jpg";
import iconcasandra from "../../assets/Databases/cassandra.png";
import iconaws from "../../assets/Cloud/aws.png";
import iconazure from "../../assets/Cloud/azure.jpg";
import iconclever from "../../assets/Cloud/clever.jpg";
import iconheroku from "../../assets/Cloud/heroku.png";
import icongit from "../../assets/Cloud/git.png";

export const TecnologiesStack = () => {

  return (
    <Container >
      <h2 className="text-white mt-4">Stack Tecnológico</h2>


      <Col className="mb-5">
        <Card>
          <Card.Header>{contentStack.home.skills.frontend.titulo}</Card.Header>
          <Card.Body>
            <Card.Text>
              <Row >
                <Col ><img src={iconHtml} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconCss} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconJs} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconReact} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconAngular} alt="" srcset="" height={"auto"} width={50} /></Col>
              </Row>
              <br />
              <ListGroup>
                {contentStack.home.skills.frontend.stack.map(skill => {
                  return (
                    <ListGroup.Item>{skill} </ListGroup.Item>
                  )
                })}

              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>
      <Col className="mb-5">
        <Card>
          <Card.Header>{contentStack.home.skills.backend.titulo}</Card.Header>
          <Card.Body>
            <Card.Text>
            <Row >
                <Col ><img src={iconJava} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconCsharp} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconPython} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconAsp} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconSpring} alt="" srcset="" height={"auto"} width={50} /></Col>
              </Row>
              <br />
              <ListGroup>
                {contentStack.home.skills.backend.stack.map(skill => {
                  return (
                    <ListGroup.Item>{skill}</ListGroup.Item>
                  )
                })}

              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>
      <Col className="mb-5">
        <Card>
          <Card.Header>{contentStack.home.skills.databases.titulo}</Card.Header>
          <Card.Body>
            <Card.Text>
            <Row >
            <Col ><img src={iconmsserver} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconMysql} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconmongo} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconfirebase} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconcasandra} alt="" srcset="" height={"auto"} width={50} /></Col>
              </Row>
              <br />
              <ListGroup>
                {contentStack.home.skills.databases.stack.map(skill => {
                  return (
                    <ListGroup.Item>{skill}</ListGroup.Item>
                  )
                })}

              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>
      <Col className="mb-5">
        <Card>
          <Card.Header>{contentStack.home.skills.automatizacion.titulo}</Card.Header>
          <Card.Body>
            <Card.Text>
            <Row >
                <Col ><img src={iconaws} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconazure} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconclever} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconheroku} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={icongit} alt="" srcset="" height={"auto"} width={50} /></Col>
              </Row>
              <br />
              <ListGroup>
                {contentStack.home.skills.automatizacion.stack.map(skill => {
                  return (
                    <ListGroup.Item>{skill}</ListGroup.Item>
                  )
                })}

              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>
       
       
    </Container>
  );
};
