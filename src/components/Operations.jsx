import React from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy, Crosshair, MapPin } from 'lucide-react';

const MissionLog = ({ title, status, rank, location, year, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="relative pl-8 md:pl-0"
    >
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
        <div className="hidden md:block absolute left-1/2 top-0 w-3 h-3 bg-neon-red rounded-full -translate-x-1/2 shadow-[0_0_10px_red]"></div>

        <div className="md:flex items-center justify-between gap-12 group">
            {/* Left Side (Date/Loc) */}
            <div className="hidden md:block w-1/2 text-right pr-12">
                <div className="text-neon-blue font-mono text-sm mb-1">{location}</div>
                <div className="text-gray-500 text-xs tracking-widest">{year}</div>
            </div>

            {/* Mobile Timeline Point */}
            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-neon-red/50 to-transparent md:hidden"></div>

            {/* Right Side (Content) */}
            <div className="md:w-1/2 relative p-6 bg-white/5 border border-white/10 rounded overflow-hidden hover:border-neon-red/50 transition-colors">
                {/* Scanning Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-scan"></div>

                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-bold text-white">{title}</h3>
                    <div className="flex items-center gap-2 px-2 py-1 bg-neon-red/10 border border-neon-red/30 rounded text-neon-red text-[10px] font-mono uppercase">
                        <Crosshair size={12} />
                        {status}
                    </div>
                </div>

                <div className="md:hidden text-neon-blue font-mono text-xs mb-4 flex items-center gap-2">
                    <MapPin size={12} /> {location} | {year}
                </div>

                <div className="flex items-center gap-2 text-neon-blue font-bold font-mono text-sm mb-4">
                    <Trophy size={14} />
                    RANK: {rank}
                </div>

                <p className="text-gray-400 text-xs font-mono leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    </motion.div>
);

const Operations = () => {
    return (
        <section className="py-24 bg-cyber-gray/30 relative">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">MISSION LOGS</h2>
                    <p className="font-mono text-neon-red tracking-widest uppercase text-sm">Declassified Operations History</p>
                </div>

                <div className="space-y-12 relative">
                    <MissionLog
                        title="OP: SHAASTRA"
                        status="SUCCESS"
                        rank="FINALIST (#7)"
                        location="IIT MADRAS"
                        year="2025"
                        desc="Deployment to National Finals. Team successfully neutralized multiple cryptographic challenges and web exploitation vectors in a 24-hour siege."
                        delay={0}
                    />
                    <MissionLog
                        title="OP: CIPHER_HUNT"
                        status="COMPLETED"
                        rank="#7"
                        location="CRYPTOGRAPHIC SOCIETY"
                        year="2024"
                        desc="Rapid response operation involving steganographic extraction and digital forensics. Team demonstrated superior speed in artifact recovery."
                        delay={0.2}
                    />
                    <MissionLog
                        title="OP: NITE_FALL"
                        status="EXECUTED"
                        rank="TOP TIER"
                        location="NIT TRICHY"
                        year="2024"
                        desc="Collaborative binary exploitation engagement. Secured critical flags during high-intensity final phase."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Operations;
