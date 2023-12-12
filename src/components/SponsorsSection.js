import React from 'react';

const SponsorsSection = () => {
  const images = [
    require('../images/sponsor1.jpeg'),
    require('../images/sponsor2.jpeg'),
    require('../images/sponsor3.jpeg')
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '200px',
    height: '150px',
    margin: '20px',
  };

  return (
    <div>
      <div style={containerStyle}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Sponsor ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;

