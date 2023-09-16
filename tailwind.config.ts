import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary-100": "#FDF2E4",
      "primary-200": "#FBE3C9",
      "primary-300": "#F5CCAB",
      "primary-500": "#E09370",
      "primary-700": "#A14B38",
      "primary-900": "#6B1915",
    },
  },
  plugins: [],
}
export default config
