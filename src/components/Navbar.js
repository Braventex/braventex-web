import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled.nav`
  position: fixed;
  top: ${({ show }) => (show ? "0" : "-90px")};
  left: 0;
  width: 100%;
  z-index: 999;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: top 0.4s ease-in-out;
`;

const NavWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: #003865;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  margin-left: -100px;

  @media (max-width: 768px) {
    margin-left: -10px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 50px;
  margin-right: -50px;
  text-align: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 280px;
    height: calc(100vh - 80px);
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    padding: 30px 0;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li``;

const NavLinkStyled = styled(Link)`
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--dark);
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  text-decoration: none;
  padding-bottom: 5px;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background: var(--primary-dark);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: var(--primary-dark);
    transform: scale(1.05);
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: var(--primary-dark);
  }

  &.active::after {
    width: 100%;
  }
`;


const MobileIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: var(--primary-dark);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");
  const hideTimeout = useRef(null);

  const toggleMobileMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
    closeMenu();
  };

  // Handle scroll with delayed hide
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(true);

      if (hideTimeout.current) clearTimeout(hideTimeout.current);

      if (currentSection !== "home") {
        hideTimeout.current = setTimeout(() => {
          setShowNavbar(false);
        }, 2500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [currentSection]);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setCurrentSection(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    const sectionIds = [
      "home",
      "about",
      "services",
      "portfolio",
      "blog",
      "team",
      "contact",
    ];
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "portfolio", label: "Portfolio" },
    { to: "blog", label: "Blog" },
    { to: "team", label: "Team" },
    { to: "contact", label: "Contact Us" },
  ];

  return (
    <NavbarContainer show={showNavbar}>
      <NavWrapper>
        <Logo onClick={scrollToTop}>Braventex</Logo>

        <MobileIcon onClick={toggleMobileMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavLinks open={open}>
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <NavLinkStyled
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                activeClass="active"
              >
                {item.label}
              </NavLinkStyled>
            </NavItem>
          ))}
        </NavLinks>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
