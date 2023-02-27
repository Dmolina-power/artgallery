import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Earth = () => {
    return(
<section>
        <Container fluid className="home-section" id="home">
         
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                “Earth & Water Project”
                </h1>
                <p className="home-about-body">
                In this specific project that we do with adults & kids we use art eco cubes to express the importance of maintaining plants, animals, water and the environment in general and also portray our beautiful nature. The Eco cubes can be painted, sculpted and use it as the main tool to express a message with a positive and educational twist. We are committed to bring projects to the community that bring awareness and to encourage changes to protect our environment.
                    </p>
              </Col>

            </Row>
          </Container>
        </Container>
        </section>
    )
}

export default Earth;