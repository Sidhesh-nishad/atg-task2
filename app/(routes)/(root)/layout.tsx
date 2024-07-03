import type { NextLayout } from "@types";
import type { Metadata, Viewport } from "next";

import "@styles/globals.scss";

import { cn } from "@utlis";
import { labels } from "@labels";
import config from "@styles/config";
import { Providers } from "./providers";
import { poppins } from "@styles/fonts";
import NextTopLoader from "nextjs-toploader";

import Header from "@root/header";
import DrawerWrapper from "@drawer/drawerWrapper";

export const metadata: Metadata = {
    title: {
        default: labels.PAGE_TITLES.HOME,
        template: `%s - ${labels.PAGE_TITLES.HOME}`,
        absolute: labels.PAGE_TITLES.HOME,
    },
    description: labels.PAGE_DESCRIPTIONS.HOME,
    applicationName: labels.GENERAL.APPLICATION_NAME,
    creator: labels.GENERAL.CREATOR,
    authors: [
        {
            name: labels.GENERAL.AUTHOR,
        },
    ],
    icons: "/logo.jpg",
};

export const viewPort: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

const RootLayout: NextLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    poppins.variable,
                    "relative w-screen h-screen overflow-hidden antialiased font-poppins"
                )}
            >
                <Providers>
                    <div className="flex relative flex-col items-center justify-start w-screen h-screen bg-[#F5F8FF]">
                        <Header />

                        <DrawerWrapper>{children}</DrawerWrapper>
                    </div>
                </Providers>

                <NextTopLoader
                    showSpinner={false}
                    color={config.primaryColor}
                />
            </body>
        </html>
    );
};

export default RootLayout;
