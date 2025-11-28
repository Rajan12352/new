import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Simulate real-time data with realistic variations
        const baseActiveUsers = 10000;
        const baseTasksAutomated = 500000000;
        const baseTotalCustomers = 5000;

        // Add random fluctuations to simulate real-time changes
        const stats = {
            activeUsers: baseActiveUsers + Math.floor(Math.random() * 1000) - 500,
            tasksAutomated: baseTasksAutomated + Math.floor(Math.random() * 100000),
            uptime: 99.9,
            totalCustomers: baseTotalCustomers + Math.floor(Math.random() * 100),
            avgResponseTime: 120 + Math.floor(Math.random() * 30),
            timestamp: new Date().toISOString(),
        };

        return NextResponse.json(stats, {
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            },
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch stats' },
            { status: 500 }
        );
    }
}
