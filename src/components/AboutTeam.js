import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const TeamSection = styled.section`
  background-color: #f9f9f9;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    
    .profile-img img {
      transform: scale(1.05);
    }
  }
`;

const ProfileImage = styled.div`
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
`;

const TeamMemberInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: var(--secondary-dark);
`;

const MemberRole = styled.p`
  color: var(--primary);
  font-size: 0.9rem;
  margin-bottom: 10px;
  font-weight: 500;
`;

const MemberSkills = styled.p`
  color: #666;
  font-size: 0.85rem;
  margin-bottom: 15px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #f4f4f4;
    color: #333;
    font-size: 16px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: var(--primary);
      color: white;
    }
  }
`;

const AboutTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Devansh",
      role: "Tech Lead & Backend Architect",
      skills: "Backend systems, architecture, code reviews, Management",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Tanishka",
      role: "UI/UX Designer & Frontend Lead",
      skills: "Wireframes, Figma, responsive frontend",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Atharva",
      role: "DevOps & Automation Lead",
      skills: "CI/CD, deployments, Docker, infrastructure",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Vinayak",
      role: "Full-Stack Developer & .NET Specialist",
      skills: "Web development, APIs, databases",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Shreyas",
      role: "Project Manager & Client Liaison",
      skills: "Clients, proposals, scheduling",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Bhagyesh",
      role: "Business Strategist & Marketing Lead",
      skills: "Strategy, outreach, branding",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 7,
      name: "Jayshree",
      role: "Android App Development Lead",
      skills: "App Development, Optimization",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <TeamSection id="team">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
        </div>
        
        <TeamGrid>
          {teamMembers.map(member => (
            <TeamCard key={member.id}>
              <ProfileImage className="profile-img">
                <img src={member.image} alt={member.name} />
              </ProfileImage>
              <TeamMemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberSkills>{member.skills}</MemberSkills>
                <SocialLinks>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </SocialLinks>
              </TeamMemberInfo>
            </TeamCard>
          ))}
        </TeamGrid>
      </div>
    </TeamSection>
  );
};

export default AboutTeam;