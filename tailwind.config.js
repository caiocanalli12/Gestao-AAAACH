/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                varsity: ['"Varsity Team"', 'sans-serif'],
            },
            colors: {
                'brand-green': '#54e600',
                'forest-green': '#0f3d0f',
                'neon-lime': '#54e600',
            },
            backgroundImage: {
                'lizard-pattern': "url('/src/assets/seamless_verde.png')",
            }
        },
    },
    plugins: [],
}
