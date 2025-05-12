import React from 'react';
import LandingPage from './components/LandingPage';
import AboutCompany from './components/AboutCompany';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AboutTeam from './components/AboutTeam';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <LandingPage />
      <AboutCompany />
      <Services />
      <Portfolio />
      <AboutTeam />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;