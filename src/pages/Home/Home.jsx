import "./index.css";
import { Col, Container, Row, Button, Badge } from "react-bootstrap";
import ProfileImage from "/assets/images/ProfilePhoto.jpeg";
import { useNavigate } from "react-router-dom";
import contents from "../../utils/contents.json";

export const Home = () => {
  const appNavigator = useNavigate();

  const loadProfile = () => {
    appNavigator("/Perfil");
  };

  const SkillSection = ({ title, skills, variant }) => (
    <div className="mb-5">
      <h2 className="text-white mb-3 fw-bold">{title}</h2>
      <div className="d-flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} pill variant={variant} className="px-3 py-2 fs-6">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <div className="homePage min-vh-100 py-5">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={10} className="text-center">
            {/* Header */}
            <h1 className="text-white mb-4 fw-bold" style={{ fontSize: "3rem" }}>
              {contents.home.titulo}
            </h1>

            {/* Profile Image */}
            <img
              src={ProfileImage}
              alt="Profile"
              className="img-fluid rounded-circle mb-4 shadow"
              width={280}
              style={{ border: "4px solid #0d6efd" }}
            />

            {/* Title & CTA */}
            <p className="text-white-50 mb-3" style={{ fontSize: "1.2rem" }}>
              {contents.home.carrera}
            </p>
            <Button
              variant="primary"
              size="lg"
              className="mb-5"
              onClick={loadProfile}
            >
              View my profile
            </Button>

            {/* Description */}
            <p className="text-white-50 mb-5 lh-lg" style={{ textAlign: "justify", fontSize: "1rem" }}>
              {contents.home.descripcion}
            </p>

            <hr className="my-5 border-secondary" />

            {/* Skills Sections */}
            <SkillSection
              title={contents.home.skills.frontend.titulo}
              skills={contents.home.skills.frontend.stack}
              variant="info"
            />
            <SkillSection
              title={contents.home.skills.backend.titulo}
              skills={contents.home.skills.backend.stack}
              variant="success"
            />
            <SkillSection
              title={contents.home.skills.databases.titulo}
              skills={contents.home.skills.databases.stack}
              variant="warning"
            />
            <SkillSection
              title={contents.home.skills.cloud.titulo}
              skills={contents.home.skills.cloud.stack}
              variant="danger"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
