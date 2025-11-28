"use client";

import { useState } from "react";
import { CheckCircle, Send, Building2, Users, ShieldCheck, Zap, ArrowRight } from "lucide-react";
// import RosiImg from "@/public/Rosi.png";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBackground } from "@/components/ui/tech-background";
import Image from "next/image";

export default function ContactSalesPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        companySize: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    companyName: "",
                    companySize: "",
                    message: "",
                });
            } else {
                throw new Error('Failed to send request');
            }
        } catch (error) {
            console.error('Error submitting form:', error);

            // Fallback to mailto
            const subject = `Sales Inquiry from ${formData.firstName} ${formData.lastName} - ${formData.companyName}`;
            const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.companyName}\nSize: ${formData.companySize}\n\nMessage:\n${formData.message}`;
            const mailtoLink = `mailto:autogrow13@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            setError('Opening your email client to send the request...');

            // Small delay to show the message before opening email client
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 1500);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (value: string) => {
        setFormData({
            ...formData,
            companySize: value,
        });
    };

    const benefits = [
        {
            icon: Building2,
            title: "Enterprise-Grade Scale",
            description: "Infrastructure designed to handle millions of automations with 99.9% uptime SLA."
        },
        {
            icon: Users,
            title: "Dedicated Support Team",
            description: "Get priority access to our solution architects and customer success managers."
        },
        {
            icon: ShieldCheck,
            title: "Advanced Security",
            description: "SSO, audit logs, role-based access control, and custom data retention policies."
        },
        {
            icon: Zap,
            title: "Custom Integrations",
            description: "We'll build custom connectors for your proprietary internal tools and legacy systems."
        }
    ];

    return (
        <main className="min-h-screen bg-background relative">
            <TechBackground />
            <Navbar />

            <div className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
                {/* Background Gradients - Removed in favor of TechBackground for consistency */}

                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">

                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Talk to our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sales Team</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                Discover how AutoGrow can transform your business operations. Our experts will help you build a custom automation strategy tailored to your specific needs.
                            </p>

                            <div className="space-y-8">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <benefit.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                                            <p className="text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 rounded-2xl bg-muted/30 border border-border/50 backdrop-blur-sm">
                                <div className="flex flex-col gap-6">
                                    <p className="italic text-lg text-muted-foreground leading-relaxed">
                                        "AutoGrow's enterprise solution helped us scale our operations by 300% without adding headcount. The dedicated support team was instrumental in our success."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                                            <Image
                                                src="/Rosi.svg"
                                                alt="Jeyarosi"
                                                width={56}
                                                height={56}
                                                className="object-cover hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-foreground">Jeyarosi</div>
                                            <div className="text-sm text-primary font-medium">CTO, TechFlow Inc.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl">
                                <Card className="border-0 bg-background/95 backdrop-blur-sm">
                                    <CardHeader className="space-y-1">
                                        <CardTitle className="text-2xl">Contact Sales</CardTitle>
                                        <CardDescription>
                                            Tell us about your company and we'll get in touch shortly.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {isSubmitted ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="flex flex-col items-center justify-center py-16 text-center"
                                            >
                                                <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                                    <CheckCircle className="h-10 w-10 text-green-500" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                                                <p className="text-muted-foreground max-w-xs mx-auto mb-8">
                                                    Thank you for your interest. One of our sales experts will contact you within 24 hours.
                                                </p>
                                                <Button
                                                    onClick={() => setIsSubmitted(false)}
                                                    variant="outline"
                                                >
                                                    Send another message
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
                                                        <Input
                                                            id="firstName"
                                                            name="firstName"
                                                            placeholder="John"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
                                                        <Input
                                                            id="lastName"
                                                            name="lastName"
                                                            placeholder="Doe"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-medium">Work Email *</label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="john@company.com"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        autoComplete="off"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        placeholder="+1 (555) 000-0000"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label htmlFor="companyName" className="text-sm font-medium">Company Name *</label>
                                                    <Input
                                                        id="companyName"
                                                        name="companyName"
                                                        placeholder="Acme Inc."
                                                        value={formData.companyName}
                                                        onChange={handleChange}
                                                        required
                                                        autoComplete="off"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label htmlFor="companySize" className="text-sm font-medium">Company Size *</label>
                                                    <Select onValueChange={handleSelectChange}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select company size" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="1-10">1-10 employees</SelectItem>
                                                            <SelectItem value="11-50">11-50 employees</SelectItem>
                                                            <SelectItem value="51-200">51-200 employees</SelectItem>
                                                            <SelectItem value="201-500">201-500 employees</SelectItem>
                                                            <SelectItem value="501+">501+ employees</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="space-y-2">
                                                    <label htmlFor="message" className="text-sm font-medium">How can we help? *</label>
                                                    <Textarea
                                                        id="message"
                                                        name="message"
                                                        placeholder="Tell us about your automation needs..."
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows={4}
                                                        required
                                                    />
                                                </div>

                                                {error && (
                                                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                                        <p className="text-sm text-red-500">{error}</p>
                                                    </div>
                                                )}

                                                <Button
                                                    type="submit"
                                                    className="w-full h-12 text-base bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? "Sending Request..." : "Contact Sales"}
                                                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                                                </Button>

                                                <p className="text-xs text-center text-muted-foreground mt-4">
                                                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                                                </p>
                                            </form>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
