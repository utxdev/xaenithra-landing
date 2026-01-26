import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, Code2, Lock, Fingerprint, ChevronRight, Hash } from 'lucide-react';
import logo from '/logo.png'; // Assuming vite handles public folder

const TeamMember = ({ name, role, skills, delay, image }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="border border-green-900/50 bg-cyber-gray/50 overflow-hidden relative group hover:border-neon-blue/50 transition-colors"
    >
        <div className="absolute top-0 left-0 w-1 h-full bg-green-500/20 group-hover:bg-neon-blue/50 transition-colors z-10" />
        <div className="h-80 overflow-hidden relative bg-black flex items-center justify-center">
            <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
            <img src={image} alt={name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="p-6 relative z-20">
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
        setTimeout(() => setBooted(true), 2500);
    }, []);

    return (
        <div className="min-h-screen bg-cyber-black text-green-500 selection:bg-neon-red selection:text-white relative font-mono">
            {/* Background effects */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 pointer-events-none bg-[length:100%_2px,3px_100%]" />
            <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            <main className="relative z-10 container mx-auto px-4 py-8 md:py-16 max-w-7xl">

                {/* Intro / Header */}
                <section className="mb-20 flex flex-col md:flex-row items-center gap-8 border-b border-green-900/50 pb-12">
                    <img src="/logo.png" alt="Xaenithra Logo" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_15px_rgba(0,255,0,0.3)] animate-pulse-fast" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex-1"
                    >
                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-2 tracking-tighter glitch-text" data-text="XAENITHRA">
                            XAENITHRA
                        </h1>
                        <p className="font-mono text-neon-blue tracking-widest text-sm md:text-lg uppercase">Elite Cybersecurity Collective</p>
                    </motion.div>

                    <div className="hidden md:block w-96 bg-black/50 border border-green-900/50 p-4 font-mono h-32 overflow-hidden rounded-sm backdrop-blur-sm">
                        <TerminalLine text="Initializing secure connection..." delay={0} />
                        <TerminalLine text="Syncing with MoE Database..." delay={0.8} />
                        <TerminalLine text="Authenticating 6 operatives..." delay={1.4} />
                        <TerminalLine text="Access granted. Welcome." delay={2.0} />
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-[1px] bg-neon-red"></div>
                        <h2 className="font-display text-3xl text-white">ACTIVE OPERATIVES</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TeamMember
                            name="Utkarsh Pratham"
                            role="Team Leader / Full Stack"
                            skills={['Web Exploitation', 'React', 'Node.js', 'Pentesting']}
                            image="/utkarsh-v2.png"
                            delay={0.2}
                        />
                        <TeamMember
                            name="Yashika Siwach"
                            role="Director of Outreach"
                            skills={['Tech Evangelism', 'Public Speaking', 'Strategic Ops', 'Brand Sec']}
                            image="/yashika.png"
                            delay={0.4}
                        />
                        <TeamMember
                            name="Aryan Bharadwaj"
                            role="Lead Ethical Hacker"
                            skills={['Web Exploitation', 'Red Teaming', 'Bug Bounty', 'OWASP Top 10']}
                            image="/aryan.png"
                            delay={0.6}
                        />
                        <TeamMember
                            name="Divyanshu Rai"
                            role="OSINT / Forensics Lead"
                            skills={['Digital Spectrum', 'Open Source Intel', 'Investigation', 'Data Analysis']}
                            image="/divyanshu.png"
                            delay={0.8}
                        />
                        <TeamMember
                            name="Aquib Javed"
                            role="Network Security Architect"
                            skills={['Infrastructure', 'Cloud Networking', 'Firewalls', 'Hardening']}
                            image="/aquib.png"
                            delay={1.0}
                        />
                        <TeamMember
                            name="Shivang Kumar"
                            role="Financial Security Analyst"
                            skills={['DeFi Security', 'Blockchain Forensics', 'Algo-Trading Sec', 'Fraud Detection']}
                            image="/shivang.png"
                            delay={1.2}
                        />
                    </div>
                </section>

                {/* Mission / Stats */}
                <section className="grid md:grid-cols-2 gap-16 items-center mb-20 bg-cyber-gray/20 p-8 border border-green-900/30 rounded-lg backdrop-blur-sm">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <Shield className="w-10 h-10 text-neon-red" />
                            <h2 className="font-display text-3xl text-white">OPERATIONAL STATUS</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-mono">
                            With a proven track record of over 500+ successful engagements and 30+ CTF victories, Xaenithra stands at the forefront of offensive and defensive security operations. Our team specializes in dismantling complex threat vectors and hardening critical infrastructure.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col items-center p-4 bg-black border border-green-900/50">
                                <span className="text-3xl font-display text-neon-blue">30+</span>
                                <span className="text-[10px] md:text-xs text-center text-gray-500 mt-2 tracking-widest">CTFs WON</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-black border border-green-900/50">
                                <span className="text-3xl font-display text-neon-blue">500+</span>
                                <span className="text-[10px] md:text-xs text-center text-gray-500 mt-2 tracking-widest">CASES SOLVED</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-black border border-green-900/50">
                                <span className="text-3xl font-display text-neon-blue">#1</span>
                                <span className="text-[10px] md:text-xs text-center text-gray-500 mt-2 tracking-widest">MoE RANK</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative border border-neon-red/30 p-1 group">
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-red group-hover:w-full group-hover:h-full transition-all duration-700"></div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-red group-hover:w-full group-hover:h-full transition-all duration-700"></div>

                        <div className="bg-black p-8 space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-20">
                                <Cpu size={120} />
                            </div>
                            <div className="flex justify-between items-center text-neon-red font-mono text-sm border-b border-neon-red/20 pb-4">
                                <span>ACHIEVEMENT UNLOCKED</span>
                                <span className="animate-pulse flex items-center gap-2"><div className="w-2 h-2 bg-neon-red rounded-full"></div> HIGHEST HONOR</span>
                            </div>
                            <div className="space-y-4 font-mono">
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-xs uppercase tracking-widest">Organization</span>
                                    <span className="text-white text-lg font-bold">Ministry of Electronics & IT</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-xs uppercase tracking-widest">Objective</span>
                                    <span className="text-neon-blue">National CTF Challenge</span>
                                </div>
                                <div className="flex items-center justify-between bg-neon-red/10 p-4 border border-neon-red/20 rounded">
                                    <span className="text-neon-red font-bold">RANK</span>
                                    <span className="text-4xl font-display text-white">#1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="border-t border-green-900/30 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" className="w-6 h-6 grayscale opacity-50" alt="" />
                        <span>&copy; 2026 XAENITHRA. SECURING THE FUTURE.</span>
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
