/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "primary-color": "var(--color-bg-primary)",
        "secondary-color": "var(--color-bg-secondary)",
        "action-primary": "var(--color-action-primary)",
        "action-secondary": "var(--color-action-secondary)",
        "hover-primary": "var(--color-hover-primary)",
        "focus-primary": "var(--color-focus-primary)",
        "focus-secondary": "var(--color-focus-secondary)",
        "hover-secondary": "var(--color-hover-secondary)",

      },
      actionColor: {
        
      },
      borderColor: {
        "primary-color": "var(--color-border-primary)",
        "secondary-color": "var(--color-border-secondary)",
        "tertiary-color": "var(--color-border-tertiary)",
        "quaternary-color": "var(--color-border-quaternary)",
      },
      textColor: {
        "primary-color": "var(--color-text-primary)",
        "secondary-color": "var(--color-text-secondary)",
        "tertiary-color": "var(--color-text-tertiary)",
        "quaternary-color": "var(--color-text-quaternary)",
      },
    },
    screens: {
      'sm': '400px',
  
      'md': '800px',
  
      'lg': '1024px',
  
      'xl': '1200px',
  
      '2xl': '1536px',
    },
  },
  
  plugins: [],
};
