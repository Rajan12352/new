"use client";

import { motion } from "framer-motion";
import { Users, Bot, Check, X, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CostCalculator() {
    const humanCosts = [
        { item: "Monthly Salary", cost: "₹30,000" },
        { item: "Benefits & Insurance", cost: "₹5,000" },
        { item: "Training & Onboarding", cost: "₹10,000", note: "(one-time)" },
        { item: "Office Space & Equipment", cost: "₹3,000" },
        { item: "Management Overhead", cost: "₹2,000" },
    ];

    const humanLimitations = [
        "Works only 8 hours/day",
        "Needs sick leave & vacation",
        "Requires constant training",
        "Can experience burnout",
        "Limited to one task at a time",
        "Inconsistent quality",
    ];

    const aiAdvantages = [
        "Works 24/7/365",
        "Never takes leave",
        "No training needed",
        "Never gets tired",
        "Handles unlimited tasks simultaneously",
        "Consistent quality always",
    ];

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
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Cost Comparison
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Hiring a Human vs AI Automation
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        See the real cost difference and make the smart choice for your business
                    </p>
                </motion.div>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                    {/* Human Employee Cost */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="border-2 border-red-200 dark:border-red-900 h-full">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/20">
                                        <Users className="h-6 w-6 text-red-600" />
                                    </div>
                                    <CardTitle className="text-2xl">Hiring a Human</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {/* Cost Breakdown */}
                                <div className="space-y-3 mb-6">
                                    {humanCosts.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center pb-3 border-b border-border/50">
                                            <div>
                                                <div className="font-medium text-sm">{item.item}</div>
                                                {item.note && (
                                                    <div className="text-xs text-muted-foreground">{item.note}</div>
                                                )}
                                            </div>
                                            <div className="font-bold text-red-600">{item.cost}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Total */}
                                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900 mb-6">
                                    <div className="flex justify-between items-center">
                                        <div className="font-semibold">Total Monthly Cost</div>
                                        <div className="text-3xl font-bold text-red-600">₹40,000+</div>
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">+ ₹10,000 one-time setup</div>
                                </div>

                                {/* Limitations */}
                                <div>
                                    <h4 className="font-semibold mb-3 text-sm">Limitations:</h4>
                                    <ul className="space-y-2">
                                        {humanLimitations.map((limitation, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                                                {limitation}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* AI Automation Cost */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="border-2 border-green-200 dark:border-green-900 h-full shadow-lg">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/20">
                                        <Bot className="h-6 w-6 text-green-600" />
                                    </div>
                                    <CardTitle className="text-2xl">AI Automation</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {/* Pricing Tiers */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                                        <div className="font-medium text-sm">Starter Plan</div>
                                        <div className="font-bold text-green-600">₹14,999/mo</div>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                                        <div className="font-medium text-sm">Pro Plan (Most Popular)</div>
                                        <div className="font-bold text-green-600">₹39,999/mo</div>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                                        <div className="font-medium text-sm">Enterprise Plan</div>
                                        <div className="font-bold text-green-600">₹99,999/mo</div>
                                    </div>
                                </div>

                                {/* Savings Highlight */}
                                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900 mb-6">
                                    <div className="flex justify-between items-center">
                                        <div className="font-semibold">You Save (vs 1 employee)</div>
                                        <div className="text-3xl font-bold text-green-600">₹25,000+</div>
                                    </div>
                                    <div className="text-xs text-green-600 mt-1">Even with Pro plan!</div>
                                </div>

                                {/* Advantages */}
                                <div>
                                    <h4 className="font-semibold mb-3 text-sm">Advantages:</h4>
                                    <ul className="space-y-2">
                                        {aiAdvantages.map((advantage, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                                                <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                {advantage}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Card className="max-w-4xl mx-auto border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                        <CardContent className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                        3x
                                    </div>
                                    <div className="text-sm text-muted-foreground">More Productive</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                        62%
                                    </div>
                                    <div className="text-sm text-muted-foreground">Cost Savings</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                        24/7
                                    </div>
                                    <div className="text-sm text-muted-foreground">Always Working</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
