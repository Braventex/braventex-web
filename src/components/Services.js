import React from 'react';
import styled from 'styled-components';
import { FaGlobe, FaMobile, FaRobot, FaLaptopCode } from 'react-icons/fa';

const ServicesSection = styled.section`
  background-color: #f9f9f9;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 40px 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    
    .icon {
      background-color: var(--primary);
      color: white;
    }
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgba(5, 130, 202, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  font-size: 32px;
  color: var(--primary);
  transition: all 0.3s ease;
  
  &.icon {
    transition: all 0.3s ease;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--secondary-dark);
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.7;
`;

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaGlobe />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies. We create engaging, user-friendly digital experiences that help businesses establish strong online presence and connect with their audience effectively."
    },
    {
      id: 2,
      icon: <FaMobile />,
      title: "Android App Development",
      description: "Native and cross-platform mobile applications designed for exceptional user experience. Our mobile solutions combine intuitive interfaces with robust functionality, ensuring your app stands out in the competitive digital marketplace."
    },
    {
      id: 3,
      icon: <FaRobot />,
      title: "AI/ML Solutions",
      description: "Custom artificial intelligence and machine learning applications that solve complex problems and automate processes. We help businesses harness the power of data and intelligent algorithms to make informed decisions and gain competitive advantage."
    },
    {
      id: 4,
      icon: <FaLaptopCode />,
      title: "Product & Software Development",
      description: "End-to-end product development services from ideation to deployment. We transform concepts into market-ready solutions, focusing on quality, performance, and user experience to deliver software products that meet real-world needs."
    }
  ];

  return (
    <ServicesSection id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        
        <ServiceGrid>
          {services.map(service => (
            <ServiceCard key={service.id}>
              <ServiceIcon className="icon">
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </div>
    </ServicesSection>
  );
};

export default Services;