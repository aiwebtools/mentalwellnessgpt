
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
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(20px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1', 
						boxShadow: '0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(121, 40, 202, 0.3), 0 0 60px rgba(255, 0, 128, 0.2)',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.8', 
						boxShadow: '0 0 40px rgba(0, 255, 255, 0.7), 0 0 80px rgba(121, 40, 202, 0.5), 0 0 120px rgba(255, 0, 128, 0.4)',
						transform: 'scale(1.02)'
					}
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '100%' },
					'100%': { backgroundPosition: '0%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'33%': { transform: 'translateY(-15px) rotate(2deg)' },
					'66%': { transform: 'translateY(-8px) rotate(-1deg)' }
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
				},
				'divine-glow': {
					'0%, 100%': { 
						filter: 'brightness(1) contrast(1)',
						boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)'
					},
					'50%': { 
						filter: 'brightness(1.2) contrast(1.1)',
						boxShadow: '0 0 50px rgba(0, 255, 255, 0.6)'
					}
				},
				'holy-light': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' },
					'100%': { opacity: '0', transform: 'scale(1.2)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
					'50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 3s ease infinite',
				'float': 'float 8s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'jelly': 'jelly 0.6s ease-in-out',
				'divine-glow': 'divine-glow 6s ease-in-out infinite',
				'holy-light': 'holy-light 3s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
				'glitch': 'linear-gradient(90deg, rgba(255, 0, 128, 0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)',
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
				'cyber-glow': 'radial-gradient(circle at center, rgba(0, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)'
			},
			boxShadow: {
				'neon-cyan': '0 0 10px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4), 0 0 50px rgba(0, 255, 255, 0.2)',
				'neon-pink': '0 0 10px rgba(255, 0, 128, 0.6), 0 0 30px rgba(255, 0, 128, 0.4), 0 0 50px rgba(255, 0, 128, 0.2)',
				'neon-blue': '0 0 10px rgba(0, 112, 243, 0.6), 0 0 30px rgba(0, 112, 243, 0.4), 0 0 50px rgba(0, 112, 243, 0.2)',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(12px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
