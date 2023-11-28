import React, { useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
// import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

import backgroundImageLight from '../src/assets/site-bg.jpg';
import backgroundImageDark from '../src/assets/testeBG.png';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageDark);

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    setBackgroundImage(newIsDarkMode ? backgroundImageDark : backgroundImageLight);
  };


  return (
    <div className={`bg-site bg-no-repeat bg-cover overflow-hidden ${isDarkMode ? 'dark-mode' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Banner />
      {/* <Nav /> */}
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
