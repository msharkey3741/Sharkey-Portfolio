import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Card, Icon } from "semantic-ui-react";

const Projects = () => {
  return (
    <Container lg="12" className="projects ">
      <div className="titles">
        <h1>Projects</h1>
        <h6>Click the image to visit the website</h6>
      </div>
      <Row>
        <Col lg="12">
          <Card>
            <h1>AT&T Hackathon: Surf Alone Together </h1>
            <h4>
              Surf Alone together is a mobile app for surfers to record local
              wave information and keep up to date on wave information and crowd
              density
            </h4>
            <hr />
            <Icon className="code"></Icon>
            <Image
              src="SAT-page.png"
              as="a"
              size="mini"
              href="https://surfalonetogether.azurewebsites.net/"
              target="_blank"
            />
            <i className="fas fa-camera"></i>
            <div className="card-body">
              <p>
                Using IBM Waton's image recognition we can machine learn to
                calculate wave height from user generated photos, and in real
                time update users of the app.
              </p>
              <hr />
              <h6>Tools used</h6>
              <Image src="ibm.png" size="mini" />{" "}
              <Image src="net.png" size="mini" />{" "}
              <Image src="react.png" size="mini" />{" "}
              <Image src="sql.png" size="mini" />
              <Image src="aws.png" size="mini" />
            </div>
            <div></div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card style={{ marginTop: 100, marginBottom: 100 }}>
            <h1>Oppti</h1>
            <h4>
              Oppti is a ground up website for high school students to connect
              to opportunities from business', start ups, and internships
            </h4>
            <hr />
            <Image
              src="oppti.png"
              href="https://oppti.azurewebsites.net/"
              target="_blank"
              floated="right"
              wrapped
              ui={false}
            />
            <p>
              Oppti is a ground up website for high school students to connect
              to opportunities from business', start ups, and internships
            </p>
            <hr />
            <div className="card-body">
              <h6>Tools used</h6>
              <Image src="net.png" size="mini" />{" "}
              <Image src="react.png" size="mini" />{" "}
              <Image src="sql.png" size="mini" />{" "}
              <Image src="aws.png" size="mini" />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Projects;
