import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: var(--dark);
  color: white;
  padding: 40px 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
`;

const FooterColumn = styled.div`
  text-align: center;
`;

const FooterTitle = styled.h4`
  color: var(--primary-light);
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 24px;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-light);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #aaa;
`;

const ContactInfo = styled.p`
  color: #aaa;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <div className="container">
        <FooterContent>
          <FooterColumn>
            <FooterTitle>Connect With Us</FooterTitle>
            <SocialLinks>
              <SocialLink href="https://facebook.com/braventex" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://twitter.com/braventex" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://linkedin.com/company/braventex" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://instagram.com/braventex" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://github.com/braventex" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>Email: info@braventex.com</ContactInfo>
            <ContactInfo>Phone: +91 98765 43210</ContactInfo>
            <ContactInfo>Nashik, Maharashtra, India</ContactInfo>
          </FooterColumn>
        </FooterContent>

        <Copyright>
          © {currentYear} Braventex. All rights reserved.
        </Copyright>
      </div>
    </FooterSection>
  );
};

export default Footer;