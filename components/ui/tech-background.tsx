"use client";

import { motion } from "framer-motion";

export function TechBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {/* AI Bot Illustration - Bottom Left */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-20 left-10 md:left-24 opacity-20"
            >
                <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

                    <svg width="240" height="240" viewBox="0 0 100 100" fill="none" className="drop-shadow-2xl">
                        <defs>
                            <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                            </linearGradient>
                        </defs>

                        {/* Bot Head */}
                        <rect x="30" y="30" width="40" height="35" rx="8" stroke="url(#botGradient)" strokeWidth="1" fill="url(#botGradient)" fillOpacity="0.05" />

                        {/* Eyes */}
                        <circle cx="42" cy="45" r="3" fill="#6366f1" className="animate-pulse" />
                        <circle cx="58" cy="45" r="3" fill="#6366f1" className="animate-pulse" />

                        {/* Antenna */}
                        <path d="M50 30 L50 20" stroke="url(#botGradient)" strokeWidth="1" />
                        <circle cx="50" cy="18" r="2" fill="#8b5cf6" className="animate-pulse" />

                        {/* Smile/Interface */}
                        <path d="M40 55 Q50 60 60 55" stroke="url(#botGradient)" strokeWidth="1" strokeLinecap="round" />

                        {/* Body/Shoulders hint */}
                        <path d="M25 75 Q50 85 75 75" stroke="url(#botGradient)" strokeWidth="0.5" strokeDasharray="2 2" />

                        {/* Scanning/Processing Rings */}
                        <circle cx="50" cy="50" r="35" stroke="url(#botGradient)" strokeWidth="0.5" strokeDasharray="4 4" className="animate-[spin_15s_linear_infinite]" />
                        <circle cx="50" cy="50" r="45" stroke="url(#botGradient)" strokeWidth="0.2" className="animate-[spin_20s_linear_infinite_reverse]" />
                    </svg>
                </div>
            </motion.div>

            {/* Connecting Network Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <path d="M100 200 Q 400 100 800 300" stroke="url(#lineGradient1)" strokeWidth="1" fill="none" strokeDasharray="10 10" />
                <path d="M200 500 Q 600 300 900 600" stroke="url(#lineGradient2)" strokeWidth="1" fill="none" strokeDasharray="15 15" />
                <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff6d5a" />
                        <stop offset="100%" stopColor="#10a37f" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
