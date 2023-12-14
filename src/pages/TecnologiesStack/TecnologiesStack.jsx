// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Card, Col, ListGroup } from "react-bootstrap";
import contentStack from "../../utils/contents.json";
import iconReact from "../../assets/icons/react.png";
import iconAngular from "../../assets/icons/angular.png";
import iconHtml from "../../assets/icons/html-5.png";
import iconCss from "../../assets/icons/css-3.png";
import iconJs from "../../assets/icons/js.png";

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
                <Col ><img src={iconHtml} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconCss} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconJs} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconReact} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconAngular} alt="" srcset="" height={"auto"} width={50} /></Col>
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
                <Col ><img src={iconHtml} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconCss} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconJs} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconReact} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconAngular} alt="" srcset="" height={"auto"} width={50} /></Col>
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
                <Col ><img src={iconHtml} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconCss} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconJs} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconReact} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconAngular} alt="" srcset="" height={"auto"} width={50} /></Col>
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


      
        <Col className="mb-5">
          <Card>
            <Card.Header>{contentStack.home.skills.cloud.titulo}</Card.Header>
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
                <Col ><img src={iconHtml} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconCss} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconJs} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconReact} alt="" srcset="" height={"auto"} width={50} /></Col>
                <Col ><img src={iconAngular} alt="" srcset="" height={"auto"} width={50} /></Col>
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

      

    </Container>
  );
};
