import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <HeroSection id="home">
      <div className="container">
        <HeroContent>
          <TextContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Greeting>Hello, I am</Greeting>
              <Name>Rony de Lucca</Name>
              <Role>Web3 & Backend Developer</Role>
              
              <Description className="description">
              Backend developer with 15+ years experience building solutions for startups and enterprises. Specialized in blockchain technologies, developing APIs and smart contracts with Node.js, Java, Golang and Solidity. Expert in both web2 and web3 sectors with focus on API development and automated financial processes.
              </Description>
              
            </motion.div>
          </TextContent>
          
          <ImageContainer>
            <ProfileImageWrapper
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProfileImage>
                <Image 
                  src="/profile.jpg" 
                  alt="Rony de Lucca" 
                  width={300} 
                  height={300}
                  priority
                />
              </ProfileImage>
            </ProfileImageWrapper>
          </ImageContainer>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 65vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContent = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const Greeting = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Role = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.secondary};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  font-family: var(--font-mono);
  
  @media (max-width: 768px) {
    margin: 0 auto 2rem;
  }
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: ${props => props.theme.primary};
  color: white;
  font-weight: 600;
  border-radius: 30px;
  transition: background 0.2s ease;
  
  &:hover {
    background: ${props => props.theme.accent};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const ProfileImageWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${props => props.theme.accent};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${props => props.theme.primary};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

export default Hero; 