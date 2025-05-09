import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <ProjectNumber>{String(project.id).padStart(2, '0')}</ProjectNumber>
              <ProjectTitle>{project.title}</ProjectTitle>
              
              <ProjectDescription className="description">{project.description}</ProjectDescription>
              
              <TechStack>
                {project.technologies.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <ProjectLinks>
                <ProjectLink 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub repository"
                >
                  <FiGithub size={18} /> <span>GitHub</span>
                </ProjectLink>
                
                {project.demoUrl && (
                  <ProjectLink 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit live demo"
                  >
                    <FiExternalLink size={18} /> <span>Demo</span>
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 4rem 1rem 8rem;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectNumber = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 5rem;
  font-weight: 900;
  opacity: 0.07;
  color: ${props => props.theme.primary};
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.35rem 0.7rem;
  background: ${props => props.theme.background};
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid ${props => props.theme.border};
  
  &:hover {
    background: ${props => props.theme.primary};
    color: white;
    border-color: ${props => props.theme.primary};
  }
`;

export default Projects; 