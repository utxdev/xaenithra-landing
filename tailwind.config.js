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
                'neon-blue': '#00f3ff',
                'matrix-green': '#0f0',
                'cyber-black': '#050505',
                'cyber-gray': '#121212',
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
                }
            }
        },
    },
    plugins: [],
}
