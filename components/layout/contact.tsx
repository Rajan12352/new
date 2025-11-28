"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
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
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            } else {
                const errorData = data;
                throw new Error(errorData.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error submitting form:', error);

            // Fallback to mailto
            const fullName = `${formData.firstName} ${formData.lastName}`.trim();
            const subject = `Contact Request from ${fullName || 'Anonymous'}`;
            const body = `Name: ${fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
            const mailtoLink = `mailto:autogrow13@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            setError('Unable to send message at this time. Opening your email client to send the message...');

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

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Get Started Today
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl">
                        Ready to transform your business with AI automation? Contact us to learn more.
                    </p>

                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
                            <p className="text-muted-foreground mb-8">
                                Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Email</h4>
                                    <p className="text-muted-foreground">autogrow13@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Phone</h4>
                                    <p className="text-muted-foreground">+91 7603917369</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Office</h4>
                                    <p className="text-muted-foreground">
                                        Vakkanangundu<br />
                                        Virudhunagar, Tamil Nadu
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-semibold mb-4">Business Hours</h4>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="h-full p-[1px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-all duration-300">
                            <Card className="border-0 bg-background/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle>Send us a message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center py-12 text-center"
                                        >
                                            <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                                                <CheckCircle className="h-8 w-8 text-green-500" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                            <p className="text-muted-foreground">
                                                Thank you for contacting us. We'll get back to you soon.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label htmlFor="firstName" className="text-sm font-medium">
                                                        First Name *
                                                    </label>
                                                    <Input
                                                        id="firstName"
                                                        name="firstName"
                                                        placeholder="John"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isLoading}
                                                        autoComplete="off"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="lastName" className="text-sm font-medium">
                                                        Last Name *
                                                    </label>
                                                    <Input
                                                        id="lastName"
                                                        name="lastName"
                                                        placeholder="Doe"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isLoading}
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-medium">
                                                        Email *
                                                    </label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isLoading}
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium">
                                                    Phone
                                                </label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+1 (555) 123-4567"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    disabled={isLoading}
                                                    autoComplete="off"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium">
                                                    Message *
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Tell us about your business and how we can help..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    required
                                                    disabled={isLoading}
                                                />
                                            </div>

                                            {error && (
                                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                                                    <p className="text-sm text-red-500">{error}</p>
                                                </div>
                                            )}

                                            <Button
                                                type="submit"
                                                className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    "Sending..."
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-4 w-4" />
                                                        Send Message
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
