"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

export function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hi! 👋 I'm AutoGrow AI Assistant. How can I help you today?",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            role: "user",
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const conversationHistory = messages.map((msg) => ({
                role: msg.role,
                content: msg.content,
            }));

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: input,
                    conversationHistory: conversationHistory,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                const assistantMessage: Message = {
                    role: "assistant",
                    content: data.reply,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, assistantMessage]);
            } else {
                const errorMessage: Message = {
                    role: "assistant",
                    content: "Sorry, I'm having trouble connecting right now. Please try again later.",
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, errorMessage]);
            }
        } catch (error) {
            const errorMessage: Message = {
                role: "assistant",
                content: "Oops! Something went wrong. Please try again.",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button - AutoGrow Logo with Animation */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: [0, -10, 0], // Floating animation
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            scale: { duration: 0.3 },
                            opacity: { duration: 0.3 },
                            y: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                        className="fixed bottom-6 right-6 z-50"
                    >
                        <motion.button
                            onClick={() => setIsOpen(true)}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, -5, 0], // Wiggle on hover
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                rotate: { duration: 0.5 },
                            }}
                            className="relative h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary shadow-2xl hover:shadow-primary/50 transition-all group"
                        >
                            {/* Pulsing glow effect */}
                            <motion.div
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-xl"
                            />

                            {/* Button content */}
                            <div className="relative h-full w-full flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Bot className="h-8 w-8 text-white" />
                                </motion.div>
                            </div>

                            {/* Online indicator with pulse */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-background"
                            />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 z-50 w-full max-w-md mx-4 sm:mx-0"
                    >
                        <Card className="flex flex-col h-[600px] max-h-[80vh] shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="relative flex items-center justify-between p-4 bg-gradient-to-r from-primary to-secondary">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                        <Bot className="h-7 w-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">AutoGrow AI</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                                            <p className="text-xs text-white/90">Online</p>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:bg-white/20 rounded-full"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-muted/30 to-background">
                                {messages.map((message, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"
                                            }`}
                                    >
                                        <div
                                            className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${message.role === "user"
                                                ? "bg-gradient-to-br from-blue-500 to-blue-600"
                                                : "bg-gradient-to-br from-primary to-secondary"
                                                }`}
                                        >
                                            {message.role === "user" ? (
                                                <User className="h-4 w-4 text-white" />
                                            ) : (
                                                <Bot className="h-4 w-4 text-white" />
                                            )}
                                        </div>
                                        <div
                                            className={`flex flex-col max-w-[75%] ${message.role === "user" ? "items-end" : "items-start"
                                                }`}
                                        >
                                            <div
                                                className={`rounded-2xl px-4 py-3 ${message.role === "user"
                                                    ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                                                    : "bg-card border shadow-sm"
                                                    }`}
                                            >
                                                <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                                            </div>
                                            <span className="text-xs text-muted-foreground mt-1 px-1">
                                                {message.timestamp.toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                                {isLoading && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex gap-3"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                            <Bot className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="bg-card border shadow-sm rounded-2xl px-4 py-3 flex items-center gap-2">
                                            <Loader2 className="h-4 w-4 animate-spin text-primary" />
                                            <span className="text-sm text-muted-foreground">Thinking...</span>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t bg-background/95 backdrop-blur-sm">
                                <div className="flex gap-2">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Ask me anything..."
                                        disabled={isLoading}
                                        className="flex-1 rounded-full border-2 focus:border-primary transition-colors"
                                    />
                                    <Button
                                        onClick={handleSend}
                                        disabled={!input.trim() || isLoading}
                                        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full h-10 w-10 p-0 shadow-lg"
                                        size="icon"
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="flex items-center justify-center gap-1 mt-3">
                                    <Sparkles className="h-3 w-3 text-primary" />
                                    <p className="text-xs text-muted-foreground">
                                        Powered by <span className="font-semibold text-foreground">AutoGrow AI</span>
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
