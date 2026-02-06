import React, { useState, useEffect } from 'react';
import CyberGridBG from './components/CyberGridBG';
import Hero from './components/Hero';
import LiveOps from './components/LiveOps';
import Arsenal from './components/Arsenal';
import Operations from './components/Operations';
import Team from './components/Team';

function App() {
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        setTimeout(() => setBooted(true), 1500);
    }, []);

    return (
        <div className={`min-h-screen bg-void-black text-white selection:bg-neon-red selection:text-white relative font-mono overflow-x-hidden transition-opacity duration-1000 ${booted ? 'opacity-100' : 'opacity-0'}`}>
            {/* Background effects */}
            <CyberGridBG />

            <main className="relative z-10 w-full">
                <Hero />
                <LiveOps />
                <Arsenal />
                <Operations />
                <Team />

                <footer className="border-t border-white/10 py-8 bg-black relative z-20">
                    <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono tracking-widest">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <img src="/logo.png" className="w-8 h-8 grayscale opacity-50 hover:grayscale-0 transition-all cursor-pointer" alt="Xaenithra" />
                            <span>&copy; 2026 XAENITHRA. SECURING THE FUTURE.</span>
                        </div>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-neon-blue transition-colors">GITHUB</a>
                            <a href="#" className="hover:text-neon-red transition-colors">ENCRYPTED_CHANNEL</a>
                            <a href="#" className="hover:text-white transition-colors">PGP KEY</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default App
