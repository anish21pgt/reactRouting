import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.companyName}>ABC Cricket Club &reg;</p>
        <p style={styles.rights}>&copy; All Rights Reserved</p>
        <div style={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={styles.icon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={styles.icon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={styles.icon} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  socialLinks: {
    display: 'flex',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#fff',
    margin: '0 10px',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#ffd700',
    },
  },
};

export default Footer;

