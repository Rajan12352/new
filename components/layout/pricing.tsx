"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

const pricingPlans = [
    {
        name: "Starter",
        price: 14999,
        priceDisplay: "₹14,999",
        period: "/month",
        setup: "₹15,000 one-time setup",
        savings: "Save ₹20,000/month vs hiring",
        roi: "ROI in 45 days",
        description: "Perfect for solopreneurs starting their automation journey",
        deliverables: [
            "2 automated workflows",
            "1 AI chatbot (24/7 support)",
            "Email automation system",
            "Basic CRM integration",
            "Email support",
            "Unlimited revisions (7 days)",
        ],
        timeSaved: "15 hours/month",
        valueEquivalent: "₹22,500 worth of manual work",
        cta: "Contact Sales",
        popular: false,
    },
    {
        name: "Pro",
        price: 39999,
        priceDisplay: "₹39,999",
        period: "/month",
        setup: "₹50,000 one-time setup",
        savings: "Save ₹45,000/month vs hiring 2 people",
        roi: "ROI in 60 days",
        description: "Business-level automation for growing companies",
        deliverables: [
            "7 automated workflows",
            "3 AI agents (Sales, Support, Marketing)",
            "Complete CRM setup + integration",
            "Reporting dashboard",
            "Social media automation",
            "Priority support (24/7)",
            "Unlimited revisions (7 days)",
        ],
        timeSaved: "50 hours/month",
        valueEquivalent: "₹75,000 worth of manual work",
        cta: "Contact Sales",
        popular: true,
        badge: "BEST VALUE",
    },
    {
        name: "Enterprise",
        price: 99999,
        priceDisplay: "₹99,999",
        period: "/month",
        setup: "Custom setup (₹1.5L - ₹3L)",
        savings: "Save ₹1.5L+/month vs hiring team",
        roi: "ROI in 90 days",
        description: "Complete business automation with dedicated support",
        deliverables: [
            "Unlimited automated workflows",
            "Unlimited AI agents",
            "Full system automation",
            "Custom CRM build",
            "Advanced analytics & BI",
            "Dedicated account manager",
            "White-glove onboarding",
            "24/7 priority support",
            "Unlimited revisions (30 days)",
        ],
        timeSaved: "200+ hours/month",
        valueEquivalent: "₹3,00,000+ worth of manual work",
        cta: "Contact Sales",
        popular: false,
    },
];

export function Pricing() {
    const router = useRouter();

    const handlePayment = async (plan: typeof pricingPlans[0]) => {
        // Redirect to contact sales for all plans
        router.push('/contact-sales');
    };

    return (
        <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background -z-10"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <Badge variant="outline" className="mb-4">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Pricing
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        Choose the plan that fits your business. Contact our sales team to get started.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <div className={`h-full p-[1px] rounded-xl bg-gradient-to-br ${plan.popular ? 'from-primary to-secondary shadow-lg' : 'from-primary/20 to-secondary/20'} hover:from-primary hover:to-secondary transition-all duration-300`}>
                                <Card className="border-0 h-full flex flex-col bg-background/95 backdrop-blur-sm relative overflow-hidden">
                                    {plan.popular && (
                                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg z-10">
                                            Most Popular
                                        </div>
                                    )}
                                    <CardHeader className="pb-8">
                                        <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                                        <div className="mt-4">
                                            <div className="flex items-baseline">
                                                <span className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                                    {plan.priceDisplay}
                                                </span>
                                                <span className="text-muted-foreground ml-2">{plan.period}</span>
                                            </div>
                                            {plan.setup && (
                                                <div className="text-sm text-muted-foreground mt-2">
                                                    + {plan.setup}
                                                </div>
                                            )}
                                        </div>
                                        <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col gap-6">
                                        {/* Value Props */}
                                        <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-muted-foreground">Monthly Savings:</span>
                                                <span className="font-semibold text-green-600 dark:text-green-400">{plan.savings}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-muted-foreground">Time Saved:</span>
                                                <span className="font-semibold text-primary">{plan.timeSaved}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-muted-foreground">ROI Speed:</span>
                                                <span className="font-semibold text-primary">{plan.roi}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4 flex-grow">
                                            <div className="text-sm font-semibold">What's included:</div>
                                            <ul className="space-y-3">
                                                {plan.deliverables.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button
                                            className={`w-full mt-8 ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`}
                                            variant={plan.popular ? 'default' : 'outline'}
                                            asChild
                                        >
                                            <Link href="/contact-sales">
                                                {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-muted-foreground mb-6">Trusted by leading businesses worldwide</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-8 w-24 bg-muted rounded"></div>
                        ))}
                    </div>
                </motion.div>

                {/* Payment security */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-muted-foreground">
                        🔒 Secure payment powered by Razorpay • All transactions are encrypted
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
