/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-red': '#ff003c',
                'neon-blue': '#00f0ff',
                'void-black': '#0a0a0a',
                'cyber-gray': '#121212',
                'ops-green': '#0f0',
            },
            fontFamily: {
                'mono': ['"Fira Code"', 'monospace'], // Suggest Fira Code or Terminal font
                'display': ['"Orbitron"', 'sans-serif'],
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
                scan: {
                    '0%': { top: '0%', opacity: 0 },
                    '50%': { opacity: 1 },
                    '100%': { top: '100%', opacity: 0 },
                }
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scan': 'scan 3s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
}
