import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const UserList = () => {
  const groupAPlayers = [
    "John Smith",
    "David Johnson",
    "Michael Taylor",
    "Christopher Martinez",
    "Jessica White",
    "Andrew Robinson",
    "Lauren Brown",
    "Ryan Davis",
    "Emma Wilson",
    "Matthew Miller",
    "Olivia Jackson",
  ];

  const groupBPlayers = [
    "Emily White",
    "Matthew Brown",
    "Olivia Wilson",
    "Daniel Anderson",
    "Sophia Taylor",
    "Ethan Moore",
    "Ava Martinez",
    "Jackson Davis",
    "Mia Miller",
    "Logan Johnson",
    "Grace Smith",
  ];

  const groupCPlayers = [
    "Daniel Miller",
    "Sophia Davis",
    "Jackson Anderson",
    "Ella Smith",
    "Elijah White",
    "Avery Johnson",
    "Aiden Wilson",
    "Scarlett Taylor",
    "Carter Martinez",
    "Madison Brown",
    "Lucas Robinson",
  ];

  return (
    <>
      <Header />
      <div className="centered-content">
        <div className="group-row">
          <div className="player-list">
            <h2>Group A Players</h2>
            <ul>
              {groupAPlayers.map((player, index) => (
                <li key={index}>{player}</li>
              ))}
            </ul>
          </div>

          <div className="player-list">
            <h2>Group B Players</h2>
            <ul>
              {groupBPlayers.map((player, index) => (
                <li key={index}>{player}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="player-list">
          <h2>Group C Players</h2>
          <ul>
            {groupCPlayers.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-4"></div>
      <Footer />
    </>
  );
};

export default UserList;
