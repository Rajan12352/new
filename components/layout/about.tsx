"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Users, Zap, Award, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
// Images are referenced directly from public folder
// import ArunImg from "@/public/Arun.png";
// import RosiImg from "@/public/Rosi.png";

export function About() {
    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower businesses with AI-driven automation that transforms operations and accelerates growth.",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
        },
        {
            icon: Users,
            title: "Customer First",
            description: "We prioritize our customers' success, providing dedicated support and tailored solutions.",
            color: "text-green-500",
            bgColor: "bg-green-500/10",
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Constantly evolving our platform with cutting-edge AI technology to stay ahead of the curve.",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
        },
        {
            icon: Shield,
            title: "Security",
            description: "Enterprise-grade security ensuring your data and operations are always protected.",
            color: "text-orange-500",
            bgColor: "bg-orange-500/10",
        },
    ];

    const stats = [
        { value: "2,500+", label: "Active Users" },
        { value: "98%", label: "Customer Satisfaction" },
        { value: "50M+", label: "Tasks Automated" },
        { value: "24/7", label: "Support Available" },
    ];

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        About AutoGrow
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        We're on a mission to revolutionize how businesses operate through intelligent automation and AI-powered solutions.
                    </p>
                </motion.div>

                {/* Story */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <div className="p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
                            <CardContent className="p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4">The Story of Arun Pandian</h3>
                                    <p className="text-lg text-muted-foreground italic">
                                        "You focus on growth. I'll make the work run itself."
                                    </p>
                                </div>
                                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                                    <p>
                                        At just <span className="font-semibold text-foreground">23</span>, Arun Pandian wasn't like most young entrepreneurs.
                                    </p>
                                    <p>
                                        While others chased trends, he chased systems. While many built ideas, he built automation.
                                    </p>
                                    <p className="text-foreground font-medium">
                                        Arun saw business differently.
                                    </p>
                                    <p>
                                        To him, every startup—big or small—was a machine waiting to run smoother. Emails could send themselves, customers could chat with bots, sales could close while founders slept, and workflows could flow like magic.
                                    </p>
                                    <p className="text-foreground font-medium">
                                        So he began his mission:
                                    </p>
                                    <p className="pl-6 border-l-4 border-primary italic">
                                        To bring automation to every business that dreamed of scaling without stress.
                                    </p>
                                    <p>
                                        He launched his agency with a bold promise — <span className="font-semibold text-primary">💡 "You focus on growth. I'll make the work run itself."</span>
                                    </p>
                                    <p>
                                        Clients loved the simplicity.<br />
                                        Founders felt free again.
                                    </p>
                                    <p>
                                        And slowly, story by story, success by success, Arun became known as the young mind who could turn chaos into clarity, and manual work into automatic brilliance.
                                    </p>
                                    <p className="text-center text-xl font-semibold text-foreground pt-6">
                                        Because for Arun Pandian, automation wasn't just technology…
                                    </p>
                                    <p className="text-center text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        ✨ It was the future of every business.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>

                {/* Values */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl font-bold mb-4">Our Values</h3>
                        <p className="text-muted-foreground text-lg">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary transition-all duration-300">
                                    <Card className="h-full border-0 bg-background/95 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                            <div className={`w-12 h-12 rounded-lg ${value.bgColor} flex items-center justify-center mb-4`}>
                                                <value.icon className={`h-6 w-6 ${value.color}`} />
                                            </div>
                                            <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
                            <CardContent className="p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-bold mb-2">By the Numbers</h3>
                                    <p className="text-muted-foreground">Our impact in the automation industry</p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                                {stat.value.includes('+') ? (
                                                    <>
                                                        <AnimatedCounter value={parseInt(stat.value)} />
                                                        <span>+</span>
                                                    </>
                                                ) : stat.value.includes('%') ? (
                                                    <>
                                                        <AnimatedCounter value={parseInt(stat.value)} />
                                                        <span>%</span>
                                                    </>
                                                ) : (
                                                    stat.value
                                                )}
                                            </div>
                                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>

                {/* Founders Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h3>
                        <p className="text-muted-foreground text-lg">
                            The visionaries behind AutoGrow's success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Arun Pandian */}
                        {/* Arun Pandian */}
                        <div className="p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary transition-all duration-300">
                            <Card className="border-0 h-full bg-background/95 backdrop-blur-sm">
                                <CardContent className="p-8 md:p-10">
                                    <div className="text-center mb-6">
                                        <div className="relative mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 w-32 h-32">
                                            <Image
                                                src="/Arun.svg"
                                                alt="Arun Pandian"
                                                width={128}
                                                height={128}
                                                className="object-cover object-[center_20%]"
                                                priority
                                            />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2">Arun Pandian</h4>
                                        <p className="text-lg text-primary font-semibold mb-4">Founder & CEO</p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            At 23, Arun is revolutionizing how businesses approach automation. With a passion for systems thinking and a vision for the future, he's helping companies worldwide transform manual work into automatic brilliance.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div className="text-center p-3 rounded-lg bg-muted/50">
                                            <div className="text-2xl font-bold text-primary mb-1">23</div>
                                            <div className="text-xs text-muted-foreground">Years Old</div>
                                        </div>
                                        <div className="text-center p-3 rounded-lg bg-muted/50">
                                            <div className="text-2xl font-bold text-primary mb-1">2.5K+</div>
                                            <div className="text-xs text-muted-foreground">Clients</div>
                                        </div>
                                        <div className="text-center p-3 rounded-lg bg-muted/50">
                                            <div className="text-2xl font-bold text-primary mb-1">50M+</div>
                                            <div className="text-xs text-muted-foreground">Tasks</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Jeyarosi */}
                        <div className="p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary transition-all duration-300">
                            <Card className="border-0 h-full bg-background/95 backdrop-blur-sm">
                                <CardContent className="p-8 md:p-10">
                                    <div className="text-center mb-6">
                                        <div className="relative mx-auto mb-4 rounded-full overflow-hidden border-4 border-secondary/20 w-32 h-32">
                                            <Image
                                                src="/Rosi.svg"
                                                alt="Jeyarosi"
                                                width={128}
                                                height={128}
                                                className="object-cover object-[center_20%]"
                                                priority
                                            />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2">Jeyarosi</h4>
                                        <p className="text-lg text-secondary font-semibold mb-4">Co-Founder & CTO</p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Jeyarosi brings deep technical expertise and innovation to AutoGrow. With a focus on AI and automation technologies, she ensures our platform stays at the cutting edge of business automation solutions.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div className="text-center p-3 rounded-lg bg-muted/50">
                                            <div className="text-2xl font-bold text-secondary mb-1">AI</div>
                                            <div className="text-xs text-muted-foreground">Expert</div>
                                        </div>
                                        <div className="text-center p-3 rounded-lg bg-muted/50">
                                            <div className="text-2xl font-bold text-secondary mb-1">Tech</div>
                                            <div className="text-xs text-muted-foreground">Leader</div>
                                        </div>
                                        <div className="text-center p-3 rounded-lg bg-muted/50">
                                            <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                                            <div className="text-xs text-muted-foreground">Uptime</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
