import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lock, Eye, Activity, Database, Shield } from 'lucide-react';

const ToolCard = ({ title, type, desc, icon: Icon, color }) => (
    <div className={`relative group p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-${color}/50 transition-all duration-500`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm m-[1px]"></div>
        <div className="relative p-8 h-full flex flex-col z-10">
            <div className={`p-3 rounded bg-${color}/10 w-fit mb-6 border border-${color}/30 text-${color}`}>
                <Icon size={32} />
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-2">{title}</h3>
            <div className={`text-${color} font-mono text-xs uppercase tracking-widest mb-4`}>// {type}</div>

            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 flex-1">
                {desc}
            </p>

            <div className="space-y-2">
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-white/30 transition-colors"></div>
                <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                    <span>Status</span>
                    <span className={`text-${color} animate-pulse`}>Deployable</span>
                </div>
            </div>

            {/* Corner Accents */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-${color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-${color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
        </div>
    </div>
);

const Arsenal = () => {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">THE ARSENAL</h2>
                        <p className="font-mono text-neon-blue">Advanced Cyber-Warfare Capabilities</p>
                    </div>
                    <div className="hidden md:block font-mono text-right text-xs text-gray-500">
                        <div>WEAPONS_FREE_STATUS</div>
                        <div className="text-neon-red">AUTHORIZED</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ToolCard
                        title="TRINETRA"
                        type="C2 / Surveillance"
                        desc="Advanced Command & Control framework capable of managing thousands of zombie nodes. Features real-time geo-tracking and stealth persistence."
                        icon={Eye}
                        color="neon-blue"
                    />
                    <ToolCard
                        title="INDERJAAL"
                        type="Intelligence Platform"
                        desc="Unified OSINT and Reconnaissance engine. Agregates data from 50+ sources to build comprehensive threat profiles on targets."
                        icon={Database}
                        color="neon-red"
                    />
                    <ToolCard
                        title="SUDARSHANA"
                        type="Forensics / Analysis"
                        desc="Automated malware sandbox and forensic analyzer. Deconstructs binaries and identifies zero-day signatures in seconds."
                        icon={Shield}
                        color="ops-green"
                    />
                </div>
            </div>
        </section>
    );
};

export default Arsenal;
