import { Poppins } from "next/font/google";

export const poppins = Poppins(
{
	weight: ["300", "400", "500", "600", "700", "100", "200", "800", "900",],
	subsets: ["latin", "latin-ext"],
	variable: "--font-poppins"
});