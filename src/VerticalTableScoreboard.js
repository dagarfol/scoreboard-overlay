// src/VerticalScoreboard.js
import React from 'react';
import styles from './VerticalTableScoreboard.module.css'; // Note: The previous example used the table module, so we'll stick with that naming.

const VerticalTableScoreboard = ({ matchData }) => {
  const { teamA, teamB } = matchData;

  const renderTeamRow = (team) => {
    const timeoutIndicators = [...Array(2)].map((_, index) => (
      <div
        key={index}
        className={`${styles['timeout-indicator']} ${index < team.timeoutsUsed ? styles.used : ''}`}
      ></div>
    ));

    return (
      <tr>
        <td className={styles['team-cell']}>
          <div className={styles['team-cell-content']}>
            <img src={team.logo} alt={team.name} className={styles['team-logo']} />
            <span className={styles['team-name']}>{team.name}</span>
          </div>
          <div className={styles['team-cell-indicators']}>
            <div className={styles['timeouts-container']}>{timeoutIndicators}</div>
            {team.isServing && <div className={styles['serving-indicator']}></div>}
          </div>
        </td>
        <td className={styles['sets-won-cell']}>{team.sets}</td>
        {team.setPoints.map((set, index) => (
          <td key={index} className={styles['set-points-cell']}>
            {set.points}
          </td>
        ))}
        <td className={styles['current-score-cell']}>{team.score}</td>
      </tr>
    );
  };

  return (
    <div className={styles['table-container']}>
      <table className={styles['scoreboard-table']}>
        <tbody>
          {renderTeamRow(teamA)}
          {renderTeamRow(teamB)}
        </tbody>
      </table>
    </div>
  );
};

export default VerticalTableScoreboard;
