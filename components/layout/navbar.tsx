"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <Bot className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold">AutoGrow</span>
                </Link>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                        Pricing
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                            <Link href="#contact">Get Started</Link>
                        </Button>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            <Link
                                href="#features"
                                className="text-2xl font-medium hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-2xl font-medium hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#about"
                                className="text-2xl font-medium hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-4">
                                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary to-secondary opacity-50"></div>
        </nav>
    );
}
