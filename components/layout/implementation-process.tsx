"use client";

import { motion } from "framer-motion";
import { Phone, Search, FileText, Hammer, Link as LinkIcon, TestTube, GraduationCap, RefreshCw, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ImplementationProcess() {
    const steps = [
        {
            number: "01",
            title: "Discovery Call",
            icon: Phone,
            duration: "30-60 minutes",
            description: "We discuss your business goals, pain points, and automation opportunities.",
            outcome: "Clear understanding of your needs and initial automation roadmap",
            color: "from-blue-500 to-cyan-500"
        },
        {
            number: "02",
            title: "Automation Audit",
            icon: Search,
            duration: "3-5 days",
            description: "Deep dive into your current processes, systems, and workflows to identify automation opportunities.",
            outcome: "Comprehensive audit report with prioritized automation recommendations",
            color: "from-cyan-500 to-teal-500"
        },
        {
            number: "03",
            title: "Strategy Blueprint",
            icon: FileText,
            duration: "5-7 days",
            description: "Create a detailed implementation plan with timelines, milestones, and expected outcomes.",
            outcome: "Custom automation strategy document and project timeline",
            color: "from-teal-500 to-green-500"
        },
        {
            number: "04",
            title: "Build Phase",
            icon: Hammer,
            duration: "2-6 weeks",
            description: "Our team builds your custom automations, AI agents, and workflows according to the blueprint.",
            outcome: "Fully developed automation systems ready for integration",
            color: "from-green-500 to-emerald-500"
        },
        {
            number: "05",
            title: "Integration Phase",
            icon: LinkIcon,
            duration: "1-2 weeks",
            description: "Connect all systems, import data, and ensure seamless communication between platforms.",
            outcome: "All systems integrated and communicating properly",
            color: "from-emerald-500 to-lime-500"
        },
        {
            number: "06",
            title: "Testing + QA",
            icon: TestTube,
            duration: "3-5 days",
            description: "Rigorous testing of all automations, edge cases, and failure scenarios.",
            outcome: "Bug-free, production-ready automation systems",
            color: "from-lime-500 to-yellow-500"
        },
        {
            number: "07",
            title: "Team Training",
            icon: GraduationCap,
            duration: "2-3 days",
            description: "Comprehensive training for your team on using and managing the new automation systems.",
            outcome: "Confident team with full documentation and support materials",
            color: "from-yellow-500 to-orange-500"
        },
        {
            number: "08",
            title: "Maintenance & Updates",
            icon: RefreshCw,
            duration: "Ongoing",
            description: "Continuous monitoring, optimization, and updates to keep your automations running smoothly.",
            outcome: "Peak performance with regular improvements and support",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="implementation-process" className="py-20 md:py-32 relative overflow-hidden">
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
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Our Process
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        From Discovery to Delivery
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        A proven 8-step process that transforms your business operations from manual to automated.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-6 md:left-1/2 top-24 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent -z-10 hidden md:block" />
                            )}

                            <div className={`flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Content Card */}
                                <div className="flex-1">
                                    <div className={`h-full p-[1px] rounded-xl bg-gradient-to-br ${step.color} hover:shadow-lg transition-all duration-300`}>
                                        <Card className="border-0 h-full bg-background/95 backdrop-blur-sm">
                                            <CardContent className="p-6">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className={`p-3 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-10`}>
                                                        <step.icon className="h-6 w-6 text-white" style={{
                                                            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
                                                        }} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <span className={`text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                                                                {step.number}
                                                            </span>
                                                            <div>
                                                                <h3 className="text-xl font-bold">{step.title}</h3>
                                                                <Badge variant="outline" className="text-xs mt-1">
                                                                    {step.duration}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted-foreground mb-4">
                                                            {step.description}
                                                        </p>
                                                        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                                            <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-1">
                                                                Outcome:
                                                            </p>
                                                            <p className="text-sm text-green-600 dark:text-green-300">
                                                                {step.outcome}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:flex items-start justify-center pt-6">
                                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${step.color} shadow-lg`} />
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Total Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="max-w-2xl mx-auto p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4">Total Implementation Timeline</h3>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
                                    <div>
                                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                            4-8 weeks
                                        </div>
                                        <div className="text-sm text-muted-foreground">Average project duration</div>
                                    </div>
                                    <div className="hidden md:block w-px h-16 bg-border" />
                                    <div>
                                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                            Ongoing
                                        </div>
                                        <div className="text-sm text-muted-foreground">Continuous optimization</div>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Every project is unique. We'll provide a detailed timeline during your discovery call.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
