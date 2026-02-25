import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import './styles/global.module.scss';
import { AnimatePresence } from "framer-motion";
import { FaTwitter, FaFacebookSquare, FaTwitterSquare, FaSearch, FaInstagramSquare, FaBars, FaTimes } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { useState } from 'react';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 2%; /* Reduced from 5% */
  max-width: 100%; /* Changed from 1400px to take full width */
  width: 100%;
  box-sizing: border-box;
  background: white;

  @media (max-width: 768px) {
    padding: 15px 15px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;
  @media (max-width: 992px) { /* Hidden earlier to prevent crowding */
    display: none;
  }
`;

const Heading = styled.h1`
  font-size: var(--primary-text-size);
  margin: 0;
  text-align: center;
  flex: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.3rem;
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
  font-weight: 500;
  @media (max-width: 992px) {
    display: none;
  }
`;

const MobileMenuBtn = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = styled.nav`
  background: black;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

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
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }

  li a:hover {
    color: #e63946;
  }

  @media (max-width: 768px) {
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    position: fixed; /* Fixed to cover screen */
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.95);
    z-index: 1000;
    
    ul {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    li a {
      font-size: 1.5rem;
    }
  }
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
`;

const Footer = styled.footer`
  background: #000;
  color: #fff;
  text-align: center;
  padding: 3rem 0; /* Removed horizontal padding */
  width: 100%;
  box-sizing: border-box;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
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
            <FaTwitter size={18} />
            <FaFacebookSquare size={18} />
            <FaTwitterSquare size={18} />
            <FaInstagramSquare size={18} />
          </SocialIcons>

          <Heading>StyleWave</Heading>

          <HeaderActions>
            <SearchContainer>
              SEARCH <FaSearch size={16} style={{ marginLeft: '8px' }} />
            </SearchContainer>
            <FaCartShopping size={20} />
            <MobileMenuBtn onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes color="white" /> : <FaBars />}
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