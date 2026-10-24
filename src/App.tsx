import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import './App.css';

type ThemeMode = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  });
  const [hasResume, setHasResume] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((response) => setHasResume(response.ok))
      .catch(() => setHasResume(false));
  }, []);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero hasResume={hasResume} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Activities />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
