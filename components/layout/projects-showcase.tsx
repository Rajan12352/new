"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Plane, ShoppingCart, Store, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TextReveal } from "@/components/ui/text-reveal";
// import AirTravelImg from "@/public/projects/air-travel.png";
// import EcommerceImg from "@/public/projects/ecommerce.png";
// import ShopifyImg from "@/public/projects/shopify.png";

interface Project {
    title: string;
    description: string;
    category: string;
    icon: React.ElementType;
    image: any;
    tags: string[];
    link?: string;
    gradient: string;
}

const projects: Project[] = [
    {
        title: "Air Travel Booking Platform",
        description: "Complete flight booking system with real-time availability, seat selection, payment integration, and automated booking confirmations.",
        category: "Travel & Hospitality",
        icon: Plane,
        image: "/projects/air-travel.svg",
        tags: ["Next.js", "Stripe", "Real-time", "API Integration"],
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "E-Commerce Platform",
        description: "Full-featured online store with product catalog, shopping cart, secure checkout, inventory management, and order tracking.",
        category: "E-Commerce",
        icon: ShoppingCart,
        image: "/projects/ecommerce.svg",
        tags: ["React", "Node.js", "Payment Gateway", "Admin Panel"],
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Shopify Custom Store",
        description: "Custom Shopify theme development with advanced product filtering, wishlist functionality, multi-currency support, and seamless checkout experience.",
        category: "E-Commerce",
        icon: Store,
        image: "/projects/shopify.svg",
        tags: ["Shopify", "Liquid", "JavaScript", "Custom Theme"],
        gradient: "from-green-500/20 to-teal-500/20",
    },
];

export function ProjectsShowcase() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || isPaused) return;

        let scrollPosition = 0;
        const scrollSpeed = 0.5;

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                scrollPosition += scrollSpeed;

                // Reset scroll when reaching the end
                if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                    scrollPosition = 0;
                }

                scrollContainer.scrollLeft = scrollPosition;
            }
        };

        const intervalId = setInterval(scroll, 20);

        return () => clearInterval(intervalId);
    }, [isPaused]);

    // Duplicate projects for seamless loop
    const duplicatedProjects = [...projects, ...projects];

    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Badge variant="outline" className="mb-4">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Our Projects
                    </Badge>
                    <TextReveal
                        text="Featured Work"
                        className="text-4xl md:text-5xl font-bold mb-4 justify-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                    />
                    <p className="text-muted-foreground text-lg md:text-xl">
                        Explore our latest automation projects across different industries
                    </p>
                </motion.div>

                {/* Auto-scrolling Projects */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        style={{ scrollBehavior: "auto" }}
                    >
                        {duplicatedProjects.map((project, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[400px]"
                            >
                                <div className={`h-full p-[1px] rounded-xl bg-gradient-to-br ${project.gradient} hover:from-primary hover:to-secondary transition-all duration-300`}>
                                    <SpotlightCard className="h-full border-0 bg-background/95 backdrop-blur-sm overflow-hidden group">
                                        {/* Project Image */}
                                        <div className="relative aspect-video w-full bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                                sizes="400px"
                                            />
                                            <div className="absolute top-4 right-4 z-10">
                                                <Badge className="bg-background/80 backdrop-blur-sm">
                                                    {project.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <Badge
                                                        key={tagIndex}
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>


                                        </CardContent>
                                    </SpotlightCard>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pause Indicator */}
                    {isPaused && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                                Paused - Move mouse away to resume
                            </Badge>
                        </div>
                    )}
                </div>


            </div>
        </section>
    );
}
