// src/DroplinePanel.js
import React from 'react';
import styles from './DroplinePanel.module.css';

const DroplinePanel = ({ icon, textLine1, textLine2 }) => {
  if (!textLine1 && !textLine2) {
    return null; // Don't render if there's no text
  }
  
  return (
    <div className={styles['dropline-panel']}>
      {icon && <img src={icon} alt="Info Icon" className={styles['dropline-icon']} />}
      <div className={styles['text-container']}>
        {textLine1 && <span className={styles['text-line-1']}>{textLine1}</span>}
        {textLine2 && <span className={styles['text-line-2']}>{textLine2}</span>}
      </div>
    </div>
  );
};

export default DroplinePanel;
