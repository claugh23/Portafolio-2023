import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export const Websites = () => {
  return (
    <div>
      <Container fluid className="mt-4">
        <Row>
          <Col>
            <Card>
              <Card.Header>Digital Tickets Support App</Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build the card out and make up the
                  bulk of the card's content.
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
                  Some quick example text to build the card out and make up the
                  bulk of the card's content.
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
                  Some quick example text to build the card out and make up the
                  bulk of the card's content.
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
                  Some quick example text to build the card out and make up the
                  bulk of the card's content.
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
                  Some quick example text to build the card out and make up the
                  bulk of the card's content.
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
                  Some quick example text to build the card out and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
