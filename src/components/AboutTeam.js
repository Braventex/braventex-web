import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const TeamSection = styled.section`
  background-color: #f9f9f9;
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;


const TeamCard = styled.div`
  background: transparent;
  text-align: center;
  transition: all 0.3s ease;
`;


const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  &:hover img {
    opacity: 0.2;
  }

  &:hover .social-overlay {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: all 0.4s ease;
  }
`;


const SocialOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 2;
`;


const TeamMemberInfo = styled.div`
  margin-top: 15px;
`;

const MemberName = styled.h3`
  font-size: 1.1rem;
  color: var(--dark);
  margin-bottom: 5px;
`;

const MemberRole = styled.p`
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: 500;
`;


const MemberSkills = styled.p`
  color: #666;
  font-size: 0.85rem;
  margin-bottom: 15px;
`;

const SocialLink = styled.a`
  width: 34px;
  height: 34px;
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-dark);
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
                <SocialOverlay className="social-overlay">
                  <SocialLink href={member.social.linkedin}><FaLinkedin /></SocialLink>
                  <SocialLink href={member.social.github}><FaGithub /></SocialLink>
                  <SocialLink href={member.social.twitter}><FaTwitter /></SocialLink>
                </SocialOverlay>
              </ProfileImage>
              <TeamMemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
              </TeamMemberInfo>
            </TeamCard>
          ))}
        </TeamGrid>
      </div>
    </TeamSection>
  );
};

export default AboutTeam;