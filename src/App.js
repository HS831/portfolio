import React from 'react';
import Header from './components/Header'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

import ParticlesAnim from './ParticlesAnim';
import './App.css'

function App() {
 
  return (
    <React.Fragment>
      <Header/>
      <About />
      <Skills />
      <Projects/>
      <Blogs />
      <Contact />
      <ParticlesAnim />
    </React.Fragment>
  );
}

export default App;