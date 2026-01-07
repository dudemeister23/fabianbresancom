import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Competencies } from './components/Competencies';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />

        <div id="about">
          <About />
        </div>
        <Competencies />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;