/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="flex-grow-1">
        {/* Your content goes here */}
      </Container>
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-left">
              <h5>Contact Us</h5>
              <p>
                If you have any questions or need assistance, feel free to contact us.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-right">
              <h5>Contact Information</h5>
              <address>
                <strong>Your Company Name</strong><br />
                123 Main Street<br />
                City, State ZIP Code<br />
                Phone: (123) 456-7890<br />
                Email: info@yourcompany.com
              </address>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}
