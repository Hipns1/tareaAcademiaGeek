import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default class Container extends Component {
  render() {
    return (
      <div>
            <Navbar/>
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Experience/>
            <Contact/>
            <Footer/>
      </div> 
    )
  }
}
