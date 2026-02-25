import React, { useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import Img1 from './../asset/block1.jpg';
import Img2 from './../asset/block2.jpg';
import Img3 from './../asset/block3.jpg';
import female from './../asset/women.jpg';
import male from './../asset/male.jpg';
import underwear from './../asset/underwear.jpg';
import home from './../asset/home.jpg';
import { FaArrowCircleRight, FaSearch } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

const theme = {
  primary: "#e63946",
  secondary: "#1d3557",
  text: "#333",
  white: "#ffffff",
  lightGray: "#f4f4f4",
  overlay: "rgba(34, 31, 31, 0.6)",
  black: '#000000'
};

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  color: ${theme.text};
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 100%; 
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: ${props => props.$flexDir || 'row'};
  justify-content: ${props => props.$justify || 'center'};
  align-items: ${props => props.$align || 'stretch'};
  gap: ${props => props.$gap || '0px'};
  
  @media (max-width: 768px) {
    /* Enable horizontal scrolling for the hero slider */
    flex-direction: ${props => props.$isHero ? 'row' : 'column'};
    overflow-x: ${props => props.$isHero ? 'auto' : 'visible'};
    scroll-snap-type: ${props => props.$isHero ? 'x mandatory' : 'none'};
    &::-webkit-scrollbar { display: none; }
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
`;

const Hero = styled.section`
  background: ${theme.white};
  padding: 0; 
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
  color: ${theme.secondary};
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ImageBlock = styled(motion.div)`
  position: relative;
  background: url(${props => props.$bg});
  background-position: center;
  background-size: cover;
  height: ${props => props.$height || '500px'};
  width: ${props => props.$width || '350px'};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  flex-shrink: 0;
  scroll-snap-align: start;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: ${theme.overlay};
    transition: background-color 0.3s ease;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100vw !important; 
    height: 550px !important;
    flex-basis: 100vw;
  }
`;

const ImageBlockContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  ${Heading} {
    color: ${theme.white};
    font-size: 1.3rem;
    margin: 0.5rem 0 0 0;
  }
`;

const Tag = styled.div`
  display: inline-block;
  padding: 8px 15px;
  background-color: ${theme.primary};
  color: ${theme.white};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const Case = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  
  @media (max-width: 768px) {
    /* display: contents makes the children behave as direct children of the slider */
    display: contents; 
  }
`;

const Section = styled.section`
  padding: 5rem 0;
  text-align: center;
  background-color: ${props => props.$bg || theme.lightGray};
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: ${theme.primary};
  margin: 0 auto 3rem auto;
  border-radius: 2px;
`;

const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0px;
  width: 100%;
`;

const CarCard = styled(motion.div)`
  padding: 2.5rem;
  background: white;
  text-align: left;
  border: 1px solid #f0f0f0;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
`;

const PrimaryBtn = styled(Button)`
  background: ${theme.black};
  color: ${theme.white};
`;

const SecondaryBtn = styled(Button)`
  background: ${theme.black};
  color: ${theme.white};
  width: 100%;
`;

const CTA = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background-color: ${theme.primary};
  color: ${theme.white};
`;

export default function Home() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let currentSlide = 0;
    const totalSlides = 3; 

    const autoPlay = setInterval(() => {
      if (window.innerWidth <= 768) {
        currentSlide = (currentSlide + 1) % totalSlides;
        slider.scrollTo({
          left: currentSlide * window.innerWidth,
          behavior: 'smooth'
        });
      }
    }, 3000);
    return () => clearInterval(autoPlay);
  }, []);

  const fashions = [
    {name:'Women Clothes', price:'$12,000', img: female },
    {name:'Men Clothes', price:'$12,000', img: male },
    {name:'Underwears', price:'$120 - ???', img: underwear },
  ];

  return (
    <>
      <GlobalStyle />
      <Container>
        <Hero>
          <ContentWrapper ref={sliderRef} $gap="0px" $isHero>
            <ImageBlock $bg={Img1} $width="60%" $height="550px">
              <ImageBlockContent>
                <Tag>Fashion</Tag>
                <Heading>Lets Turn You To a Magnificient Beauty</Heading>
              </ImageBlockContent> 
            </ImageBlock>

            <Case>
              <ImageBlock $bg={Img2} $width="100%" $height="275px">
                <ImageBlockContent>
                  <Tag>Music</Tag>
                  <Heading>The Sound of Style</Heading>
                </ImageBlockContent>
              </ImageBlock>
              <ImageBlock $bg={Img3} $width="100%" $height="275px">
                <ImageBlockContent>
                  <Tag>Lifestyle</Tag>
                  <Heading>Define Your Era</Heading>
                </ImageBlockContent>
              </ImageBlock>
            </Case>
          </ContentWrapper>
        </Hero>

        <Section>
          <ContentWrapper $flexDir="column">
            <Heading>Featured Shopping Categories</Heading>
            <Divider />
            <CarGrid>
              {fashions.map((fashion, index) => (
                <CarCard key={index}>
                  <img src={fashion.img} alt={fashion.name} />
                  <h3>{fashion.name}</h3>
                  <p style={{color: theme.primary, fontWeight: 700}}>{fashion.price}</p>
                  <SecondaryBtn>View Details <FaSearch style={{marginLeft:'10px'}}/></SecondaryBtn>
                </CarCard>
              ))}
            </CarGrid>
          </ContentWrapper>
        </Section>

        <Section $bg={theme.white}>
          <ContentWrapper $justify="space-between" $gap="0px">
            <div style={{textAlign:'left', flex: 1, padding: '4rem'}}>
              <Heading>About Us</Heading>
              <Divider style={{margin: '0 0 2rem 0'}} />
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                At StyleWave, we believe that fashion and music are not just industries 
                they are the twin heartbeat of global culture. 
                We are the premier digital destination where the visual meets the audible.
                <br/><br/>
                Our mission is to bridge the gap between high-fashion aesthetics and the pulse of the music world. 
                We curate the trends that define the stage and the street.
              </p>
              <PrimaryBtn style={{ marginTop: '2.5rem' }}>Read More <FaArrowCircleRight style={{marginLeft: '10px'}}/></PrimaryBtn>
            </div>
            <ImageBlock $bg={home} $width="50%" $height="600px" />
          </ContentWrapper>
        </Section>

        <CTA>
          <ContentWrapper $flexDir="column">
            <Heading style={{color: 'white', fontSize:'1.2rem'}}>
              Get first dibs on limited edition releases and backstage content delivered straight to your inbox.
            </Heading>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <PrimaryBtn style={{background: 'white', color: 'black'}}>Order Yours Now</PrimaryBtn>
              <Button style={{ background: 'transparent', border: `2px solid ${theme.white}`, color: theme.white }}>
                Contact Sales
              </Button>
            </div>
          </ContentWrapper>
        </CTA>
      </Container>
    </>
  );
}