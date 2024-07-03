import withPlugins from "next-compose-plugins";

const isProdEnv = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
const nextConfig =
{
	reactStrictMode: true,
	cleanDistDir: true,
	compress: true,

	typescript: {
		tsconfigPath: "./tsconfig.json",
	},

	compiler: isProdEnv ? {
		reactRemoveProperties: true,
		removeConsole: { exclude: ["error", "warn"] }
	} : undefined
};

const config = withPlugins([], nextConfig);

export default config;