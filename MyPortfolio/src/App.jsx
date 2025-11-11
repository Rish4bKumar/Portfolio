import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills.jsx';
import ExpEdu from './Components/Experience/ExpEdu.jsx';
import Project from './Components/Projects/Project.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Header from './Components/Header/Header.jsx';

 const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <ExpEdu />
      <Project />
      <Contact />
    </div>
  )
}
export default App;