import React from "react";
import styled from "styled-components";

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
  min-height: 500px; /* ensures it stretches like the text section */
  display: flex;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      var(--primary-light),
      var(--primary-dark)
    );
    z-index: -1;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 992px) {
    min-height: auto;

    img {
      height: auto;
    }
  }
`;

const Content = styled.div`
  flex: 1;
`;

const SectionSubTitle = styled.h4`
  color: var(--primary-dark);
  font-size: 3rem;
  margin-bottom: 65px;
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

const ResponsiveWrapper = styled.div`
  @media (max-width: 768px) {
    ${SectionSubTitle} {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 35px;
    }

    ${AboutText} {
      font-size: 0.95rem;
      text-align: justify;
    }

    ${AboutContainer} {
      padding: 20px;
    }

    ${ImageContainer} {
      img {
        width: 100%;
        height: auto;
      }

      &:before {
        top: -10px;
        left: -10px;
      }
    }
  }

  @media (max-width: 480px) {
    ${SectionSubTitle} {
      font-size: 1.7rem;
    }

    ${AboutText} {
      font-size: 0.9rem;
    }

    ${ImageContainer} {
      min-height: auto;

      img {
        height: auto;
      }
    }
  }
`;

const AboutCompany = () => {
  return (
    <AboutSection id="about">
      <ResponsiveWrapper>
        <div className="container">
          <SectionSubTitle className="section-title">ABOUT US</SectionSubTitle>
          <AboutContainer>
            <ImageContainer>
              <img src="/AboutCompany.png" alt="About Braventex"/>
            </ImageContainer>

            <Content>
              {/* <SectionSubTitle>ABOUT US</SectionSubTitle> */}
              <AboutText>
                At Braventex, our journey began with a shared belief in{" "}
                <strong>“brave ventures for technology,”</strong> united by a
                passion to build tools that empower communities.
              </AboutText>
              <AboutText>
                Founded by seven friends—engineers, designers, and
                strategists—we combine diverse expertise to tackle complex
                challenges with clarity and creativity.
              </AboutText>
              <AboutText>
                We blend <strong>bravery, ventures, and technology</strong>
                —three pillars that define not only our name but also our
                purpose.
              </AboutText>
              <AboutText>
                From crafting intuitive websites for local governance bodies to
                offering scalable tech solutions for startups and enterprises,
                we bring creativity, agility, and reliability to every project
                we touch.
              </AboutText>
              <AboutText>
                Our vision is to become a trusted and forward-thinking
                technology partner, empowering businesses of all sizes through
                modern, efficient, and custom-built digital solutions.
              </AboutText>
            </Content>
          </AboutContainer>
        </div>
      </ResponsiveWrapper>
    </AboutSection>
  );
};

export default AboutCompany;
