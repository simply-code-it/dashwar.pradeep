import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GithubCalender from './components/GitHubStats';
import React from 'react';
import './App.css';
const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Header />
        <About/>
        <Skills />
        <Projects />
        <GithubCalender />
        <Contact/>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
