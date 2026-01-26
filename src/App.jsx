import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, Code2, Lock, Fingerprint, ChevronRight, Hash } from 'lucide-react';

const TeamMember = ({ name, role, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="border border-green-900/50 bg-cyber-gray/50 p-6 relative overflow-hidden hover:border-neon-blue/50 transition-colors group"
    >
        <div className="absolute top-0 left-0 w-1 h-full bg-green-500/20 group-hover:bg-neon-blue/50 transition-colors" />
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 border border-green-500/30 rounded bg-black">
                <Fingerprint className="w-6 h-6 text-green-500" />
            </div>
            <div>
                <h3 className="font-display font-bold text-xl text-white tracking-wider">{name}</h3>
                <p className="text-sm text-green-500 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    {role}
                </p>
            </div>
        </div>
        <div className="space-y-2">
            <div className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Capabilities</div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-mono bg-green-900/20 text-green-400 border border-green-900/50 rounded-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const TerminalLine = ({ text, delay = 0 }) => {
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        let current = '';
        const chars = text.split('');
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                if (i >= chars.length) {
                    clearInterval(interval);
                    return;
                }
                current += chars[i];
                setDisplayed(current);
                i++;
            }, 30);
            return () => clearInterval(interval);
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return (
        <div className="font-mono text-green-500 text-sm md:text-base flex items-start gap-2">
            <span className="text-neon-blue mt-1">➜</span>
            <span className="break-all">{displayed}</span>
        </div>
    );
};

function App() {
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        setTimeout(() => setBooted(true), 2500); // Intro sequence time
    }, []);

    return (
        <div className="min-h-screen bg-cyber-black text-green-500 selection:bg-neon-red selection:text-white relative">
            <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 pointer-events-none bg-[length:100%_2px,3px_100%]" />
            <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            <main className="relative z-10 container mx-auto px-4 py-8 md:py-16 max-w-6xl">

                {/* Intro / Header */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-b border-green-900/50 pb-8 mb-8"
                    >
                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-2 tracking-tighter glitch-text" data-text="XAENITHRA">
                            XAENITHRA
                        </h1>
                        <p className="font-mono text-neon-blue tracking-widest text-sm md:text-lg">ELITE CYBERSECURITY COLLECTIVE</p>
                    </motion.div>

                    <div className="bg-black/50 border border-green-900/50 p-4 font-mono h-48 overflow-y-auto rounded-sm backdrop-blur-sm">
                        <TerminalLine text="Initializing secure connection..." delay={0} />
                        <TerminalLine text="Loading team modules..." delay={0.8} />
                        <TerminalLine text="Decrypting personnel database..." delay={1.4} />
                        <TerminalLine text="Access granted. Welcome to Xaenithra." delay={2.0} />
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-neon-red"></div>
                        <h2 className="font-display text-2xl text-white">ACTIVE OPERATIVES</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <TeamMember
                            name="Utxdev"
                            role="Team Lead / Full Stack"
                            skills={['React', 'Node.js', 'System Arch', 'Penetration Testing']}
                            delay={2.6}
                        />
                        {/* Placeholder for future members - user can edit this */}
                        <TeamMember
                            name="[REDACTED]"
                            role="Cryptography Specialist"
                            skills={['AES', 'RSA', 'Python', 'Mathematics']}
                            delay={2.8}
                        />
                        <TeamMember
                            name="[UNKNOWN]"
                            role="Network Infiltration"
                            skills={['Kali Linux', 'Wireshark', 'Social Eng']}
                            delay={3.0}
                        />
                    </div>
                </section>

                {/* Mission / About */}
                <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Shield className="w-8 h-8 text-neon-red" />
                            <h2 className="font-display text-2xl text-white">MISSION PARAMETERS</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-mono">
                            We are a collective of security researchers, developers, and ethical hackers dedicated to pushing the boundaries of digital defense. Our operations span web exploitation, cryptography, and secure infrastructure development.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center p-4 bg-cyber-gray/30 border border-green-900/30 w-32">
                                <span className="text-2xl font-display text-white">12+</span>
                                <span className="text-xs text-center text-gray-500 mt-1">CTFs CONQUERED</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-cyber-gray/30 border border-green-900/30 w-32">
                                <span className="text-2xl font-display text-white">40+</span>
                                <span className="text-xs text-center text-gray-500 mt-1">VULNS PATCHED</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative border border-neon-red/30 p-1">
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-red"></div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-neon-red"></div>
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-neon-red"></div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-red"></div>

                        <div className="bg-black p-6 space-y-4">
                            <div className="flex justify-between items-center text-neon-red font-mono text-sm border-b border-neon-red/20 pb-2">
                                <span>LATEST_TARGET</span>
                                <span className="animate-pulse">Active</span>
                            </div>
                            <div className="space-y-2 font-mono text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Target:</span>
                                    <span className="text-white">Shaastra CTF Finals</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Status:</span>
                                    <span className="text-green-500">Complete</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Rank:</span>
                                    <span className="text-neon-blue">Top 10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="border-t border-green-900/30 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
                    <div>
                        &copy; 2026 XAENITHRA. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-green-500 transition-colors">GITHUB</a>
                        <a href="#" className="hover:text-green-500 transition-colors">CONTACT</a>
                        <a href="#" className="hover:text-green-500 transition-colors">PGP KEY</a>
                    </div>
                </footer>

            </main>
        </div>
    )
}

export default App
