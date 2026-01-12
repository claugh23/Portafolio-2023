import { Row, Card, Col, Container } from "react-bootstrap";
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import './index.css';

export const AboutMe = () => {
  const experienciaLaboral = [
    {
      puesto: "Technical Support Engineer IC2 - Service Management",
      empresa: "ServiceNow",
      fecha: "March 2025 - Present",
      funciones: [
        "ITSM Modules configuration and management",
        "CMDB Modules administration and maintenance",
        "Service Operation Workspace management",
        "Troubleshooting Operations Across Platform",
        "Customer Service and Case Handling",
        "Communication Baselines implementation",
      ],
    },
    {
      puesto: "Java full stack developer",
      empresa: "IBM Consulting Costa Rica",
      fecha: "November 2021 - Present - 3 Years",
      funciones: [
        "Front end development with html, CSS and JavaScript with React JS",
        "Web Design Solutions for Cloud Environments",
        "Testing web servers based on rest api environments such as spring boot(Java), asp net core(C#) or JavaScript",
        "Cloud Integration on Heroku, Azure, AWS Platform",
        "Database management, MySQL, SQL Server, Firebase, MongoDB",
        "Design and development of scalable and secure web solutions tailored to cloud environments",
        "Implementation and testing of RESTful APIs using Spring Boot, ASP.NET Core, and JavaScript frameworks",
        "Continuous Integration and Deployment (CI/CD) practices implementation",
        "Collaboration with multidisciplinary teams in planning sessions, code reviews, and documentation maintenance",
      ],
    },
    {
      puesto: "Technical Support Agent",
      empresa: "Anexo Gran Hotel S.A",
      fecha: "September 2019 - December 2019",
      funciones: [
        "Technical support and customer service for hotel staff and guests",
        "Configuration and troubleshooting of network infrastructure including Cisco AP",
        "Administration of servers with active network services and SQL Server databases",
        "Management of cloud services, particularly at Google",
        "Website development and maintenance using Wordpress",
        "Development of web applications for internal administrative functions using Angular Version 11/12 and Rest API with Asp net core",
        "Maintenance and support of computers and continuous integration applications in cloud environments",
        "Technology training sessions for hotel staff",
        "Structured cabling installation and maintenance",
      ],
    },
    {
      puesto: "IT Support Manager and Fullstack Developer",
      empresa: "Marian Baker School",
      fecha: "January 2019 - October 2021 - 2.5 years",
      funciones: [
        "Network infrastructure configuration and administration with Cisco AP",
        "Configuration and administration of servers with active network services and SQL Server databases.",
        "Cloud Services Management at Google",
        "Website development and maintenance with Wordpress",
        "Development of web applications for administrative functions of the company with Angular Version 11/12 and Rest API with Asp net core",
        "Maintenance of computers and continuous integration applications in the cloud",
        "Technology training for teachers",
      ],
    },
  ];

  const habilidades = [
    "HTML", "CSS", "JavaScript", "Java", "C#", "React JS", "Spring Boot",
    "ASP.NET Core", "MS SQL Server", "MySQL", "MongoDB", "Git", "Azure", "AWS", "CI/CD"
  ];

  return (
    <Container className="generalContainer my-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="fw-bold text-primary mb-2">
            <FaBriefcase className="me-2" /> Professional Experience
          </h1>
          <p className="text-muted">My journey in software development and IT</p>
        </Col>
      </Row>
      
      <Row className="mb-5">
        <Col md={12}>
          {experienciaLaboral.map((experiencia, index) => (
            <Card key={index} className="mb-3 shadow-sm border-0 hover-shadow" style={{ borderLeft: "4px solid #0d6efd" }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <Card.Title className="text-primary mb-1">
                      <FaBriefcase className="me-2" />{experiencia.puesto}
                    </Card.Title>
                    <Card.Subtitle className="text-muted fw-bold">{experiencia.empresa}</Card.Subtitle>
                  </div>
                  <span className="badge bg-info text-dark">{experiencia.fecha}</span>
                </div>
                <ul className="list-unstyled ps-3">
                  {experiencia.funciones.map((funcion, i) => (
                    <li key={i} className="mb-2 ps-2 border-start border-2 border-secondary ps-3">
                      {funcion}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <Card className="shadow-sm border-0" style={{ borderTop: "4px solid #6c757d" }}>
            <Card.Body>
              <Card.Title className="text-secondary mb-4">
                <FaLaptopCode className="me-2" /> Technical Skills
              </Card.Title>
              <Row className="g-3">
                {habilidades.map((habilidad, index) => (
                  <Col key={index} xs={6} sm={4} md={3} lg={2}>
                    <Card className="border-0 bg-light h-100 text-center hover-card" style={{ cursor: "default", transition: "all 0.3s ease" }}>
                      <Card.Body className="d-flex align-items-center justify-content-center p-3">
                        <Card.Text className="m-0 fw-600">{habilidad}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
