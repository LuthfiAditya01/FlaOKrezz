/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // "./**/*.{html,js}", // Update this path to match your project structure
        './*.html', // Add other paths if needed
    ],
    theme: {
        extend: {
            fontFamily: {
                DynaPuff: ['DynaPuff', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
