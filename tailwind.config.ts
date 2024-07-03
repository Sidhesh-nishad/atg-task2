import type { Config } from "tailwindcss"

import { nextui } from "@nextui-org/react";

const config: Config = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			poppins: ["var(--font-poppins)"],
		},
		extend: {
			colors: {
				"primary": "#024EF3"
			},
			translate: {
				"100": "100%",
				"200": "200%",
				"300": "300%",
				"400": "400%",
			},
			borderRadius: {
				"SM": "0.1875rem",
				"2.5xl": "1.25rem",
				"2lg": "0.625rem",
				"2sm": "0.3125rem",
				"5xl": "2.5rem",
			},
			fontSize: {
				"s": "0.5625rem",
				"xss": "0.625rem",
				"xsS": "0.8125rem",
			},
			width: {
				"4.5": "1.125rem",
				"7.5": "1.875rem",
				"85": "22.5rem",
			},
			height: {
				"4.5": "1.125rem",
				"100": "24.6875rem",
				"26": "6.75rem",
				"18": "4.6875rem"
			},
			maxHeight: {
				"100": "24.6875rem",
			},
			screens: {
				"3xl": "1920px",
			},
			scale: {
				"102": "1.02",
			},
			backdropBlur: {
				"xs": "0.125rem",
			},
			padding: {
				"0.75": "0.1875rem",
				"7.5": "1.875rem",
				"4.5": "1.125rem",
			},
			margin: {
				"7.5": "1.875rem",
			},
			gap: {
				"15": "3.75rem",
				"7.5": "1.875rem",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		nextui(),
	],
};

export default config