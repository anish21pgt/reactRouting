import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const Services = ({ logout }) => {
  return (
    <>
      <Header />
      <div>
        <h1 style={{ textAlign: "center" }}>Our Services</h1>
        <div className='p-3'></div>

        <section>
          <h2>1. Membership Information</h2>
          <div className='p-3'></div>
          <div>
            <h3>Types of Memberships</h3>
            <p>
              <div className='p-3'></div>
              - <strong>Player Membership:</strong> Join as an active player and take part
              in our matches, tournaments, and training programs.
            </p>
            <p>
              - <strong>Supporter Membership:</strong> Show your love for the game and our
              club by becoming a supporter. Enjoy exclusive access to events and merchandise
              discounts.
            </p>
            <p>
              - <strong>Junior Membership:</strong> Nurture young talent with our dedicated
              youth development programs. Junior members benefit from specialized coaching
              and mentorship.
            </p>
          </div>

          <div>
            <div className='p-3'></div>
            <h3>Registration Process</h3>
            <div className='p-3'></div>
            <p>
              Becoming a member is easy! Follow these simple steps to join ABC Cricket Club:
            </p>
            <ol>
              <li>Explore our membership types.</li>
              <li> Click <Link to="/PlayerRegistration">[here]</Link> to fill out the online registration form.</li>
              <li>Complete the payment process securely through our website.</li>
            </ol>
          </div>
        </section>

        <section>
          <div className='p-3'></div>
          <h2>2. Training Programs</h2>
          <div className='p-3'></div>
          <div>
            <h3>Coaching Services</h3>
            <div className='p-3'></div>
            <p>
              Our professional coaching staff is dedicated to enhancing your cricket skills. Whether
              you're a beginner or an experienced player, our personalized coaching sessions will
              help you reach your full potential.
            </p>
          </div>

          <div>
            <div className='p-3'></div>
            <h3>Youth Development</h3>
            <div className='p-3'></div>
            <p>
              Invest in the future of cricket with our youth development programs. We focus on
              skill-building, teamwork, and fostering a passion for the game in young players.
            </p>
          </div>

          <div>
            <div className='p-3'></div>
            <h3>Specialized Training</h3>
            <div className='p-3'></div>
            <p>
              Hone your batting, bowling, and fielding skills through our specialized training
              sessions. Led by experienced coaches, these sessions target specific aspects of
              the game to elevate your performance.
            </p>
          </div>
        </section>
        <div className='p-3'></div>
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
        <div className='p-3'></div>

      </div>
      <Footer />
    </>
  );
};

export default Services;
