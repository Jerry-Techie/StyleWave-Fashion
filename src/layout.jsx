import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import './styles/global.module.scss';
import { AnimatePresence, motion } from "framer-motion";
import { FaTwitter, FaFacebookSquare, FaTwitterSquare, FaSearch, FaInstagramSquare } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

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
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  flex: 1;
`;

const Heading = styled.h1`
  font-size: var(--primary-text-size);
  margin: 0;
  text-align: center;
  flex: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  cursor: pointer;
  margin-right:30px;
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
  }

  li a:hover {
    text-decoration: underline;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background: #222;
  color: #fff;
  text-align: center;
  padding: 2rem;
  width: 100%;
`;

export default function Layout() {
  return (
    <PageWrapper>
      <motion.header
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1 }}
      >
        <TopHeader>
          <SocialIcons>
            <FaTwitter size={20} />
            <FaFacebookSquare size={20} />
            <FaTwitterSquare size={20} />
            <FaInstagramSquare size={20} />
          </SocialIcons>

          <Heading>StyleWave</Heading>

          <SearchContainer>
            Search <FaSearch size={18} style={{ marginLeft: '10px' }} />
          </SearchContainer>

          <FaCartShopping style={{marginRight:'12px'}}/>
        </TopHeader>

        <Navigation>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/showroom">Showroom</Link></li>
            <li><Link to="/staffs">Staffs</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </Navigation>
      </motion.header>

      <Main>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </Main>

      <Footer>
        © 2026 StlyeWave. All rights reserved.
      </Footer>
    </PageWrapper>
  );
}