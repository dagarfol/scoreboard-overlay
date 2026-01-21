import React, { createContext, useContext, useLayoutEffect, useState } from 'react';

const OverlayContext = createContext();

export const OverlayProvider = ({ children, width, height, connectionStatus }) => {
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        const updateScale = () => {
            // Cálculo de escala basado en las dimensiones recibidas por props
            const scaleX = window.innerWidth / width;
            const scaleY = window.innerHeight / height;
            setScale(Math.min(scaleX, scaleY));
        };

        window.addEventListener('resize', updateScale);
        updateScale();
        return () => window.removeEventListener('resize', updateScale);
    }, [width, height]);

    // Pasamos tanto la escala como las dimensiones originales
    return (
        <OverlayContext.Provider value={{ scale, width, height, connectionStatus }}>
            <ScalableCanvas>
                {children}
            </ScalableCanvas>
        </OverlayContext.Provider>
    );
};

export const useOverlay = () => useContext(OverlayContext);

export const ScalableCanvas = ({ children }) => {
    const { scale, width, height, connectionStatus } = useOverlay();

    const canvasStyle = {
        width: `${width}px`,
        height: `${height}px`,

        // Centrado y comportamiento
        position: 'absolute',
        top: '50%',
        left: '50%',
        transformOrigin: 'center',
        background: 'transparent',
        overflow: 'hidden',

        /* Forzar renderizado de alta calidad */
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',

        /* Indicar al navegador que use la GPU para suavizar el escalado */
        willChange: 'transform',
        transform: `translate(-50%, -50%) scale(${scale}) translateZ(0)`,
        containerType: 'size', // para usar con unidades de referencia CQI
        border: `${connectionStatus === 'no-connection' ? '1px dashed gray' : 'none'}`,
        boxSizing: 'border-box',
    };

    return (
        <div style={{
            width: '100dvw',
            height: '100dvh',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'transparent'
        }}>
            <div style={canvasStyle}>
                {children}
            </div>
        </div>
    );
};
