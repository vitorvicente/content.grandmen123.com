import React from 'react';

import Header from "./components/Header";
import Intro from "./components/Intro";
import Videos from "./components/Videos";
import Twitch from "./components/Twitch";
import Footer from "./components/Footer";


function App() {
  return (
	<div>
      <Header />
	  <Intro />
	  <Videos />
	  <Twitch />
	  <Footer />
	</div>
  );
}

export default App;
