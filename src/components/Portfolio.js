import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const StyledSlider = styled(Slider)`
  .slick-slide {
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    opacity: 0.6;
    transform: scale(0.85);
  }

  .slick-center {
    transform: scale(1);
    opacity: 1;
    z-index: 3;
  }

  .slick-slide > div {
    display: flex;
    height: 100%;
  }

  @media (max-width: 768px) {
    .slick-slide {
      opacity: 1 !important;
      transform: scale(1) !important;
    }

    .slick-center {
      transform: scale(1) !important;
      opacity: 1 !important;
    }
  }
`;


const PortfolioSection = styled.section`
  background-color: #f9f9f9;
`;

const PortfolioCard = styled.div`
  width: 100%;
  max-width: 360px;
  height: 30rem;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;



const CardImage = styled.div`
  height: 50%;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 25px 20px;
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;


const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--secondary-dark);
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background-color: rgba(5, 130, 202, 0.1);
  color: var(--primary);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
`;



const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    centerMode: true,
    centerPadding: "0px", // ensures full-width center item
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const projects = [
    {
      id: 1,
      title: "Rural Digital Services Portal",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description:
        "A platform connecting rural communities with digital services, simplifying access to government programs and essential online resources.",
    },
    {
      id: 2,
      title: "AgriTech Mobile App",
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description:
        "An Android application helping farmers track crop cycles, weather patterns, and market prices to optimize agricultural productivity.",
    },
    {
      id: 3,
      title: "Student Career Advisor AI",
      category: "AI/ML",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description:
        "AI-powered career guidance tool for students, providing personalized educational path and job opportunity recommendations.",
    },
    {
      id: 4,
      title: "Local Business Digitization Suite",
      category: "Software Development",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description:
        "End-to-end solution helping small businesses establish online presence with integrated e-commerce, inventory, and customer management.",
    },
    {
      id: 5,
      title: "Community Health Tracker",
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description:
        "Web platform for monitoring community health metrics and connecting residents with local healthcare resources and wellness programs.",
    },
  ];

  return (
    <PortfolioSection id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Our Portfolio</h2>
        </div>

        <StyledSlider {...settings}>
          {projects.map((project) => (
            <div key={project.id}>
              <PortfolioCard>
                <CardImage>
                  <img src={project.image} alt={project.title} />
                </CardImage>
                <CardContent>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </CardContent>
              </PortfolioCard>
            </div>
          ))}
        </StyledSlider>
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;
