import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LogEntry = ({ text }) => (
    <div className="font-mono text-xs text-neon-blue/70 border-l border-neon-blue/30 pl-3 py-1 mb-2">
        <span className="text-gray-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
        {text}
    </div>
);

const LiveOps = () => {
    const [logs, setLogs] = useState([
        "Initializing global sensors...",
        "Connection established with Sat-link 4...",
        "Scanning for anomalous packets...",
    ]);

    useEffect(() => {
        const possibleLogs = [
            "Intercepted encrypted packet from 192.168.x.x",
            "Trinetra node #402 active in Region EU-West",
            "Inderjaal update: New target profile created",
            "Sudarshana analysis complete: Trojan.Win32 detected",
            "Brute force attempt blocked on Port 22",
            "Zero-day signature matched in database",
            "Uplink secure. Data integrity: 100%",
        ];

        const interval = setInterval(() => {
            const newLog = possibleLogs[Math.floor(Math.random() * possibleLogs.length)];
            setLogs(prev => [newLog, ...prev].slice(0, 6));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-cyber-gray/50 border-y border-white/5 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* The Map Visualization */}
                    <div className="lg:col-span-2 bg-black border border-white/10 min-h-[400px] relative rounded-lg overflow-hidden group">
                        <div className="absolute top-4 left-4 z-20">
                            <h3 className="text-white font-display font-bold">LIVE THREAT MAP</h3>
                            <div className="flex items-center gap-2 text-neon-red text-xs font-mono animate-pulse">
                                <span className="w-2 h-2 bg-neon-red rounded-full"></span>
                                REAL-TIME
                            </div>
                        </div>

                        {/* World Map Image (Placeholder for now, using a abstract cyber map) */}
                        <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center invert filter brightness-50 contrast-200"></div>

                        {/* Animated Pings */}
                        <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-neon-blue rounded-full animate-ping opacity-50"></div>
                        <div className="absolute top-[40%] left-[60%] w-4 h-4 bg-neon-red rounded-full animate-ping opacity-50 animation-delay-500"></div>
                        <div className="absolute top-[70%] left-[80%] w-4 h-4 bg-neon-blue rounded-full animate-ping opacity-50 animation-delay-1000"></div>
                        <div className="absolute top-[25%] left-[75%] w-2 h-2 bg-white rounded-full animate-ping opacity-30 animation-delay-2000"></div>

                        {/* Scanning Line */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent w-full h-[20%] animate-scan"></div>
                    </div>

                    {/* Terminal Logs */}
                    <div className="bg-black border border-white/10 p-6 rounded-lg font-mono flex flex-col">
                        <div className="mb-4 text-gray-500 text-xs tracking-widest border-b border-white/10 pb-2">
                            SYSTEM LOGS // CLASSIFIED
                        </div>
                        <div className="flex-1 overflow-hidden relative">
                            {logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="border-l border-neon-blue/30 pl-3 py-2 text-xs text-neon-blue/80"
                                >
                                    <span className="text-gray-600 mr-2">{`[${new Date().toLocaleTimeString()}]`}</span>
                                    {log}
                                </motion.div>
                            ))}
                            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LiveOps;
