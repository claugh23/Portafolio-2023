import React from "react";
import { Container, Row, Col, Card, Badge, Accordion } from "react-bootstrap";
import websitesData from "../../utils/websites.json"; // Assuming your JSON file is named websitesData.json

export const Websites = () => {
  return (
    <Container className="mt-4">
      <Accordion defaultActiveKey="0">
        {websitesData.map((website, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{website.title}</Accordion.Header>
            <Accordion.Body>
              <Card>
                <Row>
                  <Col md={6}>
                    <Card.Img variant="top" src={website.image} className="img-fluid" />
                  </Col>
                  <Col md={6}>
                    <Card.Body>
                      <Card.Text>
                        <a className="btn btn-info mt-2 mb-2" href={website.url} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                          Visitar Sitio
                        </a>
                        <p className="text-justify">{website.description}</p>
                        {website.features && (
                          <div>
                            <p>Features:</p>
                            <ul>
                              {website.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <hr />
                        {website.technologies.map((tech, i) => (
                          <Badge key={i} pill variant="info" className="mr-2 mb-2">
                            {tech}
                          </Badge>
                        ))}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Websites;
