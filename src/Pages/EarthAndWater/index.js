import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Image from "react-bootstrap/Image";
import Cube3 from "../../Assets/cube3.JPG";
import Cube2 from "../../Assets/cube2.JPG";
import Cube4 from "../../Assets/cube4.JPG";
import Cube5 from "../../Assets/cube5.jpg";
import Cube6 from "../../Assets/cube6.JPG";
import Cube7 from "../../Assets/cube7.jpg";
import Cube8 from "../../Assets/cube8.jpg";
import Cube9 from "../../Assets/cube9.jpg";
import Cube10 from "../../Assets/cube10.jpg";
import Cube11 from "../../Assets/cube11.jpg";
import Cube12 from "../../Assets/cube12.jpg";
import Cube13 from "../../Assets/cube13.JPG";

const Earth = () => {
  return (
    <section>
      <Container fluid className="earth-section">
        <Container className="earth-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                “Earth & Water Project”
              </h1>
              <p className="home-about-body">
                In this specific project adults & kids use
                art eco cubes to express the importance of maintaining plants,
                animals, water and the environment in general and also portray
                our beautiful nature. The Eco cubes can be painted, sculpted and
                use it as the main tool to express a message with a positive and
                educational twist. We are committed to bring projects to the
                community that bring awareness and to encourage changes to
                protect our environment.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <h1 style={{ fontSize: "2.6em" }}>Enviromental Art a Big Sucess</h1>
            <Col md={12} className="myAvtar">
              <Image className="img-fluid" src={Cube3} />
            </Col>
            <Col md={12} className="home-about-description">
              <p className="home-about-body">
                The Piag Museum presented a unique art exhibition in the form of
                Floating Cubes. Under an environment al theme, this exhibit now
                has hundred cubes designed by various painters, poets,
                sculptors, photographers and also children and youth.
                <br></br>
                <br></br>
                Each cube has a unique message related to the conservation of
                our planet. On January, March & April 2009 participating
                children artists simultaneously placed their artwork in the
                schools pond as part of a ceremony dedicated to our planet.
                <br></br>
                <br></br>
                "The event was also presented earlier this year at the Plaza
                Cascade of The Miami-Dade Cultural Center, Pelican Island and
                St. Thomas University, this exhibit will travel to over 30
                cities, also Public Schools fand Universities from Miami Dade
                County and participants will be recognized for their efforts.
                <br></br>
                <br></br>
                It was free of cost for the public and included a complementary
                brunch and live music. The Mobile Gallery of The Piag Museum, a
                bus which carries art work inside and travels throughout
                Miami-Dade County, was also brought to the event so the public
                could have an opportunity to look at the pieces that hang
                inside.
                <br></br>
                <br></br>
                The Floating Cubes exhibited is one of the various events the
                Art programs organizes in which the community has an opportunity
                to participate and learn about art and students get hands-on
                experience in organizing art events through creative.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <container>
        <h1 style={{ fontSize: "2.6em" }}>Cubes Gallery</h1>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
          style={{ paddingLeft: "25px", padding: "35px" }}
        >
          <Grid item sm={12} md={6} lg={4} xl={4}>
            <Image className="img-fluid" src={Cube2} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
               <Image className="img-fluid" src={Cube4} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube5} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube6} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
               <Image className="img-fluid" src={Cube7} />
            </Grid>
            <Grid item sm={12} md={6} lg={4} xl={4}>
                <Image className="img-fluid" src={Cube8} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube9} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube10} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
               <Image className="img-fluid" src={Cube11} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
              <Image className="img-fluid" src={Cube12} />
              </Grid>
              <Grid item sm={12} md={6} lg={4} xl={4}>
                <Image className="img-fluid" src={Cube13} />
              </Grid>
          
          
        </Grid>
     </container>
    </section>
  );
};

export default Earth;
