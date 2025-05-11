// filepath: src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  background-color: white;
`;

const TestimonialCard = styled.div`
  margin: 20px 15px;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const QuoteIcon = styled.div`
  font-size: 30px;
  color: var(--primary-light);
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
  font-style: italic;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ClientImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ClientDetails = styled.div``;

const ClientName = styled.h4`
  font-size: 1.1rem;
  color: var(--secondary-dark);
  margin-bottom: 5px;
`;

const ClientCompany = styled.p`
  font-size: 0.85rem;
  color: var(--primary);
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      text: "The rural digitization portal built by Braventex has transformed how our community accesses government services. Their team took the time to understand our unique challenges and delivered a solution that truly bridges the digital divide.",
      name: "Rajesh Patel",
      company: "Village Council Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      text: "Working with Braventex on our AgriTech app was a fantastic experience. Their young team brought fresh perspectives and technical expertise that made our vision a reality. The app has been embraced by farmers across three districts.",
      name: "Anjali Sharma",
      company: "Agricultural Cooperative",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      text: "The career guidance AI solution from Braventex has revolutionized how we advise students. What impresses me most is how quickly they adapted the system based on our feedback. The team's commitment to making a real impact is evident in their work.",
      name: "Prof. Sanjay Mehta",
      company: "College Career Center",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      text: "As a small business owner, I was hesitant about going digital. The Braventex team made the transition smooth and stress-free. Their digitization suite helped us reach customers online during the pandemic, literally saving our business.",
      name: "Priya Desai",
      company: "Local Artisan Shop",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <TestimonialsSection id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
        </div>
        
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id}>
              <TestimonialCard>
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                <TestimonialText>
                  {testimonial.text}
                </TestimonialText>
                <ClientInfo>
                  <ClientImage>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </ClientImage>
                  <ClientDetails>
                    <ClientName>{testimonial.name}</ClientName>
                    <ClientCompany>{testimonial.company}</ClientCompany>
                  </ClientDetails>
                </ClientInfo>
              </TestimonialCard>
            </div>
          ))}
        </Slider>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;