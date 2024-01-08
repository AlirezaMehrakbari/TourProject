import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                kalameh300: ['kalameh300', 'sans-serif'],
                kalameh400: ['kalameh400', 'sans-serif'],
                kalameh500: ['kalameh500', 'sans-serif'],
                kalameh700: ['kalameh700', 'sans-serif'],
                kalamehBold: ['kalamehBold', 'sans-serif'],
                potk: ['potk', 'kalameh300']
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                openModal: {
                    "0%": {opacity: '0', transform: "translateY(-100%)"},
                    "50%": {opacity: '1', transform: "translateY(-10%)"},
                    "100%": {opacity: '1', transform: "translateY(0)"}
                },
                closeModal: {
                    "0%": {opacity: '0', transform: "translateY(0)"},
                    "50%": {opacity: '1', transform: "translateY(60%)"},
                    "100%": {opacity: '1', transform: "translateY(-100%)"}
                }
            },
            animation: {
                openModal: "openModal 0.5s ease-out forwards",
                closeModal: "closeModal 0.5s ease-out forwards"
            },
            colors: {
                'orange': '#FF7512',
                'white': '#FFF',
                'cblue': '#5397D6'
            },
        },
    },
    plugins: [require("daisyui")],
}
export default config
