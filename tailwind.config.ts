import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'regular-text': '#6E728E',
        'bold-text': '#4A4D60',
        'purple-text': '#6D72DE',
        'main-bg-color': '#F7F7FE',
      },
       backgroundImage: {
        'main-gradient': 'linear-gradient(to right, #A2A7F0, #696EDD)',
        'main-gradient-hover': 'linear-gradient(to right, #8083C7, #4749B2)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
