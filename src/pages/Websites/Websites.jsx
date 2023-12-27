import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import website1 from "../../assets/websites/web1.png";
import website2 from "../../assets/websites/web2.png";
import website3 from "../../assets/websites/web3.png";
import website4 from "../../assets/websites/web4.png";
import website5 from "../../assets/websites/web5.png";
import website6 from "../../assets/websites/web6.png";




export const Websites = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col>
            <Card>
              <Card.Header>Tickets Support App</Card.Header>
              <Card.Body>
                <Card.Text>
                  <img src={website5} className="img-fluid" alt="" srcset="" />
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
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Header>Marian Baker School Site</Card.Header>
              <Card.Body>
                <Card.Text>
                  <img src={website4} className="img-fluid" alt="" srcset="" />
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
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Header>Somos GOES Ulacit 202 Site</Card.Header>
              <Card.Body>
                <Card.Text>
                  <img src={website6} className="img-fluid" alt="" srcset="" />
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
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Header>Tico Net Games App Shop</Card.Header>
              <Card.Body>
                <Card.Text>
                  <img src={website2} className="img-fluid" alt="" srcset="" />
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
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Header>Consultorio All on Six Costa Rica</Card.Header>
              <Card.Body>
                <Card.Text>
                  <img src={website3} className="img-fluid" alt="" srcset="" />
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
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Header>Fut Tico Canchas App</Card.Header>
              <Card.Body>
                <Card.Text>
                  <img src={website1} className="img-fluid" alt="" srcset="" />
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
