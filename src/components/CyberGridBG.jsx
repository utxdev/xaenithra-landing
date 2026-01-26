import React from 'react';

const CyberGridBG = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
            {/* Base Grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                    animation: 'grid-move 20s linear infinite',
                }}
            />

            {/* Moving Particles/Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-80" />

            <style jsx>{`
        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px) translateZ(-200px); }
        }
      `}</style>
        </div>
    );
};

export default CyberGridBG;
