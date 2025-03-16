"use client"

import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
    ssr: false, loading() {
        return <div>theme...</div>
    }
});

export default function ThemeProvider() {
    return <ThemeToggle />
}