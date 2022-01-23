import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { withFirebase } from "vtr-react-components/dist/Firebase";
import { VtrHeader } from "vtr-react-components/dist/VtrHeader";
import { VtrFooter } from "vtr-react-components/dist/VtrFooter";

import { getDoc } from "firebase/firestore";

import { StyledHeader, StyledRow, StyledImg, StyledSection, StyledCard } from "./assets/Styles";
import Avatar from "./assets/avatar.png";
import Twitch from "./assets/twitch.jpg";

const Card = ({title, link, description}) => {
	return (
		<Col>
			<StyledCard>
				<h3><a href={link}>{title}</a></h3>
				<p>{description}</p>
			</StyledCard>
		</Col>
	);
};

const App = ({ firebase }) => {
	const [series, setSeries] = useState(null);

	useEffect(() => {
		async function loadData() {
			const seriesDoc = await getDoc(firebase.config("series"));

			if (seriesDoc.exists())
				setSeries(seriesDoc.data());
		}

		loadData();
	}, [firebase]);


	const SeriesCards = () => Object.entries(series).map((item, index) => (
		<Card key={index} title={item[0]} link={item[1].link} description={item[1].description} />
	));


	return (
		<>
			<VtrHeader />

			<Container>
				<StyledHeader>
					<h3>About Me</h3>
				</StyledHeader>
				<StyledRow>
					<Col>
						<StyledImg src={Avatar} alt="img" width="80%" height="100%" />
					</Col>
					<Col>
						<h4> Who Am I? </h4>
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
				</StyledRow>
			</Container>

			<StyledSection>
				<Container>
					<StyledHeader>
						<h3> Youtube Series </h3>
					</StyledHeader>

					<StyledRow lg={2} md={2} sm={1} xl={2} xs={1}>
						{!!series && <SeriesCards />}
					</StyledRow>
				</Container>
			</StyledSection>

			<Container>
				<StyledHeader style={{paddingTop: "50px"}}>
					<h3>Livestreams</h3>
				</StyledHeader>
				<StyledRow>
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
						<StyledImg src={Twitch} alt="img" width="90%" height="90%" />
					</Col>
				</StyledRow>
			</Container>
			
			<VtrFooter />
		</>
	);
};

const Landing = withFirebase(App);

export default Landing;
