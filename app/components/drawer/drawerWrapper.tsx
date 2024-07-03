"use client"

import { useGlobalStore } from "app/store";

import { cn } from "@utlis";
import { useMobile } from "@hooks/useMobile";
import DrawerLayout from "@drawer/drawerLayout";

export default function DrawerWrapper({ children } : {
    children: React.ReactNode;
})
{
    const isMobile = useMobile();

    const { showDrawer, drawerType } = useGlobalStore(state => ({
        drawerType: state.drawerType,
        showDrawer: state.showDrawer,
    }));

	return (
        <div className={cn("relative w-full flex items-center h-[calc(100%-6.5rem)] lg:h-[calc(100%-3rem)] justify-between scrollbar overflow-hidden", {
            "flex-1": !!drawerType,
        })}>
            <div className={cn("relative w-full flex-1 h-full overflow-hidden", {
                "w-full": isMobile,
                "blur-[2px] sm:blur-0": !!drawerType && showDrawer,
                "md:w-[calc(100%-19.5rem)] md:flex-none": !!showDrawer && !isMobile,
            })}>

                {children}
            </div>

            <DrawerLayout />
        </div>
	);
};