import React, { useRef } from "react";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/aboute and contact/AboutMe";
import MyProjects from "./components/my projects/MyProjects";
import Training from "./components/my training projects/Training";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/skills/Skills";

function App() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const trainingRef = useRef(null);
  const aboutRef = useRef(null);
  

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ heroRef, aboutRef, projectsRef, trainingRef, skillsRef }}
      />

      <div ref={heroRef}><Hero /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={trainingRef}><Training /></div>
      <div ref={projectsRef}><MyProjects /></div>
      <div ref={aboutRef}><AboutMe /></div>

    </>
  );
}

export default App;
