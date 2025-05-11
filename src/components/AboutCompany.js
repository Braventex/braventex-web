import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background: linear-gradient(to right, #fff, #f7f7f7);
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-light), var(--primary-dark));
    z-index: -1;
    border-radius: 10px;
  }
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Content = styled.div`
  flex: 1;
`;

const SectionSubTitle = styled.h4`
  color: var(--primary);
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: var(--dark);
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #555;
`;

const AboutCompany = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <AboutContainer>
          <ImageContainer>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="About Braventex" />
          </ImageContainer>
          
          <Content>
            <SectionSubTitle>ABOUT US</SectionSubTitle>
            <AboutTitle>Our Journey & Vision</AboutTitle>
            <AboutText>
              Braventex was founded by seven friends — Devansh, Atharva, Vinayak, Bhagyesh, Shreyas, Jayshree and Tanishka — after a post-exam café conversation about escaping the corporate loop. Instead of settling for repetitive jobs, they chose to <strong>bravely venture into technology</strong> with a mission to build impactful digital solutions.
            </AboutText>
            <AboutText>
              Our name "Braventex" represents our core identity: <em>Brave Venture for Technology</em>. We started with a simple but powerful vision — to build real, impactful tech solutions that solve real-world problems.
            </AboutText>
            <AboutText>
              We're committed to bridging the digital divide, starting with rural communities, while continuously learning and growing through real-world client work. We operate with discipline, accountability, and professional tools — just like any established tech company.
            </AboutText>
            <AboutText>
              Today, we're proud to be on our journey of building meaningful digital solutions that make a difference, bringing technical expertise and creative approaches to every project we undertake.
            </AboutText>
          </Content>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default AboutCompany;