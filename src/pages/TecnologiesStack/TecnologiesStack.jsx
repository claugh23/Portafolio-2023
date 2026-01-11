// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Card, Col, ListGroup } from "react-bootstrap";
import contentStack from "../../utils/contents.json";

import iconReact from "/assets/frontend/react.png";
import iconAngular from "/assets/frontend/angular.png";
import iconHtml from "/assets/frontend/html-5.png";
import iconCss from "/assets/frontend/css-3.png";
import iconJs from "/assets/frontend/js.png";

import iconcsharp from "/assets/backend/cSharp.png";
import iconjava from "/assets/backend/Java.png";
import iconpython from "/assets/backend/python.png";
import iconasp from "/assets/backend/asp.png";
import iconspring from "/assets/backend/springboot.png";

import iconaws from "/assets/Cloud/aws.png";
import iconazure from "/assets/Cloud/azure.jpg";
import iconclever from "/assets/Cloud/clever.jpg";
import icongit from "/assets/Cloud/git.png";
import iconheroku from "/assets/Cloud/heroku.png";

import iconcassandra from "/assets/Databases/cassandra.png";
import iconfirebase from "/assets/Databases/firebase.jpg";
import iconmongo from "/assets/Databases/mongo.jpg";
import iconmysql from "/assets/Databases/mysql.png";
import iconmsserver from "/assets/Databases/sqlserver.png";

import iconkubernetes from "/assets/automation/Kubernetes.png";
import icondocker from "/assets/automation/Docker.png";
import iconredhat from "/assets/automation/Red Hat.png";
import iconcontainer from "/assets/automation/containers.png";
import iconvmware from "/assets/automation/vmware.png";

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
                <Col ><img src={iconcsharp} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconasp} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconjava} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconpython} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconspring} alt="" srcset="" height={"auto"} width={50} /></Col>
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
                <Col ><img src={iconmongo} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconmsserver} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconmysql} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconcassandra} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconfirebase} alt="" srcset="" height={"auto"} width={50} /></Col>
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
          <Card.Header>{contentStack.home.skills.cloud.titulo}</Card.Header>
          <Card.Body>
            <Card.Text>
              <Row >
                <Col ><img src={iconaws} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconazure} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconheroku} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={icongit} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconclever} alt="" srcset="" height={"auto"} width={50} /></Col>
              </Row>
              <br />
              <ListGroup>
                {contentStack.home.skills.cloud.stack.map(skill => {
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
          <Card.Header>{contentStack.home.skills.virtualization.titulo}</Card.Header>
          <Card.Body>
            <Card.Text>
              <Row >
                <Col ><img src={iconkubernetes} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={icondocker} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconredhat} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconcontainer} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconvmware} alt="" srcset="" height={"auto"} width={50} /></Col>
              </Row>
              <br />
              <ListGroup>
                {contentStack.home.skills.virtualization.stack.map(skill => {
                  return (
                    <ListGroup.Item>{skill}</ListGroup.Item>
                  )
                })}

              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>

      ``

    </Container>
  );
};
