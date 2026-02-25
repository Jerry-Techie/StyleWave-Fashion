import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import './styles/global.module.scss';
import { AnimatePresence, motion } from "framer-motion";
import { FaTwitter, FaFacebookSquare, FaTwitterSquare, FaSearch, FaInstagramSquare, FaBars, FaTimes } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { useState } from 'react';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px 5%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Heading = styled.h1`
  font-size: var(--primary-text-size);
  margin: 0;
  text-align: center;
  flex: 1;
  @media (max-width: 768px) {
    text-align: left;
    font-size: 1.5rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  gap: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuBtn = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = styled.nav`
  background: black;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 40px;
    margin: 0;
    padding: 0;
  }

  li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: var(--tertiary-text-size);
    transition: color 0.3s ease;
  }

  li a:hover {
    color: #e63946;
  }

  @media (max-width: 768px) {
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    background: black;
    z-index: 100;
    padding: 30px 0;
    
    ul {
      flex-direction: column;
      align-items: center;
      gap: 25px;
    }
  }
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background: #222;
  color: #fff;
  text-align: center;
  padding: 3rem 5%;
  width: 100%;
  box-sizing: border-box;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <PageWrapper>
      <header>
        <TopHeader>
          <SocialIcons>
            <FaTwitter size={20} />
            <FaFacebookSquare size={20} />
            <FaTwitterSquare size={20} />
            <FaInstagramSquare size={20} />
          </SocialIcons>

          <Heading>StyleWave</Heading>

          <HeaderActions>
            <SearchContainer>
              Search <FaSearch size={18} style={{ marginLeft: '10px' }} />
            </SearchContainer>
            <FaCartShopping size={20} />
            <MobileMenuBtn onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </MobileMenuBtn>
          </HeaderActions>
        </TopHeader>

        <Navigation $isOpen={isMenuOpen}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/showroom" onClick={() => setIsMenuOpen(false)}>Showroom</Link></li>
            <li><Link to="/staffs" onClick={() => setIsMenuOpen(false)}>Staffs</Link></li>
            <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </Navigation>
      </header>

      <Main>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </Main>

      <Footer>
        <div className="footer-content">
          <p>© 2026 StyleWave. All rights reserved.</p>
        </div>
      </Footer>
    </PageWrapper>
  );
}