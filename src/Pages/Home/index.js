import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Proclaim from "../../Assets/proclaim.jpg";
import Cube1 from "../../Assets/cube1.jpg";
import Wheels from "../../Assets/wheels.jpg";
import Disney from "../../Assets/disney.jpg";

const Home = () => {
  return (
    <>
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Explore the Wonders of Art at PIAG Museum{" "}
                </h1>
                <p className="home-about-body">
                  PIAG Museum created in 2003 is a non-profit organization 501
                  C3, dedicated to educate, plan, organize, promote and showcase
                  the visual arts in all its forms and manifestations throughout
                  our community in Florida, Nationwide and Worldwide.PIAG Museum
                  is your one-stop-shop for exploring the wonders of art.
                  Featuring a wide array of visual arts from different cultures
                  and eras, PIAG Museum offers something for everyone. Come
                  discover the beauty of painting, sculpture, photography, and
                  more at PIAG Museum!
                </p>
              </Col>
              
            </Row>
          </Container>
        </Container>
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
                <Col md={12}>
                   <h1 style={{ fontSize: "2.6em" }}>
                PIAG Museum: Visual Arts on wheels
              </h1> 
                </Col>
              
              <Col md={6} className="myAvtar">
                <Image className="img-fluid" src={Wheels} />
              </Col>
              <Col md={6} className="myAvtar">
                <h3>
                  <b className="red">The Phrase</b>
                </h3>
                <p>
                  <i>
                    <b className="red">
                      “ If people can’t go to the museum…the museum will go to
                      the people”
                    </b>{" "}
                  </i>{" "}
                  captures the concept of PIAG Museum on Wheels. This mobile
                  museum travels through the communities while advancing public
                  appreciation of art at schools, universities, nursing homes
                  and special events.
                </p>
              </Col>
              <Col md={12} className="home-about-description">
                <p className="home-about-body">
                  The PIAG Museum is a vibrant destination for visual arts
                  education and enjoyment. Our museum features interactive
                  experiences, educational workshops, and special events for
                  everyone to enjoy. Explore the wonders of visual art and be
                  inspired by this unique and extraordinary experience.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
               <h1 style={{ fontSize: "2.6em" }}>
                PIAG Museum: "Earth & Water Project"
              </h1>
               <Col md={4} className="myAvtar">
               
                <Image className="img-fluid" src={Cube1} />
              </Col>
              <Col md={8} className="home-about-description">
                <p className="home-about-body">
                  In the Art education we have art workshops at schools &
                  community events. We have many innovative art projects, the
                  latest one among so many we have and that has been very
                  successful and also unique is the “Earth & Water Project”.
                  <br></br>
                  <br></br>
                  Want to learn more about the "Earth & Water Project" click
                  below.
                </p>
                <div className="d-grid gap-2">
                  <Button
                    variant="info"
                    size="lg"
                    as={Link}
                    to="/earthandwater"
                  >
                    Earth & Water Project
                  </Button>
                </div>
              </Col>
             
            </Row>
          </Container>
        </Container>
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <h1 style={{ fontSize: "2.6em" }}>
                PIAG Museum: Art Exhibitions
              </h1>
              <Col md={8} className="home-about-description">
                <p className="home-about-body">
                  Art must be experienced in person to truly get a sense of its
                  magnitude and to truly appreciate it. What a better way to
                  expose the artist work and for the public to appreciate it
                  than with Art exhibitions. Many artist are rejected in art
                  galleries because they do not have an extensive curriculum.
                  Piag Museum gives opportunity to artists of all ages to
                  showcase their work considering more their talent, creativity
                  and quality of art work rather than his resume. We will
                  continue to do Art exhibitions and also floating art
                  exhibitions for the enjoyment of the young and old.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={12} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  Why are we <b className="red">Unique?</b>
                </h1>
                <p className="home-about-body">
                  <b className="red">1-</b>Instead of the people going to the
                  museum we go to the people. This way we can reach hundreds of
                  people in one event.
                  <br></br>
                  <br></br>
                  <b className="red">
                    In the Art education we have art workshops at schools for
                    the youth, community events art activities, and art classes
                    for the adults.
                  </b>
                  <br></br>
                  <br></br>
                  <b className="red">2-</b> Piag Museum gives opportunity to
                  artists of all ages to showcase their work . We do beautiful
                  art exhibitions for the enjoyment of the community with this
                  artist that haven't been able to exhibit because we consider
                  the quality of work not their resume.
                  <br></br>
                  <br></br>
                  <b className="red">3-</b> Besides the regular exhibits,
                  floating art exhibitions in lakes is a unique way to showcase
                  art and more amazing is that the theme is the environment and
                  the awareness toward the protection of our planet.Portraying a
                  beautiful landscapes or sending a message is a way to use art
                  in an educational way.
                </p>
                <br></br>
                <br></br>
                <p>Learn more about the Art Director below!</p>
                <div className="d-grid gap-2">
                  <Button variant="info" size="lg" as={Link} to="/director">
                    Art Director
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={12} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  Today we are proud to say, our mission and our goals have
                  taken us to places, to people, to communities that have
                  welcomed our knowledge, our services and our love for art with
                  opened arms. We have many letters of recommendations that show
                  our path, hard work and the community’s satisfaction.
                </h1>
                <p className="home-about-body"></p>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="myAvatar">
                <Image className="img-fluid" src={Proclaim} />
              </Col>
              <Col md={6} className="myAvatar">
                <Image className="img-fluid" src={Disney}/>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Home;
