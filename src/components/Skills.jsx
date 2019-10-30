import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Skills = () => {
  return (
    <div className="skills">
      <Container lg="12" className="projects">
        <div className="titles">
          <h1>Skills</h1>
          <hr />
        </div>
        <Row className="skillItem">
          <Col>
            <div>Front End </div>
            <hr />
            <li>React</li>
            <li>Javascript</li>
            <li>HTML</li>
          </Col>
          <Col>
            <div>Middle</div>
            <hr />
            <li>C#</li>
            <li>Nodejs</li>
            <li>ASP.Net</li>
          </Col>
          <Col>
            <div>Back End</div>
            <hr />
            <li>SQL Server</li>
            <li>T-SQL</li>
            <li>MongoDB</li>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Skills;
