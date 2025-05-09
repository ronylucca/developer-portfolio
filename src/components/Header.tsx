import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon, FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <div className="container">
        <NavContent>

          
          <NavActions>
            <SocialLink 
              href="https://github.com/ronylucca" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </SocialLink>
            
            <SocialLink 
              href="https://linkedin.com/in/ronylucca" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </SocialLink>
            
            <ThemeToggle onClick={toggleTheme}>
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </ThemeToggle>
          </NavActions>
        </NavContent>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  z-index: 100;
  backdrop-filter: ${props => props.scrolled ? 'blur(8px)' : 'none'};
  background: ${props => props.scrolled 
    ? props.theme.background + 'dd' 
    : 'transparent'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled 
    ? '0 2px 10px rgba(0, 0, 0, 0.1)' 
    : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.theme.primary};
`;

const NavItems = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.text};
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ThemeToggle = styled(motion.button).attrs({
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text};
  background: ${props => props.theme.card};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default Header; 