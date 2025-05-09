import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar o botão quando o usuário rolar para baixo
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollSection>
      <div className="container">
        <ArrowContainer
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp size={24} />
        </ArrowContainer>
      </div>
      <Footer>
        <p>© {new Date().getFullYear()} Rony de Lucca. All rights reserved.</p>
      </Footer>
    </ScrollSection>
  );
};

const ScrollSection = styled.section`
  padding: 4rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
`;

const ArrowContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.primary};
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0 1rem;
  margin-top: 2rem;
  border-top: 1px solid ${props => props.theme.border};
  font-size: 0.9rem;
  opacity: 0.7;
  width: 100%;
`;

export default ScrollToTop; 