import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/styles";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import img from "../assets/avatar.png";
import "../styles/main.css";

const styles = {
  sectionHeader: {
	textAlign: "center",
	position: "relative",
	"& h3": {
	  fontWeight: "500",
	  fontSize: "36px",
	  color: "#283d50",
	},
  },
  aboutContent: {
	paddingTop: "60px",
	"& h4": {
	  fontWeight: "600",
	  fontSize: "24px",
	},
  },
  imgFluid: {
	borderRadius: "20px",
	textAlign: "center",
  },
};



const Intro = ({classes}) => (
      <Container>

        <header className={classes.sectionHeader}>
          <h3>About Me</h3>
        </header>

        <Row className={classes.aboutContent}>
          <Col>
            <img src={img} alt="img" className={classes.imgFluid} width="80%" height="100%" />
          </Col>
          <Col>
            <h4>Who Am I?</h4>
            <p>
              My name is Grandmen123, but I usually go by Grand online, I'm a portuguese teen who loves video games, tech and aviation. I'm currently studying Computer Science at Boston University.
            </p>
            <p>
              I've been on Youtube/Twitch for over 6 years now! However, I've recently decided to get a restart on my content creation life online, and so I deleted all my old content, and started a new survival letsplay!
            </p>
			<p>
			  Since then I have started several new series and post a handful of videos every week!!
			</p>
          </Col>
        </Row>

      </Container>
);

export default withStyles(styles)(Intro);
