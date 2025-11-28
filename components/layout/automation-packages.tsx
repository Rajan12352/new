"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, TrendingUp, Users, MessageSquare, HeadphonesIcon, Sparkles, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AutomationPackages() {
    const [expandedPackage, setExpandedPackage] = useState<number | null>(null);

    const packages = [
        {
            name: "Lead Generation Pack",
            icon: TrendingUp,
            price: "₹45,000",
            tagline: "Convert visitors into qualified leads automatically",
            included: [
                "Landing page optimization automation",
                "Lead capture forms with AI validation",
                "Email sequence automation (5 sequences)",
                "Lead scoring and qualification",
                "CRM integration and sync",
                "Analytics dashboard"
            ],
            problems: [
                "Low conversion rates",
                "Manual lead follow-up",
                "Lost leads due to slow response",
                "Inconsistent lead quality"
            ],
            roi: "3-5x increase in qualified leads within 90 days",
            deliverables: [
                "Automated lead capture system",
                "5 email nurture sequences",
                "Lead scoring model",
                "CRM integration",
                "Performance dashboard",
                "30-day optimization support"
            ]
        },
        {
            name: "CRM Sales Pack",
            icon: Users,
            price: "₹65,000",
            tagline: "Automate your entire sales pipeline",
            included: [
                "Complete CRM setup and configuration",
                "Sales pipeline automation",
                "Follow-up sequence automation",
                "Deal tracking and notifications",
                "Sales team performance tracking",
                "Custom reporting dashboards"
            ],
            problems: [
                "Deals falling through cracks",
                "Inconsistent follow-up",
                "Poor visibility into pipeline",
                "Manual data entry overhead"
            ],
            roi: "40% reduction in sales cycle time, 25% increase in close rate",
            deliverables: [
                "Fully configured CRM",
                "Automated sales workflows",
                "Email and SMS sequences",
                "Custom dashboards",
                "Team training materials",
                "60-day optimization support"
            ]
        },
        {
            name: "Content Automation Pack",
            icon: MessageSquare,
            price: "₹55,000",
            tagline: "Create and distribute content on autopilot",
            included: [
                "AI content generation setup",
                "Social media scheduling automation",
                "Blog post automation",
                "Email newsletter automation",
                "Content calendar management",
                "Multi-platform distribution"
            ],
            problems: [
                "Inconsistent content publishing",
                "Time-consuming content creation",
                "Poor social media engagement",
                "Manual posting across platforms"
            ],
            roi: "10x increase in content output, 3x engagement boost",
            deliverables: [
                "AI content system",
                "30-day content calendar",
                "Automated posting workflows",
                "Analytics integration",
                "Content templates library",
                "45-day optimization support"
            ]
        },
        {
            name: "Support Pack",
            icon: HeadphonesIcon,
            price: "₹50,000",
            tagline: "24/7 automated customer support",
            included: [
                "AI chatbot implementation",
                "Ticket automation system",
                "Knowledge base integration",
                "Auto-response workflows",
                "Escalation rules setup",
                "Support analytics dashboard"
            ],
            problems: [
                "Slow response times",
                "Overwhelmed support team",
                "Repetitive questions",
                "Poor customer satisfaction"
            ],
            roi: "70% reduction in support tickets, 24/7 availability",
            deliverables: [
                "Trained AI chatbot",
                "Automated ticketing system",
                "Knowledge base",
                "Response templates",
                "Analytics dashboard",
                "Ongoing bot training (30 days)"
            ]
        },
        {
            name: "Full Business Automation Suite",
            icon: Sparkles,
            price: "₹2,50,000",
            tagline: "Complete end-to-end business automation",
            popular: true,
            included: [
                "All features from above packages",
                "Custom workflow development",
                "Advanced AI agent deployment",
                "Multi-department integration",
                "Custom reporting and analytics",
                "Dedicated automation engineer",
                "Priority support and maintenance"
            ],
            problems: [
                "Disconnected systems",
                "Manual processes everywhere",
                "Scaling challenges",
                "Team inefficiency"
            ],
            roi: "50-70% operational cost reduction, 5x productivity increase",
            deliverables: [
                "Complete automation infrastructure",
                "All package features integrated",
                "Custom workflows (unlimited)",
                "Advanced AI agents",
                "Executive dashboard",
                "Dedicated support (6 months)",
                "Quarterly optimization reviews"
            ]
        }
    ];

    const standardPackages = packages.slice(0, 4);
    const fullSuite = packages[4];

    return (
        <section id="automation-packages" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
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
                        <Sparkles className="h-3 w-3 mr-1" />
                        Automation Packages
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Pre-Built Solutions for Every Need
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        Choose a package that solves your specific business challenge, or combine multiple for complete automation.
                    </p>
                </motion.div>

                {/* Standard Packages Grid (2x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                    {standardPackages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-full p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary transition-all duration-300">
                                <Card className="border-0 h-full flex flex-col bg-background/95 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 rounded-lg bg-primary/10">
                                                <pkg.icon className="h-8 w-8 text-primary" />
                                            </div>
                                            <div className="text-right">
                                                <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                                                <div className="text-sm text-muted-foreground">one-time</div>
                                            </div>
                                        </div>
                                        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                                        <CardDescription className="text-base">{pkg.tagline}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col">
                                        {/* What's Included */}
                                        <div className="mb-6 flex-grow">
                                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                <Check className="h-4 w-4 text-primary" />
                                                What's Included
                                            </h4>
                                            <ul className="space-y-2 ml-6">
                                                {pkg.included.slice(0, 4).map((item, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                                {pkg.included.length > 4 && expandedPackage !== index && (
                                                    <li className="text-sm text-primary">+ {pkg.included.length - 4} more features</li>
                                                )}
                                                {expandedPackage === index && pkg.included.slice(4).map((item, i) => (
                                                    <li key={i + 4} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Expandable Details */}
                                        {expandedPackage === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="space-y-4 mb-4"
                                            >
                                                {/* Problems Solved */}
                                                <div>
                                                    <h4 className="font-semibold mb-2 text-sm">Problems Solved:</h4>
                                                    <ul className="space-y-1">
                                                        {pkg.problems.map((problem, i) => (
                                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <span className="text-red-500 mt-1">✗</span>
                                                                {problem}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Expected ROI */}
                                                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                                    <h4 className="font-semibold mb-1 text-sm text-green-700 dark:text-green-400">Expected ROI:</h4>
                                                    <p className="text-sm text-green-600 dark:text-green-300">{pkg.roi}</p>
                                                </div>

                                                {/* Deliverables */}
                                                <div>
                                                    <h4 className="font-semibold mb-2 text-sm">Deliverables:</h4>
                                                    <ul className="space-y-1">
                                                        {pkg.deliverables.map((item, i) => (
                                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}

                                        <div className="mt-auto">
                                            {/* Toggle Button */}
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setExpandedPackage(expandedPackage === index ? null : index)}
                                                className="w-full mb-4"
                                            >
                                                {expandedPackage === index ? (
                                                    <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
                                                ) : (
                                                    <>View Full Details <ChevronDown className="ml-2 h-4 w-4" /></>
                                                )}
                                            </Button>

                                            {/* CTA */}
                                            <Link href="/contact-sales" className="block">
                                                <Button className="w-full" variant="outline">
                                                    Get This Package
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Full Suite Featured Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="h-full p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-all duration-300">
                        <Card className="shadow-2xl bg-gradient-to-br from-background to-primary/5 overflow-hidden relative">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 rounded-bl-xl font-semibold z-10">
                                Most Popular Choice
                            </div>
                            <div className="grid md:grid-cols-5 gap-8 p-2">
                                <div className="md:col-span-2 p-6 md:p-8 bg-primary/5 flex flex-col justify-center border-r border-border/50">
                                    <div className="p-4 rounded-2xl bg-background shadow-sm w-fit mb-6">
                                        <fullSuite.icon className="h-12 w-12 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">{fullSuite.name}</h3>
                                    <p className="text-lg text-muted-foreground mb-6">{fullSuite.tagline}</p>
                                    <div className="mb-6">
                                        <div className="text-4xl font-bold text-primary">{fullSuite.price}</div>
                                        <div className="text-muted-foreground">one-time investment</div>
                                    </div>
                                    <Link href="/contact-sales">
                                        <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                                            Get Full Suite
                                        </Button>
                                    </Link>
                                </div>
                                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                                                <Sparkles className="h-5 w-5 text-primary" />
                                                Everything Included
                                            </h4>
                                            <ul className="space-y-3">
                                                {fullSuite.included.map((item, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                                                <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400 flex items-center gap-2">
                                                    <TrendingUp className="h-4 w-4" />
                                                    Massive ROI
                                                </h4>
                                                <p className="text-sm text-green-600 dark:text-green-300 leading-relaxed">
                                                    {fullSuite.roi}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 text-sm">Key Deliverables:</h4>
                                                <ul className="space-y-2">
                                                    {fullSuite.deliverables.slice(0, 4).map((item, i) => (
                                                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                            <span className="text-primary mt-1">•</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                    <li className="text-sm text-primary font-medium">+ {fullSuite.deliverables.length - 4} more deliverables</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* Custom Package CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground mb-4">
                        Need something specific? We can mix and match features.
                    </p>
                    <Link href="/contact-sales" className="inline-flex items-center text-primary hover:underline font-medium">
                        Build a Custom Package <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
