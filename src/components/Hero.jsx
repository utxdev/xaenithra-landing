import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-neon-blue/5 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,10,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,10,0,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-red/30 bg-neon-red/10 text-neon-red text-xs font-mono tracking-widest mb-6 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-neon-red animate-pulse"></span>
                        PROTOCOL: SHADOW-OPS v4.1 // ACTIVE
                    </div>

                    <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-6 leading-none relative">
                        XAENITHRA
                        <span className="absolute -inset-1 blur-2xl bg-neon-blue/20 -z-10 animate-pulse"></span>
                    </h1>

                    <p className="text-lg md:text-2xl font-mono text-neon-blue/80 max-w-3xl mx-auto leading-relaxed">
                        "We do not knock. We enter."
                    </p>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto font-mono text-sm md:text-base">
                        An elite collective of offensive security researchers, red teamers, and digital forensics experts. We dismantle threats before they materialize.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center mt-12"
                >
                    <button className="px-8 py-4 bg-neon-red text-black font-display font-bold tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(255,0,60,0.6)] transition-all clip-path-polygon">
                        INITIALIZE_CONTACT
                    </button>
                    <button className="px-8 py-4 border border-neon-blue text-neon-blue font-display font-bold tracking-widest hover:bg-neon-blue/10 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all">
                        VIEW_OPERATIONS
                    </button>
                </motion.div>
            </div>

            {/* Bottom HUD */}
            <div className="absolute bottom-10 left-10 hidden md:flex gap-8 text-[10px] font-mono text-gray-600 tracking-[0.2em]">
                <span>LAT: 28.6139° N</span>
                <span>LON: 77.2090° E</span>
                <span>SECURE_LINK: ESTABLISHED</span>
            </div>
        </section>
    );
};

export default Hero;
