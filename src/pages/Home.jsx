import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Img1 from './../asset/block1.jpg';
import Img2 from './../asset/block2.jpg';
import Img3 from './../asset/block3.jpg';
import female from './../asset/women.jpg';
import male from './../asset/male.jpg';
import underwear from './../asset/underwear.jpg';
import home from './../asset/home.jpg';
import { FaArrowCircleRight, FaSearch } from "react-icons/fa";

const theme = {
  primary: "#e63946",
  secondary: "#1d3557",
  text: "#333",
  white: "#ffffff",
  lightGray: "#f4f4f4",
  overlay: "rgba(34, 31, 31, 0.6)",
  black: '#000000'
};

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: ${props => props.$flexDir || 'row'};
  justify-content: ${props => props.$justify || 'center'};
  align-items: ${props => props.$align || 'center'};
  gap: ${props => props.$gap || '2px'};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  color: ${theme.text};
  overflow-x: hidden;
`;

const Hero = styled.section`
  background: ${theme.white};
  padding: 4rem 2rem;
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
  border-radius: 4px;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: ${theme.overlay};
    transition: background-color 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100% !important;
    height: 350px !important;
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
    text-align: left;
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
  gap: 2px;
  width: 100%;
`;

const Section = styled.section`
  padding: 5rem 2rem;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  width: 100%;
`;

const CarCard = styled(motion.div)`
  padding: 1.5rem;
  border-radius: 16px;
  background: ${theme.white};
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  text-align: left;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${theme.secondary};
  }

  p {
    font-weight: 700;
    color: ${theme.primary};
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 0.9rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const PrimaryBtn = styled(Button)`
  background: ${theme.black};
  color: ${theme.white};
  &:hover { background: #333; }
`;

const SecondaryBtn = styled(Button)`
  background: ${theme.black};
  color: ${theme.white};
  width: 100%;
  &:hover { background: #222; }
`;

const CTA = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background-color: ${theme.primary};
  color: ${theme.white};
`;

export default function Home() {
  const fashions = [
    {name:'Women Clothes', price:'$12,000', img: female },
    {name:'Men Clothes', price:'$12,000', img: male },
    {name:'Underwears', price:'$120 - ???', img: underwear },
  ];

  return (
    <Container>
      <Hero>
        <ContentWrapper $gap="2px">
          <ImageBlock 
            $bg={Img1} 
            $width="60%" 
            $height="522px"
            whileHover={{ scale: 1.01 }}
          >
            <ImageBlockContent>
              <Tag>Limited Edition</Tag>
              <Heading style={{ fontSize: '2.4rem', lineHeight: '1.2' }}>
                Lets Turn You To a Magnificient Beauty
              </Heading>
              <p style={{ color: 'white', marginBottom: '1.5rem', opacity: 0.9, maxWidth: '400px' }}>
                Explore the latest trends in fashion and music culture.
              </p>
              <PrimaryBtn style={{ background: theme.primary }}>
                Shop Collection
              </PrimaryBtn>
            </ImageBlockContent> 
          </ImageBlock>
          
          <Case style={{ width: '40%' }}>
            <ImageBlock 
              $bg={Img2} 
              $width="100%" 
              $height="260px"
              whileHover={{ scale: 1.01 }}
            >
              <ImageBlockContent>
                <Tag>Music</Tag>
                <Heading>The Sound of Style</Heading>
              </ImageBlockContent>
            </ImageBlock>
            <ImageBlock 
              $bg={Img3} 
              $width="100%" 
              $height="260px"
              whileHover={{ scale: 1.01 }}
            >
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
              <CarCard 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img src={fashion.img} alt={fashion.name} />
                <h3>{fashion.name}</h3>
                <p>{fashion.price}</p>
                <SecondaryBtn>
                  View Details <FaSearch style={{marginLeft:'10px'}}/>
                </SecondaryBtn>
              </CarCard>
            ))}
          </CarGrid>
        </ContentWrapper>
      </Section>

      <Section $bg={theme.white}>
        <ContentWrapper $justify="space-between" $gap="4rem">
          <div style={{ textAlign: 'left', flex: 1 }}>
            <Heading style={{textAlign: 'left'}}>About Us</Heading>
            <Divider style={{ margin: '0 0 2rem 0' }} />
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              At StyleWave, we believe that fashion and music are not just industries 
              they are the twin heartbeat of global culture. 
              We are the premier digital destination where the visual meets the audible.
              <br/><br/>
              Our mission is to bridge the gap between high-fashion aesthetics and the pulse of the music world. 
              We curate the trends that define the stage and the street.
            </p>
            <PrimaryBtn style={{ marginTop: '2.5rem' }}>
              Read More <FaArrowCircleRight style={{ marginLeft: '10px' }}/>
            </PrimaryBtn>
          </div>
          <ImageBlock 
            $bg={home} 
            $width="450px" 
            $height="520px" 
            style={{ borderRadius: '16px' }}
          />
        </ContentWrapper>
      </Section>

      <CTA>
        <ContentWrapper $flexDir="column">
          <Heading style={{ color: theme.white, fontSize: '1.2rem', maxWidth: '600px' }}>
            Get first dibs on limited edition releases and backstage content delivered straight to your inbox.
          </Heading>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            <PrimaryBtn style={{ background: theme.white, color: theme.black }}>
              Order Yours Now
            </PrimaryBtn>
            <Button style={{ background: 'transparent', border: `2px solid ${theme.white}`, color: theme.white }}>
              Contact Sales
            </Button>
          </div>
        </ContentWrapper>
      </CTA>
    </Container>
  );
}