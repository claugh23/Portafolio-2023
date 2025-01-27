import React from "react";
import { Container, Row, Col, Card, Badge, Accordion } from "react-bootstrap";
//import websitesData from "../../utils/websites.json"; // Assuming your JSON file is named websitesData.json

export const Websites = () => {

  const websitesData =[
    {
        "title": "All on Six Costa Rica Site",
        "image": "src/assets/websites/web3.png",
        "url": "https://www.allonsixcostarica.com/",
        "description": "This website was developed freelance for a dental clinic in Sabana Norte. It is an informational site for potential clients needing information about the clinic and includes a contact form to request general information.",
        "technologies": [
            "Angular",
            "Bootstrap"
        ]
    },
    {
        "title": "Marian Baker School Site",
        "image": "src/assets/websites/web4.png",
        "url": "https://mbs-webpage-2021.netlify.app/",
        "description": "This website was developed as an initiative to improve Marian Baker School's current webpage, aiming to give the institution a new online image and overall web presence with easier maintainability and long-term improvement capabilities.",
        "technologies": [
            "Angular",
            "Bootstrap"
        ]
    },
    {
        "title": "Somos Goes Ulacit Site",
        "image": "src/assets/websites/web6.png",
        "url": "https://somosgoesulacit.netlify.app/",
        "description": "This website was developed as an internal project for Ulacit's student government during the 2021-2022 period, in collaboration with members of the Computer Engineering faculty and the party's board of directors.",
        "technologies": [
            "Angular",
            "Bootstrap"
        ]
    },
    {
        "title": "Tickets Support App",
        "image": "src/assets/websites/web5.png",
        "url": "https://tickets-support-app.netlify.app/TicketsAppLogin",
        "description": "This website was developed as an initiative to automate the technical support ticket processes for internal clients of Marian Baker School. The system is a web development from scratch under the MVC development architecture applied with Angular and using a Rest API server with ASP.NET Core 6.0.",
        "technologies": [
            "Angular",
            "Asp Net Core 6.0",
            "Bootstrap",
            "Mongo Db"
        ],
        "features": [
            "Create new account and login",
            "Create tickets under the current session",
            "Check ticket status",
            "Check current inventories and filter by category",
            "Administration panel",
            "Creation and inventory control",
            "Ticket management",
            "Total control of internal users",
            "General system logs",
            "Email notifications to system users"
        ]
    },
    {
        "title": "Tico Net Games App",
        "image": "src/assets/websites/web2.png",
        "url": "https://ticonetgamesulacit.netlify.app/",
        "description": "This website was developed as part of the final project for the software design course. This site simulates an online video game store prototype similar to Steam, Epic Games, Ubisoft, etc. It was developed with Angular 14 and implements a Rest API with Spring Boot and MongoDB as the database.",
        "technologies": [
            "Angular",
            "Spring Boot",
            "Bootstrap",
            "Mongo Db"
        ],
        "features": [
            "Create new account and login",
            "View games in a catalog",
            "View user profile and edit personal information",
            "Purchase selected games and have a shopping cart",
            "General Administrative Panel",
            "Manage customer accounts overall",
            "Manage game catalogs"
        ]
    },
    {
        "title": "Fut Tico Canchas App",
        "image": "src/assets/websites/web1.png",
        "url": "https://fut-tico-canchas-v1.netlify.app/",
        "description": "This application is currently in development, but its purpose is for people who want to organize a soccer match and don't have a field, to search and reserve the nearest field in their area and manage the request automatically. This app implements React JS, Rest API with Spring Boot, and MongoDB databases.",
        "technologies": [
            "React Js",
            "Spring Boot",
            "React Bootstrap",
            "Mongo Db"
        ],
        "features": [
            "Create account and login",
            "General personal account management",
            "View current fields",
            "Search current fields and filter by categories such as game type or location",
            "Creation and management of field reservations",
            "Manage and organize private or public tournaments"
        ]
    },
    {
        "title": "Taller Mecanico App",
        "image": "src/assets/websites/web7.png",
        "url": "https://taller-mecanico-web-ui-beta.onrender.com/",
        "description": "This application is currently in development, but I will help to vehicles business to control their duties day by day and keep their clients updated about their issues of their cars",
        "technologies": [
            "React Js",
            "React Bootstrap",
            "Spring Boot",
            "Mongo Db",
            "Render as PaaS"

        ],
        "features": [
            "Create account and login",
            "Personal account management",
            "Create and view clients and search clients by name",
            "Create and review jobs for client's vehicles with their status as new,in progress and completed",
            "Creation and management of inventories",
            "Review diagnosis for individual clients and contact with phone or email",
            "Create custom quotes for clients with pdf",
            "General reporting"

        ]
    }
]




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
