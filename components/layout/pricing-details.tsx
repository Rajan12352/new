"use client";

import { motion } from "framer-motion";
import { Check, IndianRupee } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PricingDetails() {
    const pricingTiers = [
        {
            name: "Starter",
            price: "₹9,999",
            period: "/month",
            setup: "₹15,000 one-time setup",
            description: "Perfect for small businesses getting started with automation",
            features: [
                "3 automated workflows",
                "1 AI chatbot",
                "Email automation",
                "Basic CRM integration",
                "Email support",
                "Monthly optimization"
            ],
            ideal: "Ideal for: Solopreneurs, Small teams (1-5 people)"
        },
        {
            name: "Growth",
            price: "₹24,999",
            period: "/month",
            setup: "₹35,000 one-time setup",
            description: "For growing businesses ready to scale operations",
            features: [
                "10 automated workflows",
                "3 AI agents (Sales, Support, Marketing)",
                "Advanced email & SMS automation",
                "Full CRM integration",
                "Social media automation",
                "Priority support",
                "Weekly optimization"
            ],
            popular: true,
            ideal: "Ideal for: Growing businesses (5-20 people)"
        },
        {
            name: "Business",
            price: "₹49,999",
            period: "/month",
            setup: "₹75,000 one-time setup",
            description: "Complete automation for established businesses",
            features: [
                "Unlimited workflows",
                "Unlimited AI agents",
                "Complete business automation",
                "Custom integrations",
                "Dedicated account manager",
                "24/7 priority support",
                "Daily optimization",
                "Custom development included"
            ],
            ideal: "Ideal for: Established businesses (20+ people)"
        }
    ];

    return (
        <section id="pricing-details" className="py-20 md:py-32 relative overflow-hidden">
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
                        <IndianRupee className="h-3 w-3 mr-1" />
                        Simple Pricing
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        One Clear Price. Everything Included.
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        No hidden fees. No surprises. Choose your plan and get started today.
                    </p>
                </motion.div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className={`border-2 hover:shadow-xl transition-all duration-300 h-full ${tier.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}
                                <CardHeader className="pb-8">
                                    <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                                    <div className="mb-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                                {tier.price}
                                            </span>
                                            <span className="text-muted-foreground">{tier.period}</span>
                                        </div>
                                        <div className="text-sm text-muted-foreground mt-2">{tier.setup}</div>
                                    </div>
                                    <CardDescription className="text-base">{tier.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="p-3 rounded-lg bg-muted/50 mb-6">
                                        <p className="text-xs text-muted-foreground">{tier.ideal}</p>
                                    </div>
                                    <Link href="/contact-sales" className="block">
                                        <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                                            Get Started
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* What's Included Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Everything You Need to Succeed</h3>
                    <Card className="max-w-4xl mx-auto border-2">
                        <CardContent className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Complete Setup</h4>
                                        <p className="text-sm text-muted-foreground">We handle everything from start to finish</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Training Included</h4>
                                        <p className="text-sm text-muted-foreground">Your team learns how to use everything</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Ongoing Support</h4>
                                        <p className="text-sm text-muted-foreground">We're here when you need help</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Regular Updates</h4>
                                        <p className="text-sm text-muted-foreground">Continuous improvements at no extra cost</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center"
                >
                    <Card className="max-w-2xl mx-auto border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4">Not Sure Which Plan is Right?</h3>
                            <p className="text-muted-foreground mb-6">
                                Talk to us. We'll help you choose the perfect plan for your business size and goals.
                            </p>
                            <Link href="/contact-sales">
                                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                                    Talk to Our Team
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
