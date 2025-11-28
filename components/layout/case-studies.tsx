"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CaseStudies() {
    const caseStudies = [
        {
            company: "E-commerce Store",
            industry: "Retail",
            icon: DollarSign,
            before: {
                responseTime: "2 hours",
                conversion: "12%",
                manualWork: "60 hrs/month",
            },
            after: {
                responseTime: "10 seconds",
                conversion: "39%",
                manualWork: "5 hrs/month",
            },
            results: [
                "27% increase in sales conversion",
                "55 hours saved per month",
                "₹2.5L additional revenue/month",
                "Customer satisfaction up 45%",
            ],
            color: "from-blue-500 to-cyan-500",
        },
        {
            company: "Consulting Firm",
            industry: "Professional Services",
            icon: Users,
            before: {
                proposalTime: "4 days",
                clientOnboarding: "2 weeks",
                followUps: "Manual",
            },
            after: {
                proposalTime: "2 hours",
                clientOnboarding: "2 days",
                followUps: "Automated",
            },
            results: [
                "3x faster client onboarding",
                "₹5L additional revenue/month",
                "90% reduction in proposal time",
                "100% follow-up completion",
            ],
            color: "from-purple-500 to-pink-500",
        },
        {
            company: "Real Estate Agency",
            industry: "Real Estate",
            icon: TrendingUp,
            before: {
                leadQualification: "Manual",
                responseRate: "45%",
                dealsPerMonth: "8 deals",
            },
            after: {
                leadQualification: "AI-powered",
                responseRate: "98%",
                dealsPerMonth: "18 deals",
            },
            results: [
                "125% increase in monthly deals",
                "50% more qualified leads",
                "60 hours saved per month",
                "₹8L additional commission/month",
            ],
            color: "from-green-500 to-emerald-500",
        },
    ];

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
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
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Success Stories
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Real Results from Real Businesses
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        See how automation transformed these businesses and delivered measurable ROI
                    </p>
                </motion.div>

                {/* Case Study Cards */}
                <div className="space-y-12 max-w-6xl mx-auto">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={`p-[1px] rounded-xl bg-gradient-to-br ${study.color} hover:shadow-lg transition-all duration-300`}>
                                <Card className="border-0 h-full bg-background/95 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-3 rounded-lg bg-gradient-to-r ${study.color}`}>
                                                    <study.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-2xl">{study.company}</CardTitle>
                                                    <div className="text-sm text-muted-foreground">{study.industry}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {/* Before/After Comparison */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            {/* Before */}
                                            <div className="p-6 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900">
                                                <h4 className="font-semibold mb-4 text-red-700 dark:text-red-400 flex items-center gap-2">
                                                    <Clock className="h-4 w-4" />
                                                    Before Automation
                                                </h4>
                                                <div className="space-y-3">
                                                    {Object.entries(study.before).map(([key, value], i) => (
                                                        <div key={i} className="flex justify-between items-center">
                                                            <span className="text-sm text-muted-foreground capitalize">
                                                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                                                            </span>
                                                            <span className="font-semibold text-sm">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* After */}
                                            <div className="p-6 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900">
                                                <h4 className="font-semibold mb-4 text-green-700 dark:text-green-400 flex items-center gap-2">
                                                    <TrendingUp className="h-4 w-4" />
                                                    After Automation
                                                </h4>
                                                <div className="space-y-3">
                                                    {Object.entries(study.after).map(([key, value], i) => (
                                                        <div key={i} className="flex justify-between items-center">
                                                            <span className="text-sm text-muted-foreground capitalize">
                                                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                                                            </span>
                                                            <span className="font-semibold text-sm text-green-600">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Results */}
                                        <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                                            <h4 className="font-semibold mb-4 flex items-center gap-2">
                                                <ArrowRight className="h-4 w-4 text-primary" />
                                                Key Results
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {study.results.map((result, i) => (
                                                    <div key={i} className="flex items-start gap-2">
                                                        <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                                                        <span className="text-sm font-medium">{result}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="max-w-2xl mx-auto p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Ready to See Similar Results?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Join hundreds of businesses that have transformed their operations with AI automation
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Badge variant="outline" className="text-base px-4 py-2">
                                        ⚡ Average ROI: 300%
                                    </Badge>
                                    <Badge variant="outline" className="text-base px-4 py-2">
                                        ⏱️ Payback: 60-90 days
                                    </Badge>
                                    <Badge variant="outline" className="text-base px-4 py-2">
                                        📈 Satisfaction: 98%
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
