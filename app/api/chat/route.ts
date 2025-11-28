import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Demo mode responses when API key is not configured
const demoResponses: { [key: string]: string } = {
    hello: "Hello! 👋 I'm AutoGrow AI Assistant. I'm here to help you understand our platform and answer your questions about automation, workflows, and business growth.",
    features: "AutoGrow offers powerful features including:\n\n✨ AI Workflow Builder - Automate your business processes\n🎯 AI Marketing Engine - Run smart campaigns\n💬 AI Sales Agent - Engage customers 24/7\n📊 Analytics Dashboard - Track your performance\n🔗 Integrations Hub - Connect your favorite tools\n🛍️ Marketplace - Access pre-built templates",
    pricing: "We offer flexible pricing plans:\n\n💼 Professional Plan - Perfect for growing businesses\n🚀 Enterprise Plan - For large organizations\n\nBoth plans include all core features with different usage limits. Contact us for custom pricing!",
    help: "I can help you with:\n\n• Understanding AutoGrow features\n• Getting started with automation\n• Setting up workflows\n• Integrating with other tools\n• Troubleshooting issues\n\nWhat would you like to know more about?",
    workflow: "Creating a workflow is easy!\n\n1. Go to the Workflows page\n2. Click 'New Workflow'\n3. Choose a template or start from scratch\n4. Configure your triggers and actions\n5. Test and activate\n\nYou can automate emails, data sync, notifications, and much more!",
    default: "I'm AutoGrow AI Assistant, here to help you! 🤖\n\nTry asking about:\n• Features - What can AutoGrow do?\n• Pricing - Our plans and pricing\n• Workflows - How to create automations\n• Help - What I can assist with",
};

function getDemoResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
        return demoResponses.hello;
    }
    if (lowerMessage.includes("feature") || lowerMessage.includes("what can") || lowerMessage.includes("capabilities")) {
        return demoResponses.features;
    }
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("plan")) {
        return demoResponses.pricing;
    }
    if (lowerMessage.includes("help") || lowerMessage.includes("support")) {
        return demoResponses.help;
    }
    if (lowerMessage.includes("workflow") || lowerMessage.includes("automat") || lowerMessage.includes("create")) {
        return demoResponses.workflow;
    }

    return demoResponses.default;
}

const openai = process.env.OPENAI_API_KEY ? new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
}) : null;

export async function POST(request: NextRequest) {
    try {
        const { message, conversationHistory } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        // Demo mode - no API key configured
        if (!process.env.OPENAI_API_KEY || !openai) {
            const demoReply = getDemoResponse(message);

            return NextResponse.json({
                success: true,
                reply: demoReply,
                demo: true,
            });
        }

        // Real ChatGPT-4 mode
        const messages: any[] = [
            {
                role: "system",
                content: `You are AutoGrow AI Assistant, a helpful and friendly AI chatbot for AutoGrow - an AI-powered business automation platform. 

Your role is to:
- Help users understand AutoGrow's features and capabilities
- Answer questions about automation, workflows, and AI agents
- Provide guidance on how to use the platform
- Be concise, helpful, and professional
- If you don't know something, be honest about it

AutoGrow offers:
- AI Workflow Builder for automation
- AI Marketing Engine for campaigns
- AI Sales Agent for customer conversations
- Analytics & BI Dashboard
- Integrations Hub
- Marketplace for templates

Keep responses brief and actionable. Use emojis occasionally to be friendly.`,
            },
            ...conversationHistory,
            {
                role: "user",
                content: message,
            },
        ];

        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: messages,
            temperature: 0.7,
            max_tokens: 500,
        });

        const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

        return NextResponse.json({
            success: true,
            reply: reply,
            demo: false,
        });
    } catch (error: any) {
        console.error("ChatGPT API error:", error);

        // Fallback to demo mode on error
        const demoReply = "I'm AutoGrow AI Assistant, here to help you! 🤖\n\nTry asking about:\n• Features - What can AutoGrow do?\n• Pricing - Our plans and pricing\n• Workflows - How to create automations\n• Help - What I can assist with";

        return NextResponse.json({
            success: true,
            reply: demoReply,
            demo: true,
            error: "Switched to demo mode due to API error",
        });
    }
}
