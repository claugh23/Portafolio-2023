import React from "react";
import { Container,Col,Row,Card,Button } from "react-bootstrap";
const packages = [
  {
    "title": "Basic Package",
    "price": "$150",
    "description": "Ideal for personal websites or small businesses.",
    "features": [
      "Technical support for 30 days",
      "Domain inclusion on GoDaddy",
      "Hosting on Netlify",
      "Professional templates",
      "Up to 5 pages",
      "Social media integration",
      "Basic SEO optimization",
      "Delivery time: 5 business days"
    ]
  },
  {
    "title": "Standard Package",
    "price": "$300",
    "description": "Perfect for companies seeking a stronger online presence.",
    "features": [
      "Technical support for 60 days",
      "Domain inclusion on GoDaddy",
      "Hosting on Netlify",
      "Custom design and advanced functionalities",
      "Up to 10 pages",
      "Social media integration",
      "Basic SEO optimization",
      "Delivery time: 12 business days"
    ]
  },
  {
    "title": "Premium Package",
    "price": "$600",
    "description": "For companies that want a complete and professional online presence.",
    "features": [
      "Technical support for 90 days",
      "Free domain registration on GoDaddy",
      "Hosting on Netlify",
      "Custom design and advanced functionalities",
      "Up to 20 pages",
      "Advanced SEO optimization",
      "Social media integration",
      "Delivery time: 25 business days"
    ]
  }
]


export const ServiciosWeb = () => {
  return (
    <Container className="py-4">
    <h1 className="text-center mb-4 text-white">I offer you these packages for the creation of your website</h1>
    <Row>
      {packages.map((pkg, index) => (
        <Col key={index} md={4}>
          <Card className="mb-4 h-100">
            <Card.Body>
              <Card.Title>{pkg.title}</Card.Title>
              <Card.Text>
                <p className="font-weight-bold text-primary">Price: {pkg.price}</p>
                <p>{pkg.description}</p>
                <ul>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
};
