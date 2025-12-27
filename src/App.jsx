import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';


function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen text-foreground overflow-x-hidden bg-background font-sans transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
