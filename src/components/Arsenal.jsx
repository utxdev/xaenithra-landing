import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Lock, Eye, Activity, Database, Shield, Radio, Cpu, Network } from 'lucide-react';

const ToolCard = ({ title, type, desc, icon: Icon, color, tech, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group relative p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-${color}/50 transition-all duration-500 h-full`}
    >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm m-[1px]"></div>
        <div className="relative p-6 h-full flex flex-col z-10">
            <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded bg-${color}/10 border border-${color}/30 text-${color}`}>
                    <Icon size={24} />
                </div>
                <div className={`text-${color} font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-${color}/20 rounded bg-${color}/5`}>
                    // {type}
                </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">{title}</h3>

            <p className="text-gray-400 font-mono text-xs leading-relaxed mb-6 flex-1 text-justify">
                {desc}
            </p>

            <div className="mt-auto space-y-4">
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-white/30 transition-colors"></div>

                <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <span key={i} className={`text-[10px] font-mono text-${color} bg-${color}/10 px-1.5 py-0.5 rounded border border-${color}/20`}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Corner Accents */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-${color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-${color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
        </div>
    </motion.div>
);

const Arsenal = () => {
    const arsenal = [
        {
            title: "TRINETRA",
            type: "C2 / Surveillance",
            desc: "Advanced Command & Control framework capable of managing remote nodes. Features real-time geo-tracking, active telemetry, and stealth persistence mechanisms for long-term monitoring.",
            icon: Eye,
            color: "neon-blue",
            tech: ["PowerShell 7", "Live Forensics", "C2 Infrastructure"]
        },
        {
            title: "INDERJAAL",
            type: "Intelligence Platform",
            desc: "Unified OSINT and Reconnaissance engine. Aggregates data from 50+ sources to build comprehensive threat profiles on targets, visualizing relationships in a graph database.",
            icon: Database,
            color: "neon-red",
            tech: ["OSINT", "Graph Theory", "Data Aggregation"]
        },
        {
            title: "SUDARSHANA",
            type: "Forensics / Analysis",
            desc: "Automated malware sandbox and forensic analyzer. Deconstructs binaries, identifies zero-day signatures, and generates behavioral reports in isolated environments.",
            icon: Shield,
            color: "ops-green",
            tech: ["Malware Analysis", "Sandboxing", "Reverse Engineering"]
        },
        {
            title: "PATHFINDER",
            type: "Network Recon",
            desc: "High-speed vulnerability scanner written in Go. Maps potential attack vectors across massive subnets in milliseconds, identifying open ports and misconfigurations.",
            icon: Network,
            color: "neon-blue",
            tech: ["Go (Golang)", "Concurrency", "Vuln Mapping"]
        },
        {
            title: "COMPANIO",
            type: "AI SOC Assistant",
            desc: "Intelligent SOC analyst assistant using machine learning to parse syslog/auth.log files. Identifies anomalous patterns and reduces alert fatigue via NLP summaries.",
            icon: Cpu,
            color: "neon-red",
            tech: ["Python", "TensorFlow", "NLP", "Log Parsing"]
        },
        {
            title: "XAENITHRA_ENC",
            type: "Cryptography",
            desc: "Custom cryptographic framework implementing modified AES-256 with dynamic key rotation. Ensures secure, obfuscated communication channels that bypass standard DPI.",
            icon: Lock,
            color: "ops-green",
            tech: ["Python 3", "Cryptography", "Payload Obfuscation"]
        }
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">THE ARSENAL</h2>
                        <p className="font-mono text-neon-blue">Advanced Cyber-Warfare Capabilities</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {arsenal.map((tool, i) => (
                        <ToolCard key={i} {...tool} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Arsenal;
