import React from 'react';

const StarPlayers = () => {
  const playerData = [
    { name: 'Sachin Tendulkar', image: require('../images/starplayer1.jpeg') },
    { name: 'Rohit Sharma', image: require('../images/starplayer2.jpeg') },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const playerContainerStyle = {
    margin: '20px',
  };

  const imageStyle = {
    width: '400px',
    height: '400px',
  };

  return (
    <div>
      <div style={containerStyle}>
        {playerData.map((player, index) => (
          <div key={index} style={playerContainerStyle}>
            <img src={player.image} alt={`Star Player ${index + 1}`} style={imageStyle} />
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarPlayers;


