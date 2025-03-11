import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      sans: ['"Leto"', 'sans-serif']
    },
    extend: {}
  },

  plugins: []
} satisfies Config;
