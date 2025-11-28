"use client";

import React, { useState, useEffect } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RippleButtonProps extends ButtonProps {
    rippleColor?: string;
    duration?: number;
}

export function RippleButton({
    children,
    className,
    onClick,
    rippleColor = "rgba(255, 255, 255, 0.3)",
    duration = 600,
    ...props
}: RippleButtonProps) {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    useEffect(() => {
        if (ripples.length > 0) {
            const timer = setTimeout(() => {
                setRipples((prevRipples) => prevRipples.slice(1));
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [ripples, duration]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples((prevRipples) => [...prevRipples, newRipple]);

        if (onClick) {
            onClick(e);
        }
    };

    return (
        <Button
            className={cn("relative overflow-hidden", className)}
            onClick={handleClick}
            {...props}
        >
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full animate-ripple"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 0,
                        height: 0,
                        backgroundColor: rippleColor,
                        transform: "translate(-50%, -50%)",
                        animationDuration: `${duration}ms`,
                    }}
                />
            ))}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </Button>
    );
}
