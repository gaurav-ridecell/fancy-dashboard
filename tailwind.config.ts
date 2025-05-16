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
			colors: {
				border: 'hsl(var(--a-074347-border))',
				input: 'hsl(var(--a-074347-input))',
				ring: 'hsl(var(--a-074347-ring))',
				background: 'hsl(var(--a-074347-background))',
				foreground: 'hsl(var(--a-074347-foreground))',
				primary: {
					DEFAULT: 'hsl(var(--a-074347-primary))',
					foreground: 'hsl(var(--a-074347-primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--a-074347-secondary))',
					foreground: 'hsl(var(--a-074347-secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--a-074347-destructive))',
					foreground: 'hsl(var(--a-074347-destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--a-074347-muted))',
					foreground: 'hsl(var(--a-074347-muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--a-074347-accent))',
					foreground: 'hsl(var(--a-074347-accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--a-074347-popover))',
					foreground: 'hsl(var(--a-074347-popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--a-074347-card))',
					foreground: 'hsl(var(--a-074347-card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--a-074347-sidebar-background))',
					foreground: 'hsl(var(--a-074347-sidebar-foreground))',
					primary: 'hsl(var(--a-074347-sidebar-primary))',
					'primary-foreground': 'hsl(var(--a-074347-sidebar-primary-foreground))',
					accent: 'hsl(var(--a-074347-sidebar-accent))',
					'accent-foreground': 'hsl(var(--a-074347-sidebar-accent-foreground))',
					border: 'hsl(var(--a-074347-sidebar-border))',
					ring: 'hsl(var(--a-074347-sidebar-ring))'
				},
				// Custom color palette for agricultural theme
				agri: {
					'primary': '#4CAF50',
					'primary-light': '#81C784',
					'primary-dark': '#388E3C',
					'secondary': '#8D6E63',
					'secondary-light': '#A1887F',
					'secondary-dark': '#6D4C41',
					'accent': '#FFB74D',
					'background': '#F5F7FA',
					'surface': '#FFFFFF',
					'text': '#263238',
					'text-light': '#546E7A',
					'success': '#66BB6A',
					'warning': '#FFA726',
					'danger': '#EF5350',
					'info': '#29B6F6'
				}
			},
			borderRadius: {
				lg: 'var(--a-074347-radius)',
				md: 'calc(var(--a-074347-radius) - 2px)',
				sm: 'calc(var(--a-074347-radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
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
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'slide-out': 'slide-out 0.3s ease-out',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Inter', 'sans-serif']
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
				'glass-hover': '0 8px 32px rgba(0, 0, 0, 0.15)',
				'card': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
				'card-hover': '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1)'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwind-scrollbar")
	],
} satisfies Config;
