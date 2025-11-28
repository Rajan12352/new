"use client";

import useSWR from 'swr';

interface LiveStats {
    activeUsers: number;
    tasksAutomated: number;
    uptime: number;
    totalCustomers: number;
    avgResponseTime: number;
    timestamp: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useLiveStats(refreshInterval: number = 30000) {
    const { data, error, isLoading, isValidating } = useSWR<LiveStats>(
        '/api/stats/live',
        fetcher,
        {
            refreshInterval,
            revalidateOnFocus: false,
            revalidateOnReconnect: true,
            dedupingInterval: 10000,
        }
    );

    return {
        stats: data,
        isLoading,
        isError: !!error,
        isValidating,
    };
}
