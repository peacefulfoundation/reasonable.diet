import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // https://phosphoricons.com
        red: 'hsl(var(--red))',
        orange: 'hsl(var(--orange))',
        yellow: 'hsl(var(--yellow))',
        mustard: 'hsl(var(--mustard))',
        rust: 'hsl(var(--rust))',
        earth: 'hsl(var(--earth))',
        sand: 'hsl(var(--sand))',
        blush: 'hsl(var(--blush))',
        pale: 'hsl(var(--pale))',
        vellum: 'hsl(var(--vellum))',
        ghost: 'hsl(var(--ghost))',
        foam: 'hsl(var(--foam))',
        lichen: 'hsl(var(--lichen))',
        moss: 'hsl(var(--moss))',
        slate: 'hsl(var(--slate))',
        stone: 'hsl(var(--stone))',
        acid: 'hsl(var(--acid))',
        olive: 'hsl(var(--olive))',
        green: 'hsl(var(--green))',
        darkgreen: 'hsl(var(--darkgreen))',
        deepgreen: 'hsl(var(--deepgreen))',
        blue: 'hsl(var(--blue))',
        purple: 'hsl(var(--purple))',
        eggplant: 'hsl(var(--eggplant))',
        elephant: 'hsl(var(--elephant))',
        pewter: 'hsl(var(--pewter))',
        shadow: 'rgba(0, 0, 0, 0.15)',
        scrim: 'rgba(255, 255, 255, 0.05)',
        sheer: 'rgba(194, 186, 196, 0.25)',
        soft: 'rgba(194, 186, 196, 0.7)',
        translucent: 'rgba(255, 255, 255, 0.5)',

        // https://ui.shadcn.com
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      fontFamily: {
        sans: ['Atkinson', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'full',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
