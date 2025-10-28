// src/Scoreboard.js
import React from 'react';
import styles from './Scoreboard.module.css';

const Scoreboard = ({ matchData }) => {
  const { teamA, teamB } = matchData;

  const renderTimeouts = (team) => {
    return [...Array(2)].map((_, index) => (
      <div
        key={index}
        className={`${styles['timeout-indicator']} ${index < team.timeoutsUsed ? styles.used : ''}`}
      ></div>
    ));
  };

  return (
    <div className={styles['scoreboard-container']}>
      {/* Team A */}
      <div className={styles['team-info']}>
        <img src={teamA.logo} alt={teamA.name} className={styles['team-logo']} />
        <div className={styles['name-details']}>
          <div className={styles['name-and-indicator']}>
            <span className={styles['team-name']}>{teamA.name}</span>            
          </div>
          <div className={styles['timeouts-container']}>{renderTimeouts(teamA)}</div>
        </div>
        {teamA.isServing && <div className={`${styles['serving-indicator']} ${styles.left}`}></div>}
      </div>

      {/* Scores and Sets */}
      <div className={styles['match-details']}>
        <span className={styles['team-score']}>{teamA.score}</span>
        <span className={styles['sets-score']}>{teamA.sets}-{teamB.sets}</span>
        <span className={styles['team-score']}>{teamB.score}</span>
      </div>

      {/* Team B */}
      <div className={styles['team-info']}>
            {teamB.isServing && <div className={`${styles['serving-indicator']} ${styles.right}`}></div>}
        <div className={styles['name-details']}>
          <div className={styles['name-and-indicator']}>
            <span className={styles['team-name']}>{teamB.name}</span>
          </div>
          <div className={styles['timeouts-container']}>{renderTimeouts(teamB)}</div>
        </div>
        <img src={teamB.logo} alt={teamB.name} className={styles['team-logo']} />
      </div>
    </div>
  );
};

export default Scoreboard;
