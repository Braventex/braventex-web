import React from 'react';
import styled from 'styled-components';
import { FaGlobe, FaMobile, FaRobot, FaLaptopCode } from 'react-icons/fa';

const ServicesSection = styled.section`
  background-color: #f9f9f9;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
      description: "We design responsive, high-performance websites and web applications using modern frameworks."
    },
    {
      id: 2,
      icon: <FaMobile />,
      title: "Android App Development",
      description: "Our team crafts intuitive, scalable Android apps that delight users and meet business objectives."
    },
    {
      id: 3,
      icon: <FaRobot />,
      title: "AI/ML Solutions",
      description: "From predictive models to data-driven insights, we leverage AI/ML to automate workflows and uncover opportunities."
    },
    {
      id: 4,
      icon: <FaLaptopCode />,
      title: "Product & Software Development",
      description: "End-to-end development of software products—from concept and architecture to deployment and support. "
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