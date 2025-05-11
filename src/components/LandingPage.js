import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const LandingSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--dark);
  position: relative;
`;

const LandingContent = styled.div`
  z-index: 1;
  color: white;
`;

const Logo = styled.div`
  margin-bottom: 20px;
  
  img {
    max-width: 180px;
  }
`;

const CompanyName = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: white;
  letter-spacing: 3px;
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-weight: 300;
  color: var(--primary-light);
`;

const ScrollButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-3px);
  }
`;

const LandingPage = () => {
  return (
    <LandingSection id="home">
      <LandingContent className="container">
        <Logo>
          <img src="/logo.png" alt="Braventex Logo" />
        </Logo>
        <CompanyName>BRAVENTEX</CompanyName>
        <Tagline>Think. Plan. Build.</Tagline>
        <Link to="about" smooth={true} duration={500}>
          <ScrollButton>Discover More</ScrollButton>
        </Link>
      </LandingContent>
    </LandingSection>
  );
};

export default LandingPage;