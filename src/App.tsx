import './App.css'

import { useEffect, useState } from 'react';
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


export default function App(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Duração do loader em milissegundos

    return () => clearTimeout(timer);
  }, []);

  return ( 
    <>
      {loading && <Loader />}
      {!loading && <Header />}
  <Header />
      <main className="main-fade-in">  
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />   
      </main>
       
    </>

    
    
  )
}