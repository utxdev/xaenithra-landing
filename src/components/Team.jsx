import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Shield, Cpu, Lock, Terminal, BarChart } from 'lucide-react';

const MemberCard = ({ name, role, codename, skills, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay }}
        whileHover={{ scale: 1.02 }}
        className="group relative bg-black border border-white/10 overflow-hidden"
    >
        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent -translate-x-full group-hover:animate-scan z-20"></div>

        <div className="relative aspect-[4/5] overflow-hidden bg-cyber-gray">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            {/* Profile Image - Grayscale to Color on Hover */}
            <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125" />

            {/* ID Badge on Image */}
            <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur border border-white/20 px-2 py-1 text-[10px] font-mono text-neon-blue">
                ID: {codename}
            </div>
        </div>

        <div className="p-6 relative z-20 border-t border-white/10 bg-black">
            <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{name}</h3>
            <div className="text-xs font-mono text-neon-red tracking-widest uppercase mb-4">{role}</div>

            <div className="space-y-3">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Skill Matrix.exe</div>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] font-mono bg-white/5 border border-white/10 text-gray-400 group-hover:border-neon-blue/30 group-hover:text-neon-blue transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const Team = () => {
    const members = [
        {
            name: "Utkarsh Pratham",
            role: "Team Leader / Full Stack",
            codename: "UTX-01",
            skills: ['Web Exploitation', 'React', 'Node.js', 'Pentesting'],
            image: "/utkarsh-v2.png"
        },
        {
            name: "Yashika Siwach",
            role: "Director of Outreach",
            codename: "YSH-02",
            skills: ['Tech Evangelism', 'Strategic Ops', 'Brand Sec'],
            image: "/yashika.png"
        },
        {
            name: "Aryan Bharadwaj",
            role: "Lead Ethical Hacker",
            codename: "ARY-03",
            skills: ['Red Teaming', 'Bug Bounty', 'OWASP Top 10'],
            image: "/aryan.png"
        },
        {
            name: "Divyanshu Rai",
            role: "OSINT / Forensics Lead",
            codename: "DIV-04",
            skills: ['Digital Forensics', 'Open Source Intel', 'Investigation'],
            image: "/divyanshu.png"
        },
        {
            name: "Aquib Javed",
            role: "Network Sec Architect",
            codename: "AQB-05",
            skills: ['Infrastructure', 'Cloud Networking', 'Firewalls'],
            image: "/aquib.png"
        },
        {
            name: "Shivang Kumar",
            role: "FinSec Analyst",
            codename: "SHV-06",
            skills: ['DeFi Security', 'Blockchain', 'Fraud Detection'],
            image: "/shivang.png"
        }
    ];

    return (
        <section className="py-24 bg-void-black relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-neon-red"></div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">ACTIVE OPERATIVES</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((m, i) => (
                        <MemberCard key={i} {...m} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
