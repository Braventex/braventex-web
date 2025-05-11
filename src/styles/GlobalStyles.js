import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-light: #00A6FB;
    --primary: #0582CA;
    --primary-dark: #006494;
    --secondary-dark: #003554;
    --dark: #051923;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    color: #333;
  }
  
  section {
    padding: 100px 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: var(--dark);
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
  }
  
  .section-title h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: var(--primary-dark);
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: var(--primary);
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
    
    .section-title h2 {
      font-size: 1.8rem;
    }
  }
`;

export default GlobalStyles;