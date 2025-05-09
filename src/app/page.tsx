'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import ScrollToTop from '../components/ScrollToTop';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/theme';
import StyledComponentsRegistry from '../lib/registry';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }
  
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Hero />
          <Projects />
          <ScrollToTop />
        </main>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
} 