import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Proclaim from "../../Assets/proclaim.jpg";
import Disney from "../../Assets/disney.jpg";
import Image from "react-bootstrap/Image";

const EndSection = () => {

return(
    <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={12} className="home-about-description-proclaim">
                <h1 style={{ fontSize: "1.2em"}}>
                Today we are proud to say, our mission and our goals have taken us to places, to people, to communities that have welcomed our knowledge, our services and our love for art with opened arms. And on their behalf we will continue to do so for many years to come.
                </h1>
                <p className="home-about-body"></p>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="myAvatar">
                <Image className="img-fluid" src={Proclaim} />
              </Col>
              <Col md={6} className="myAvatar">
                <Image className="img-fluid" src={Disney} />
              </Col>
            </Row>
          </Container>
        </Container>


    );
}

export default EndSection;