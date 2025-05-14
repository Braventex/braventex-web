import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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

// Mobile Responsive Styles
const MobileResponsiveStyles = styled.div`
  @media (max-width: 768px) {
    ${TeamGrid} {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      padding: 0 20px;
    }

    ${TeamCard} {
      width: 100%;
      max-width: 300px;
    }

    ${ProfileImage} {
      width: 140px;
      height: 140px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    ${MemberName} {
      font-size: 1rem;
    }

    ${MemberRole}, ${MemberSkills} {
      font-size: 0.85rem;
    }

    ${SocialLink} {
      width: 30px;
      height: 30px;
      font-size: 12px;
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
      image: "/Devansh_Photo.png",
      social: {
        linkedin: "https://www.linkedin.com/in/devanshdubey1",
        github: "https://github.com/Devansh0012",
        twitter: "https://x.com/Big_Odev",
      },
    },
    {
      id: 2,
      name: "Tanishka",
      role: "UI/UX Designer & Frontend Lead",
      skills: "Wireframes, Figma, responsive frontend",
      image: "/Tanishka_Photo.png",
      social: {
        linkedin: "https://www.linkedin.com/in/tanishka-borse-88a150257",
        github: "https://github.com/Borsetanishka2003",
        twitter: "https://x.com/tanishkaborse02?t=6cq2QKdYwVj0gHgnPCAF4g&s=31",
      },
    },
    {
      id: 3,
      name: "Atharva",
      role: "DevOps & Automation Lead",
      skills: "CI/CD, deployments, Docker, infrastructure",
      image:"/Atharva_Photo.png",
      social: {
        linkedin: "https://www.linkedin.com/in/atharva-deo-b21b4a290/",
        github: "https://github.com/AtharvaDeo0603",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Vinayak",
      role: "Full-Stack Developer & .NET Specialist",
      skills: "Web development, APIs, databases",
      image: "/Vinayak_Photo.png",
      social: {
        linkedin: "https://www.linkedin.com/in/vinayak-gangrade-6361a022a/",
        github: "https://github.com/vinayak2103",
        twitter: "https://x.com/GangradeVinayak",
      },
    },
    {
      id: 5,
      name: "Shreyas",
      role: "Project Manager & Client Liaison",
      skills: "Clients, proposals, scheduling",
      image: "/Shreyas_Photo.png",
      social: {
        linkedin: "https://www.linkedin.com/in/shreyas-bidwai-750351200",
        github: "https://github.com/ShreyasBidwai",
        twitter: "#",
      },
    },
    {
      id: 6,
      name: "Bhagyesh",
      role: "Business Strategist & Marketing Lead",
      skills: "Strategy, outreach, branding",
      image: "/Bhagyesh_Photo.png",
      social: {
        linkedin: "https://www.linkedin.com/in/bhagyesh-gangurde-11ba16247",
        github: "https://github.com/Bhagyesh9",
        twitter: "https://x.com/Bhagyeshhh9?t=4Qp9mDIhTZIgXENeYhVxVg&s=09",
      },
    },
    {
      id: 7,
      name: "Jayshree",
      role: "Android App Development Lead",
      skills: "App Development, Optimization",
      image:"/Jayshree_Photo.png",
      social: {
        linkedin: "https://www.linkedin.com/in/jayshree-pangavhane-11b164204",
        github: "https://github.com/Jayshree2003",
        twitter: "#",
      },
    },
  ];

  return (
    <MobileResponsiveStyles>
      <TeamSection id="team">
        <div className="container">
          <div className="section-title">
            <h2>Our Team</h2>
          </div>

          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamCard key={member.id}>
                <ProfileImage className="profile-img">
                  <img src={member.image} alt={member.name} />
                  <SocialOverlay className="social-overlay">
                    <SocialLink href={member.social.linkedin}>
                      <FaLinkedin />
                    </SocialLink>
                    <SocialLink href={member.social.github}>
                      <FaGithub />
                    </SocialLink>
                    <SocialLink href={member.social.twitter}>
                      <FaTwitter />
                    </SocialLink>
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
    </MobileResponsiveStyles>
  );
};

export default AboutTeam;
