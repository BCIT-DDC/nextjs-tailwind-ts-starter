const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontSize: {
            xs: ['0.75rem', { lineHeight: '1rem' }],
            sm: ['0.875rem', { lineHeight: '1.5rem' }],
            base: ['1rem', { lineHeight: '2rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '2rem' }],
            '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
            '3xl': ['2rem', { lineHeight: '2.5rem' }],
            '4xl': ['2.5rem', { lineHeight: '3rem' }],
            '5xl': ['3rem', { lineHeight: '3.5rem' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }],
        },
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Lexend', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'search-red': '#FF2020',
                'search-gray': '#F3F3F3',
                'search-white': '#FFFFFF',
                'search-dark-blue': '#111827',
                'search-bright-blue': '#205FFF',
            },
            boxShadow: {
                search: '0 16px 16px 2px rgba(29,17,51,.04),0 6px 24px 4px rgba(9,32,77,.12),0 8px 12px -5px rgba(29,17,51,.12)',
            },
            maxWidth: {
                '8xl': '88rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
