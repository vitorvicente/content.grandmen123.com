import React from 'react';

import Header from "./components/Header";
import Intro from "./components/Intro";
import Videos from "./components/Videos";
import Twitch from "./components/Twitch";


function App() {
  return (
	<div>
      <Header />
	  <Intro />
	  <Videos />
	  <Twitch />
	</div>
  );
}

export default App;
