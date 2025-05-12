// src/styles/theme.ts
import type { MantineThemeOverride, MantineColorsTuple } from "@mantine/core";

// --- Define Custom Colors (Optional) ---
// Example: A Costa Rican inspired green
// This must be an array of 10 string shades for Mantine to use it correctly in its color system.
const costaRicanGreen: MantineColorsTuple = [
	"#e6f7f0", // 0 (lightest)
	"#c3ebd9", // 1
	"#9ddebf", // 2
	"#76d0a6", // 3
	"#50c38c", // 4
	"#39b57b", // 5
	"#2f9f6b", // 6 (Often the default primaryShade for light mode)
	"#25895c", // 7
	"#1c734c", // 8
	"#135e3d", // 9 (darkest)
];

// --- Mantine Theme Override Configuration ---
export const theme: MantineThemeOverride = {
	// Default color scheme for the application
	// colorScheme: "auto", // Can be 'light', 'dark', or 'auto'

	// --- Primary Color ---
	primaryColor: "costaRicanGreen", // This refers to the KEY in the 'colors' object below

	// Mantine typically uses shade 6 for light mode and shade 8 for dark mode as the default interactive primary color.
	// If your 'main' shade for costaRicanGreen is different (e.g., index 5), you can specify:
	// primaryShade: 5,
	// Or for different shades in light/dark mode:
	primaryShade: { light: 6, dark: 7 }, // Sticking with 6 for light as an example

	// --- Custom Colors Palette ---
	// Make your custom colors available throughout the app via `theme.colors.yourColorName`
	colors: {
		// The key here ('costaRicanGreen') is what you use for primaryColor
		// or when you access it like theme.colors.costaRicanGreen[shadeIndex]
		costaRicanGreen: costaRicanGreen,
		// You can add other custom colors here:
		// 'myVibrantBlue': ['#E9F0FF', ..., '#0D3A9E'],
	},

	// --- Typography (Examples - uncomment and modify as needed) ---
	// fontFamily: 'Open Sans, sans-serif', // Ensure font is loaded via CSS or a font provider
	// headings: {
	//   fontFamily: 'Roboto, sans-serif',
	//   sizes: {
	//     h1: { fontSize: '2.2rem' },
	//   },
	// },

	// --- Default Border Radius ---
	// defaultRadius: 'md', // 'xs', 'sm', 'md', 'lg', 'xl'

	// --- Component Overrides (Examples - uncomment and modify as needed) ---
	// components: {
	//   Button: {
	//     defaultProps: {
	//       // size: 'md',
	//     },
	//     // styles: (theme, params, { variant }) => ({ /* ... */ }),
	//   },
	//   Paper: {
	//     defaultProps: {
	//       // shadow: 'xs',
	//       // withBorder: true,
	//     },
	//   },
	// },
};
