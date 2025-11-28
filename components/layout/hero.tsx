"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Zap, Play } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useLiveStats } from "@/hooks/use-live-stats";
import { Badge } from "@/components/ui/badge";
export function Hero() {
    const { stats, isLoading } = useLiveStats(30000); // Refresh every 30 seconds
    return (
        <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-36 pb-16 md:pb-24">
            {/* Particle background */}
            <ParticleBackground particleCount={30} className="opacity-40" />
            {/* Animated background gradients removed for cleaner theme */}
            <div className="absolute inset-0 -z-10">
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Left column - Text content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium backdrop-blur-sm mb-6 max-w-full"
                        >
                            <Sparkles className="h-4 w-4 text-primary shrink-0" />
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent truncate">
                                Powered by AutoGrow • Trusted by 10,000+ Businesses
                            </span>
                        </motion.div>
                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
                        >
                            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                                Complete Automation
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                For Every Business
                            </span>
                        </motion.h1>
                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl"
                        >
                            CRM, Marketing, Sales, Funnels, Chatbots, Workflows, and AI-driven automation—all in one powerful platform.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl"
                        >
                            Transform your business with intelligent automation that works 24/7. No coding required. Scale faster, work smarter, grow bigger.
                        </motion.p>
                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
                        >
                            <Link href="/contact-sales">
                                <Button size="lg" className="gap-2 text-base h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 w-full sm:w-auto">
                                    Contact Sales <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                            <div className="h-full p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-all duration-300">
                                <Button variant="outline" size="lg" className="text-base h-14 px-8 w-full sm:w-auto gap-2">
                                    <Play className="h-5 w-5" />
                                    Watch Demo
                                </Button>
                            </div>
                        </motion.div>
                        {/* Mobile Background Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -z-10 md:hidden pointer-events-none" />
                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="w-full max-w-lg bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:bg-transparent md:backdrop-blur-none md:border-none md:p-0"
                        >
                            {/* Live Indicator */}
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                                <Badge variant="outline" className="gap-1.5 px-2 py-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs">Live</span>
                                </Badge>
                                {!isLoading && stats && (
                                    <span className="text-xs text-muted-foreground">
                                        Updated {new Date(stats.timestamp).toLocaleTimeString()}
                                    </span>
                                )}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                <div className="flex flex-col items-center lg:items-start">
                                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                                        {isLoading ? (
                                            <span className="animate-pulse">...</span>
                                        ) : (
                                            <AnimatedCounter
                                                value={Math.floor((stats?.activeUsers || 10000) / 1000)}
                                                suffix="K+"
                                            />
                                        )}
                                    </div>
                                    <div className="text-xs md:text-sm text-muted-foreground">Active Users</div>
                                </div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                                        {isLoading ? (
                                            <span className="animate-pulse">...</span>
                                        ) : (
                                            <AnimatedCounter
                                                value={Math.floor((stats?.tasksAutomated || 500000000) / 1000000)}
                                                suffix="M+"
                                            />
                                        )}
                                    </div>
                                    <div className="text-xs md:text-sm text-muted-foreground">Tasks Automated</div>
                                </div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                                        {isLoading ? (
                                            <span className="animate-pulse">...</span>
                                        ) : (
                                            <AnimatedCounter
                                                value={stats?.uptime || 99.9}
                                                decimals={1}
                                                suffix="%"
                                            />
                                        )}
                                    </div>
                                    <div className="text-xs md:text-sm text-muted-foreground">Uptime</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* Right column - 3D Bot Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl md:blur-3xl opacity-70 md:opacity-100"></div>
                        {/* SVG Bot Illustration */}
                        <div className="relative w-full max-w-lg aspect-square">
                            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                {/* Bot body */}
                                <motion.g
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {/* Main body */}
                                    <rect x="120" y="180" width="160" height="140" rx="20" fill="url(#gradient1)" />
                                    <rect x="120" y="180" width="160" height="140" rx="20" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5" />
                                    {/* Head */}
                                    <rect x="140" y="100" width="120" height="100" rx="15" fill="url(#gradient1)" />
                                    <rect x="140" y="100" width="120" height="100" rx="15" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5" />
                                    {/* Eyes */}
                                    <circle cx="170" cy="140" r="12" fill="#6366f1" />
                                    <circle cx="230" cy="140" r="12" fill="#6366f1" />
                                    <motion.circle
                                        cx="170"
                                        cy="140"
                                        r="6"
                                        fill="white"
                                        animate={{ scale: [1, 0.8, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <motion.circle
                                        cx="230"
                                        cy="140"
                                        r="6"
                                        fill="white"
                                        animate={{ scale: [1, 0.8, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    {/* Smile */}
                                    <path d="M 170 165 Q 200 175 230 165" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" fill="none" />
                                    {/* Antenna */}
                                    <line x1="200" y1="100" x2="200" y2="70" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round" />
                                    <motion.circle
                                        cx="200"
                                        cy="65"
                                        r="8"
                                        fill="#06b6d4"
                                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                    {/* Arms */}
                                    <rect x="80" y="200" width="40" height="80" rx="10" fill="url(#gradient1)" />
                                    <rect x="280" y="200" width="40" height="80" rx="10" fill="url(#gradient1)" />
                                    {/* Chest panel */}
                                    <rect x="160" y="220" width="80" height="60" rx="8" fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="1" />
                                    <line x1="170" y1="235" x2="230" y2="235" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
                                    <line x1="170" y1="250" x2="230" y2="250" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
                                    <line x1="170" y1="265" x2="230" y2="265" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
                                </motion.g>
                                {/* Floating elements */}
                                <motion.g
                                    animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                                >
                                    <circle cx="80" cy="150" r="4" fill="#6366f1" />
                                    <circle cx="90" cy="160" r="3" fill="#06b6d4" />
                                </motion.g>
                                <motion.g
                                    animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                >
                                    <circle cx="320" cy="140" r="4" fill="#f472b6" />
                                    <circle cx="310" cy="150" r="3" fill="#6366f1" />
                                </motion.g>
                                <motion.g
                                    animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                >
                                    <circle cx="100" cy="280" r="3" fill="#06b6d4" />
                                    <circle cx="300" cy="270" r="4" fill="#f472b6" />
                                </motion.g>
                                {/* Gradients */}
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="50%" stopColor="#06b6d4" />
                                        <stop offset="100%" stopColor="#f472b6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
