import React from 'react';
import Cover from './sections/cover-section';
import Message from './components/message';
import Biography from './sections/biography-section';
import Projects from './sections/projects-section';
import Footer from './components/footer'
import Skills from './sections/skills-section';
import Github from './sections/github-section';
import Courses from './sections/courses-section';

const App: React.FC = () => {
  return (
    <div>
      <Message />
      <Cover />
      <Biography />
      <Skills />
      <Projects />
      <Courses />
      <Github />
      <Footer />
    </div>
  );
}

export default App;