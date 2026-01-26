import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, Code2, Lock, Fingerprint, ChevronRight, Hash } from 'lucide-react';
import CyberGridBG from './components/CyberGridBG';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const TeamMember = ({ name, role, skills, delay, image }) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(0, 255, 65, 0.3)",
            borderColor: "rgba(0, 255, 65, 0.8)"
        }}
        className="border border-green-900/50 bg-cyber-gray/50 overflow-hidden relative group hover:border-neon-blue/50 transition-all duration-300 transform-gpu"
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
        <div className="min-h-screen bg-cyber-black text-green-500 selection:bg-neon-red selection:text-white relative font-mono overflow-x-hidden">
            {/* Background effects */}
            <CyberGridBG />

            <main className="relative z-10 container mx-auto px-4 py-8 md:py-16 max-w-7xl">

                {/* Intro / Header */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    className="mb-20 flex flex-col md:flex-row items-center gap-8 border-b border-green-900/50 pb-12"
                >
                    <motion.img
                        variants={{
                            hidden: { scale: 0.8, opacity: 0 },
                            visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                        }}
                        src="/logo.png"
                        alt="Xaenithra Logo"
                        className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_15px_rgba(0,255,0,0.3)] animate-pulse-fast"
                    />
                    <motion.div variants={fadeInUp} className="flex-1">
                        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-2 tracking-tighter glitch-text relative" data-text="XAENITHRA">
                            <span className="relative z-10">XAENITHRA</span>
                            <span className="absolute top-0 left-0 -z-10 text-neon-red opacity-50 animate-glitch-1">XAENITHRA</span>
                            <span className="absolute top-0 left-0 -z-10 text-neon-blue opacity-50 animate-glitch-2">XAENITHRA</span>
                        </h1>
                        <p className="font-mono text-neon-blue tracking-widest text-sm md:text-lg uppercase">Elite Cybersecurity Collective</p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="hidden md:block w-96 bg-black/50 border border-green-900/50 p-4 font-mono h-32 overflow-hidden rounded-sm backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,0,0.1)]"
                    >
                        <TerminalLine text="Initializing secure connection..." delay={0} />
                        <TerminalLine text="Syncing with MoE Database..." delay={0.8} />
                        <TerminalLine text="Authenticating 6 operatives..." delay={1.4} />
                        <TerminalLine text="Access granted. Welcome." delay={2.0} />
                    </motion.div>
                </motion.section>

                {/* Team Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="mb-24"
                >
                    <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-[1px] bg-neon-red shadow-[0_0_10px_rgba(255,0,0,0.8)]"></div>
                        <h2 className="font-display text-3xl text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">ACTIVE OPERATIVES</h2>
                    </motion.div>

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
                </motion.section>

                {/* Mission / Stats */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-16 items-center mb-20 bg-cyber-gray/20 p-8 border border-green-900/30 rounded-lg backdrop-blur-sm relative overflow-hidden group"
                >
                    {/* Decorative glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10"></div>

                    <motion.div variants={fadeInUp} className="space-y-8">
                        <div className="flex items-center gap-4">
                            <Shield className="w-10 h-10 text-neon-red animate-pulse" />
                            <h2 className="font-display text-3xl text-white">OPERATIONAL STATUS</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-mono">
                            With a proven track record of over 500+ successful engagements and 30+ CTF victories, Xaenithra stands at the forefront of offensive and defensive security operations. Our team specializes in dismantling complex threat vectors and hardening critical infrastructure.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { val: "30+", label: "CTFs WON" },
                                { val: "500+", label: "CASES SOLVED" },
                                { val: "#1", label: "MoE RANK" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, borderColor: "rgba(0, 255, 65, 0.5)" }}
                                    className="flex flex-col items-center p-4 bg-black border border-green-900/50 transition-colors"
                                >
                                    <span className="text-3xl font-display text-neon-blue drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">{stat.val}</span>
                                    <span className="text-[10px] md:text-xs text-center text-gray-500 mt-2 tracking-widest">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="relative border border-neon-red/30 p-1 group/card"
                    >
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-red group-hover/card:w-full group-hover/card:h-full transition-all duration-700"></div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-red group-hover/card:w-full group-hover/card:h-full transition-all duration-700"></div>

                        <div className="bg-black p-8 space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover/card:opacity-40 transition-opacity">
                                <Cpu size={120} className="text-neon-red" />
                            </div>
                            <div className="flex justify-between items-center text-neon-red font-mono text-sm border-b border-neon-red/20 pb-4">
                                <span>ACHIEVEMENT UNLOCKED</span>
                                <span className="animate-pulse flex items-center gap-2"><div className="w-2 h-2 bg-neon-red rounded-full shadow-[0_0_10px_red]"></div> HIGHEST HONOR</span>
                            </div>
                            <div className="space-y-4 font-mono relative z-10">
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-xs uppercase tracking-widest">Organization</span>
                                    <span className="text-white text-lg font-bold">Ministry of Electronics & IT</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-xs uppercase tracking-widest">Objective</span>
                                    <span className="text-neon-blue">National CTF Challenge</span>
                                </div>
                                <div className="flex items-center justify-between bg-neon-red/10 p-4 border border-neon-red/20 rounded hover:bg-neon-red/20 transition-colors">
                                    <span className="text-neon-red font-bold">RANK</span>
                                    <span className="text-4xl font-display text-white shadow-red-glow">#1</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                <footer className="border-t border-green-900/30 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" className="w-6 h-6 grayscale opacity-50 hover:grayscale-0 transition-all cursor-pointer" alt="" />
                        <span>&copy; 2026 XAENITHRA. SECURING THE FUTURE.</span>
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-green-500 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all">GITHUB</a>
                        <a href="#" className="hover:text-green-500 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all">CONTACT</a>
                        <a href="#" className="hover:text-green-500 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)] transition-all">PGP KEY</a>
                    </div>
                </footer>

            </main>

            <style jsx global>{`
                @keyframes glitch-1 {
                    0% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                    100% { transform: translate(0); }
                }
                 @keyframes glitch-2 {
                    0% { transform: translate(0); }
                    20% { transform: translate(2px, -2px); }
                    40% { transform: translate(2px, 2px); }
                    60% { transform: translate(-2px, -2px); }
                    80% { transform: translate(-2px, 2px); }
                    100% { transform: translate(0); }
                }
                .animate-glitch-1 {
                    animation: glitch-1 2.5s infinite linear alternate-reverse;
                    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
                }
                .animate-glitch-2 {
                    animation: glitch-2 3s infinite linear alternate-reverse;
                    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
                }
            `}</style>
        </div>
    )
}

export default App
