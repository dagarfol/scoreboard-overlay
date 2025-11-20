import React, { useState, useEffect } from 'react';
import styles from "./SponsorsPanel.module.css";
import useComponentVisibility from './hooks/useComponentVisibility';

const SponsorsPanel = ({ sponsorsConfig }) => {
    const { imageUrls, displayTime, enabled } = sponsorsConfig;
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, displayTime);

        return () => clearInterval(interval);
    }, [imageUrls.length, displayTime]);

    const { isVisible, animationClass } = useComponentVisibility(enabled, 500);
    if (!isVisible) return null;

    return (
        <div className={`${styles.panel}  ${styles[animationClass]}`}>
            <h2 className={styles.title}>Nuestros patrocinadores:</h2>
            <div className={styles.imageContainer}>
                {imageUrls.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Patrocinador ${index + 1}`}
                        className={styles.image}
                        style={{
                            opacity: index === currentIndex ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SponsorsPanel;
