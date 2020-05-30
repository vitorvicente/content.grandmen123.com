import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/styles";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "../styles/main.css";

const styles = {
  sectionHeader: {
	textAlign: "center",
	position: "relative",
	paddingBottom: "30px",
	"& h3": {
	  fontWeight: "500",
	  fontSize: "36px",
	  color: "#283d50",
	},
  },
  sectionBg: {
	paddingTop: "30px",
	paddingBottom: "10px",
	background: "#ecf5ff",
  },
  series: {
    padding: "60px 0 40px 0",
  },
  box: {
	padding: "30px",
	position: "relative",
	overflow: "hidden",
	borderRadius: "10px",
	margin: "0 10px 40px 10px",
	background: "#fff",
	boxShadow: "0 10px 29px 0 rgba(68, 88, 144, 0.1)",
	transition: "all 0.3s ease-in-out",
	"&:hover": {
      '-webkit-transform': 'translateY(-5px)',
	  transform: 'translateY(-5px)'
	},
  },
  title: {
	marginLeft: "40px",
	fontWeight: "700",
	marginBottom: "15px",
	fontSize: "18px",
    "& a": {
	  color: "#111",
	  "&:hover": {
		color: "#007bff",
		textDecoration: "none",
	  },
    },
  },
  description: {
	fontSize: "14px",
	marginLeft: "40px",
	lineHeight: "24px",
	marginBottom: "0px",
  },
};



const Videos = ({classes}) => (
  <div className={classes.series}>
	<section className={classes.sectionBg}>
      <Container>

        <header className={classes.sectionHeader}>
          <h3>Youtube Series</h3>
        </header>
		
        <Row>
		
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a href="http://rc.vtr.pt">RedstoneCraft</a></h4>
              <p className={classes.description}>A completely vanilla survival series in Minecraft! Always on the latest version, and always with the goal to automatize everything!</p>
            </div>
          </Col>
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a href="http://maps.vtr.pt">Map Playthroughs</a></h4>
              <p className={classes.description}>Every week we take on a brand new map, and playthrough all the challenges presented to us, whether that is parkour, PVE, puzzles or anything else!!</p>
            </div>
          </Col>

        </Row>
		
        <Row>
		
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a href="http://cc.vtr.pt">CrazyCraft</a></h4>
              <p className={classes.description}>The name says it all!! A Crazy modpack filled with insane mods for us to explore!!</p>
            </div>
          </Col>
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a href="http://vl.vtr.pt">Update Vlogs</a></h4>
              <p className={classes.description}>Every few months I post a new update Vlog to keep you guys posted on everything that is going on!</p>
            </div>
          </Col>

        </Row>

      </Container>
	</section>
  </div>
);

export default withStyles(styles)(Videos);
