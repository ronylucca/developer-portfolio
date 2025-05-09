import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#f8f9fa',
  text: '#212529',
  primary: '#3498db',
  secondary: '#2ecc71',
  accent: '#9b59b6',
  card: '#ffffff',
  border: '#e9ecef',
};

export const darkTheme = {
  background: '#121212',
  text: '#f8f9fa',
  primary: '#3498db',
  secondary: '#2ecc71',
  accent: '#9b59b6',
  card: '#1e1e1e',
  border: '#2d2d2d',
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: 'Inter', 'Poppins', sans-serif;
    transition: all 0.2s linear;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  .description, p {
    font-family: var(--font-mono);
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
    transition: color 0.2s ease;
    
    &:hover {
      opacity: 0.8;
    }
  }

  section {
    padding: 5rem 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export type ThemeType = typeof darkTheme; 