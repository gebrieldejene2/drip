import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   ransel: ["Ransel"],
      // },
      colors: {
        darkGray: '#2D2D2D',
        lightGray: '#525050',
        cloud: '#DDDDDD',
      },
    },
  },
  plugins: [],
}
export default config
