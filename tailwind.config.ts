
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Rajdhani', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyberpunk: {
					black: '#0d0e19',
					darkPurple: '#1A1F2C',
					purple: '#7928CA',
					blue: '#0070F3',
					cyan: '#00FFFF',
					pink: '#FF0080',
					yellow: '#F5A623',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', boxShadow: '0 0 20px 2px rgba(0, 255, 255, 0.5)' },
					'50%': { opacity: '0.7', boxShadow: '0 0 40px 6px rgba(0, 255, 255, 0.8)' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '100%' },
					'100%': { backgroundPosition: '0%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'jelly': {
					'0%, 100%': { transform: 'scale(1, 1)' },
					'25%': { transform: 'scale(0.95, 1.05)' },
					'50%': { transform: 'scale(1.05, 0.95)' },
					'75%': { transform: 'scale(0.95, 1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 3s ease infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'jelly': 'jelly 0.6s ease-in-out'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(13, 14, 25, 0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 14, 25, 0.9) 1px, transparent 1px)',
				'glitch': 'linear-gradient(90deg, rgba(255, 0, 128, 0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
				'cyber-glow': 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)'
			},
			boxShadow: {
				'neon-cyan': '0 0 5px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3), 0 0 30px rgba(0, 255, 255, 0.1)',
				'neon-pink': '0 0 5px rgba(255, 0, 128, 0.5), 0 0 20px rgba(255, 0, 128, 0.3), 0 0 30px rgba(255, 0, 128, 0.1)',
				'neon-blue': '0 0 5px rgba(0, 112, 243, 0.5), 0 0 20px rgba(0, 112, 243, 0.3), 0 0 30px rgba(0, 112, 243, 0.1)',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
