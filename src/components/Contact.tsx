import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionTitle>Contact</SectionTitle>
        
        <ContactContent>
          <ContactText className="description">
            I am always interested in new projects and opportunities.
            Whether it's blockchain application development, smart contracts, or backend apps,
            I'll be happy to talk and help turn your ideas into reality.
          </ContactText>
          
          <ContactMethods>
            <ContactItem
              href="mailto:contact@ronydelucca.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail size={20} />
              <span>contact@ronydelucca.com</span>
            </ContactItem>
            
            <ContactItem
              href="https://github.com/ronylucca"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={20} />
              <span>github.com/ronylucca</span>
            </ContactItem>
            
            <ContactItem
              href="https://linkedin.com/in/ronylucca"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin size={20} />
              <span>linkedin.com/in/ronylucca</span>
            </ContactItem>
          </ContactMethods>
        </ContactContent>
      </div>
      
      <Footer>
        <p>© {new Date().getFullYear()} Rony de Lucca. All rights reserved.</p>
      </Footer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 8rem 1rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 4px;
    background: ${props => props.theme.primary};
  }
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-align: center;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: ${props => props.theme.card};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.2s ease;
  
  span {
    font-size: 1.1rem;
  }
  
  &:hover {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  border-top: 1px solid ${props => props.theme.border};
  font-size: 0.9rem;
  opacity: 0.7;
`;

export default Contact; 