import React, { useEffect } from 'react';
import founderImage from '../images/founder.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SponsorsSection from '../components/SponsorsSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import StarPlayers from '../components/StarPlayers';

const Dashboard = () => {


  const paragraphStyle = {
    fontFamily: 'Times New Roman',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const sectionStyle = {
    overflowX: 'hidden',
  };

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';


    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  return (
    <>
      <Header />
      <div className="section" style={sectionStyle}>
        <h1 style={{ textAlign: "center", fontFamily: 'Times New Roman', fontWeight: "bold" }}>Founders Message</h1>
        <div className='p-3'></div>
        <img src={founderImage} alt="Founder" style={{ width: '300px', height: '300px', float: "left", paddingRight: '30px' }} />

        {[1, 2, 3, 4, 5].map((index) => (
          <p key={index} style={{ ...paragraphStyle }}>
            {index === 1 && "We are thrilled to welcome you to the official website of ABC Cricket Club! Whether you're a passionate cricket enthusiast, a dedicated player, or just curious about our club, you've come to the right place."}
            {index === 2 && "At ABC Cricket Club, we are not just a team, we are a community of individuals who share a common love for the game of cricket. Our club is built on the principles of sportsmanship, teamwork, and a commitment to excellence both on and off the field."}
            {index === 3 && "Explore our website to discover the latest news, match updates, player profiles, and exciting events. Whether you're a seasoned player or someone new to the sport, there's a place for everyone in our cricket family. We believe in fostering a welcoming and inclusive environment where every member can thrive and make lasting memories."}
            {index === 4 && "Join us on this incredible journey as we continue to grow, learn, and celebrate the spirit of cricket together. Feel free to reach out if you have any questions or if you're interested in becoming a part of."}
            {index === 5 && "Thank you for visiting, and we look forward to sharing many exciting moments with you!"}
          </p>
        ))}
      </div>
      <div className="p-4"></div>
      <h1 style={{ textAlign: "center", fontFamily: 'Times New Roman', fontWeight: "bold" }}>Our Sponsors</h1>
      <div className="p-3"></div>
      <SponsorsSection />
      <div className="p-4"></div>
      <h1 style={{ textAlign: "center", fontFamily: 'Times New Roman', fontWeight: "bold" }}>Testimonials</h1>
      <div className="p-3"></div>
      <TestimonialCarousel />
      <div className="p-5"></div>
      <h1 style={{ textAlign: "center", fontFamily: 'Times New Roman', fontWeight: "bold" }}>Our Star Players</h1>
      <div className="p-3"></div>
      <StarPlayers />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Dashboard;



