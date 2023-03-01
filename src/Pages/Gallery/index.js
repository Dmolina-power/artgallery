import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";




class Gallery extends Component {

    render() {
        return(
<section>
      <Container fluid className="dir-section">
        <Container className="dir-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Up Coming Events & Gallery
              </h1>
              <p className="home-about-body">
                Future dates of Events and photos of the gallery.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <h1 style={{ fontSize: "2.6em" }}>Up Coming Events:</h1>
            <Col md={12} className="myAvtar">
             
            </Col>
            <Col md={12} className="home-about-description">
              <p className="home-about-body">
                
                
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <h1 style={{ fontSize: "2.6em" }}>Photo Gallery</h1>
            <Col md={12} className="myAvtar">
             
            </Col>
            <Col md={12} className="home-about-description">
              <p className="home-about-body">
                
                
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      </section>
        )
    }
}

export default Gallery;