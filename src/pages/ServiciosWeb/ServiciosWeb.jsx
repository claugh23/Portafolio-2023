import React from "react";
import { Container,Col,Row,Card,Button } from "react-bootstrap";
const packages = [
    {
      title: 'Paquete Básico',
      price: '$150',
      description: 'Ideal para sitios web personales o de pequeñas empresas.',
      features: [
        'Soporte técnico por 30 días',
        'Inclusión de dominio en GoDaddy',
        'Hosting en Netlify',
        'Plantillas profesionales',
        'Hasta 5 páginas',
        'Integración con redes sociales',
        'Optimización SEO básica',
        'Tiempo de entrega: 5 días hábiles'
      ]
    },
    {
      title: 'Paquete Estándar',
      price: '$300',
      description: 'Perfecto para empresas que buscan una presencia en línea más sólida.',
      features: [
        'Soporte técnico por 60 días',
        'Inclusión de dominio en GoDaddy',
        'Hosting en Netlify',
        'Diseño personalizado y funcionalidades avanzada',
        'Hasta 10 páginas',
        'Integración con redes sociales',
        'Optimización SEO básica',
        'Tiempo de entrega: 12 días hábiles'
      ]
    },
    {
      title: 'Paquete Premium',
      price: '$600',
      description: 'Para empresas que desean una presencia en línea completa y profesional.',
      features: [
        'Soporte técnico por 90 días',
        'Registro de dominio gratuito en GoDaddy',
        'Hosting en Netlify',
        'Diseño personalizado y funcionalidades avanzadas',
        'Hasta 20 páginas',
        'Optimización SEO avanzada',
        'Integración con redes sociales',
        'Tiempo de entrega: 25 días hábiles'
      ]
    }
  ];

export const ServiciosWeb = () => {
  return (
    <Container className="py-4">
    <h1 className="text-center mb-4 text-white">Te ofrezco estos paquetes para la creacion de tu sitio web</h1>
    <Row>
      {packages.map((pkg, index) => (
        <Col key={index} md={4}>
          <Card className="mb-4 h-100">
            <Card.Body>
              <Card.Title>{pkg.title}</Card.Title>
              <Card.Text>
                <p className="font-weight-bold text-primary">Precio: {pkg.price}</p>
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
