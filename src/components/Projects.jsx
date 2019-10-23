import React from "react";
import { Row, Col, Container } from "reactstrap";

const Projects = () => {
  return (
    <Container className="projects">
      <h1>Projects</h1>
      <Row>
        <Col lg="6">
          <div className="card">Heres 1 project</div>
        </Col>
        <Col lg="6">
          <div className="card">Heres 1 project</div>
        </Col>
      </Row>
    </Container>
  );
};
export default Projects;
