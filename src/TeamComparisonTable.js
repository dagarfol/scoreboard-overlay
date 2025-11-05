// src/TeamComparisonTable.js
import React from 'react';
import styles from './TeamComparisonTable.module.css';
import useComponentVisibility from './hooks/useComponentVisibility';

const TeamComparisonTable = ({ matchDetails, enabled }) => {
  const { isVisible, animationClass } = useComponentVisibility(enabled, 500);
  if (!isVisible) return null;

  const stats = [
    { label: 'Ranking', key: 'ranking' },
    { label: 'Matches Played', key: 'matchesPlayed' },
    { label: 'Total Matches Won', key: 'totalMatchesWon' },
    { label: 'Won (3 pts)', key: 'won3Points' },
    { label: 'Won (2 pts)', key: 'won2Points' },
    { label: 'Total Matches Lost', key: 'totalMatchesLost' },
    { label: 'Lost (1 pt)', key: 'lost1Point' },
    { label: 'Lost (0 pts)', key: 'lost0Points' },
    { label: 'Total Points Scored', key: 'totalPointsScored' },
    { label: 'Total Points Received', key: 'totalPointsReceived' },
  ];

  return (
    <div className={`${styles['comparison-wrapper']} ${styles[animationClass]}`}>
      <table className={styles['comparison-table']}>
        <thead>
          <tr>
            <th className={styles['header-cell']}>
              <div>
                <img src={matchDetails.teamLogos.teamA} alt={matchDetails.teams.teamA} className={styles['team-logo']} />
                <div className={styles['team-name']}>{matchDetails.teams.teamA}</div>
              </div>
            </th>
            <th className={styles['empty-cell']}></th>
            <th className={styles['header-cell']}>
              <div>
                <img src={matchDetails.teamLogos.teamB} alt={matchDetails.teams.teamB} className={styles['team-logo']} />
                <div className={styles['team-name']}>{matchDetails.teams.teamB}</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat, index) => (
            <tr key={index}>
              <td className={styles['stat-value']}>{matchDetails.stats.teamA[stat.key]}</td>
              <td className={styles['stat-label']}>{stat.label}</td>
              <td className={styles['stat-value']}>{matchDetails.stats.teamB[stat.key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamComparisonTable;
