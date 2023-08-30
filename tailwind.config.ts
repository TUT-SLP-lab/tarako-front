import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        base: '#334155',
        light: '#64748b',
      },
      height: {
        header: '100px',
      },
      margin: {
        header: '100px',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config;
