"use client";
import { motion } from "framer-motion";
import {
    Zap,
    Megaphone,
    MessageSquare,
    BarChart3,
    Store,
    Bot,
    Layers,
    TrendingUp,
    Users,
    Target,
    Share2,
    Shield,
    Sparkles,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
const features = [
    {
        title: "AI Process Automation",
        description: "Automate repetitive tasks like lead qualification, CRM updates, email sequences, and document generation. Save 20+ hours per week.",
        icon: Zap,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
        gradient: "from-yellow-500/20 to-orange-500/20",
        hoverGradient: "hover:from-yellow-500 hover:to-orange-500",
        shadowColor: "hover:shadow-yellow-500/20"
    },
    {
        title: "AI Marketing Engine",
        description: "Self-driving marketing system that generates content, designs ads, optimizes campaigns, and delivers measurable ROI automatically.",
        icon: Megaphone,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        gradient: "from-pink-500/20 to-rose-500/20",
        hoverGradient: "hover:from-pink-500 hover:to-rose-500",
        shadowColor: "hover:shadow-pink-500/20"
    },
    {
        title: "Social Media Automation",
        description: "Schedule posts across Instagram, Facebook, Twitter, LinkedIn & YouTube. AI-powered content ideas and performance analytics.",
        icon: Share2,
        color: "text-sky-500",
        bgColor: "bg-sky-500/10",
        gradient: "from-sky-500/20 to-blue-500/20",
        hoverGradient: "hover:from-sky-500 hover:to-blue-500",
        shadowColor: "hover:shadow-sky-500/20"
    },
    {
        title: "AI Sales Agent",
        description: "Autonomous agent that engages prospects 24/7, handles objections, qualifies leads, and books appointments directly on your calendar.",
        icon: MessageSquare,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        gradient: "from-blue-500/20 to-indigo-500/20",
        hoverGradient: "hover:from-blue-500 hover:to-indigo-500",
        shadowColor: "hover:shadow-blue-500/20"
    },
    {
        title: "Business Intelligence",
        description: "Real-time growth dashboard with sales forecasting, churn prediction, automated reporting, and AI-powered insights.",
        icon: BarChart3,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        gradient: "from-green-500/20 to-emerald-500/20",
        hoverGradient: "hover:from-green-500 hover:to-emerald-500",
        shadowColor: "hover:shadow-green-500/20"
    },
    {
        title: "Automations Marketplace",
        description: "Plug-and-play automation packs for Real Estate, E-commerce, Agencies, HR, and more. Deploy in minutes, not months.",
        icon: Store,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        gradient: "from-purple-500/20 to-violet-500/20",
        hoverGradient: "hover:from-purple-500 hover:to-violet-500",
        shadowColor: "hover:shadow-purple-500/20"
    },
    {
        title: "Multi-AI Agent System",
        description: "Deploy specialized agents for Marketing, Sales, Operations, Finance, and Support that work together seamlessly.",
        icon: Bot,
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
        gradient: "from-indigo-500/20 to-purple-500/20",
        hoverGradient: "hover:from-indigo-500 hover:to-purple-500",
        shadowColor: "hover:shadow-indigo-500/20"
    },
    {
        title: "Integrations Hub",
        description: "Connect your favorite business apps like HubSpot, Salesforce, Slack, and Stripe with just one click. 500+ integrations available.",
        icon: Layers,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        gradient: "from-orange-500/20 to-red-500/20",
        hoverGradient: "hover:from-orange-500 hover:to-red-500",
        shadowColor: "hover:shadow-orange-500/20"
    },
    {
        title: "Growth Analytics",
        description: "Track every metric that matters. From customer acquisition cost to lifetime value, get insights that drive decisions.",
        icon: TrendingUp,
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        gradient: "from-cyan-500/20 to-teal-500/20",
        hoverGradient: "hover:from-cyan-500 hover:to-teal-500",
        shadowColor: "hover:shadow-cyan-500/20"
    },
];
const stats = [
    { value: "10,000+", label: "Active Businesses", icon: Users },
    { value: "500M+", label: "Tasks Automated", icon: Zap },
    { value: "95%", label: "Time Saved", icon: TrendingUp },
    { value: "3.5x", label: "ROI Average", icon: Target },
];
export function Features() {
    return (
        <section id="features" className="py-12 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-muted/30 -z-10"></div>
            <div className="container mx-auto px-4">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Badge variant="outline" className="mb-4">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Powerful Features
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Everything You Need to Scale
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Comprehensive automation tools designed to help your business grow faster and more efficiently.
                    </p>
                </motion.div>
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                                <stat.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <SpotlightCard className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                                <Card className="border-0 h-full bg-transparent shadow-none">
                                    <CardHeader>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.5 }}
                                            className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}
                                        >
                                            <feature.icon className={`h-6 w-6 ${feature.color}`} />
                                        </motion.div>
                                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                                        <CardDescription>{feature.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {/* Additional content if needed */}
                                    </CardContent>
                                </Card>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
