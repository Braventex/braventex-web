import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactSection = styled.section`
  background-color: #f9f9f9;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  margin-right: 20px;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--secondary-dark);
  margin-bottom: 8px;
`;

const InfoText = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--secondary-dark);
  margin-bottom: 25px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #555;
    font-size: 0.9rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-light);
    box-shadow: 0 0 0 2px rgba(0, 166, 251, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-light);
    box-shadow: 0 0 0 2px rgba(0, 166, 251, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactSection id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>
        
        <ContactContainer>
          <ContactInfo>
            <ContactInfoItem>
              <IconBox>
                <FaMapMarkerAlt />
              </IconBox>
              <InfoContent>
                <InfoTitle>Our Location</InfoTitle>
                <InfoText>Pune, Maharashtra, India</InfoText>
              </InfoContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <IconBox>
                <FaPhoneAlt />
              </IconBox>
              <InfoContent>
                <InfoTitle>Call Us</InfoTitle>
                <InfoText>+91 98765 43210</InfoText>
              </InfoContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <IconBox>
                <FaEnvelope />
              </IconBox>
              <InfoContent>
                <InfoTitle>Email Us</InfoTitle>
                <InfoText>info@braventex.com</InfoText>
              </InfoContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <IconBox>
                <FaClock />
              </IconBox>
              <InfoContent>
                <InfoTitle>Working Hours</InfoTitle>
                <InfoText>Monday - Friday: 9:00 AM - 6:00 PM</InfoText>
              </InfoContent>
            </ContactInfoItem>
          </ContactInfo>
          
          <FormContainer>
            <FormTitle>Send us a message</FormTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Your Name</label>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Your Email</label>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="subject">Subject</label>
                <FormInput 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Your Message</label>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
              
              {submitMessage && (
                <p style={{ marginTop: '20px', color: 'green' }}>{submitMessage}</p>
              )}
            </form>
          </FormContainer>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

export default ContactForm;