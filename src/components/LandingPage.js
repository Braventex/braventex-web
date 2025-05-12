import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import WebFont from 'webfontloader';

const LandingSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const LandingContent = styled.div`
  z-index: 1;
  color: white;
`;

const BrandContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
`;

const Logo = styled.div`
  img {
    max-width: 400px;
    height: auto;
    vertical-align: middle;
  }
`;

const CompanyName = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  margin-top: -140px;
  margin-bottom: 0; // Add this to remove bottom margin
  color: #003865;
  letter-spacing: 1px;
  font-family: "Museo Sans Rounded", "Nunito Sans", sans-serif;
  line-height: 1;
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  margin: 5px 0 30px; // Changed from 15px to 5px top margin
  font-weight: 300;
  color: #006747;
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
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito Sans:700,900']
      }
    });
  }, []);

  return (
    <LandingSection id="home">
      <LandingContent className="container">
        <BrandContainer>
          <Logo>
            <img src="/logo.svg" alt="Braventex Logo" />
          </Logo>
          <CompanyName>Braventex</CompanyName>
        </BrandContainer>
        <Tagline>Think. Plan. Build.</Tagline>
        <Link to="about" smooth={true} duration={500}>
          <ScrollButton>Discover More</ScrollButton>
        </Link>
      </LandingContent>
    </LandingSection>
  );
};

export default LandingPage;