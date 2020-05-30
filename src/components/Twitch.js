import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/styles";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import img from "../assets/twitch.jpg";
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
	  color: "#283d50",
	},
  },
  imgFluid: {
	borderRadius: "20px",
	textAlign: "center",
  },
};



const Twitch = ({classes}) => (
      <Container>

        <header className={classes.sectionHeader}>
          <h3>Livestreams</h3>
        </header>

        <Row className={classes.aboutContent}>
          <Col>
            <h4>What do I stream?</h4>
            <p>
              The streams serve as a way for you guys to see the work that goes into my videos, as each 30 minutes of actual footage usually has over 2 hours behind it! This is the way I've found to share my grind. In addition there are series that are fully livestreamed!!
            </p>
            <p>
              In addition to this, the stream is a great way to interact with me! As I will always look at chat while I'm streaming, and always opened to chat, as well as see me playing some other games!
            </p>
			<h4>When do I stream?</h4>
			<p>
			  Do to my school schedule, I'm only able to stream during the holidays, whether those are the christmas or summer breaks.
			</p>
			<p>
			  During these times I stream over at Twitch, a few times a week in the late hours GMT
			</p>
          </Col>
          <Col>
		    <img src={img} alt="img" className={classes.imgFluid} width="90%" height="90%" />
          </Col>
        </Row>

      </Container>
);

export default withStyles(styles)(Twitch);
