"use client"

import { useRef } from "react";
import { useGlobalStore } from "app/store";

import { cn } from "@utlis";
import Image from "next/image";

export default function Drawer(props: {
    children: React.ReactNode;
    className?: string;
})
{
    const ref = useRef<HTMLDivElement>(null);

    const { drawerType, showDrawer } = useGlobalStore(state => ({
        drawerType: state.drawerType,
        showDrawer: state.showDrawer,
    }));

    if (!drawerType) return null;

    return (
        <div className={cn("h-full pl-4 w-[20.6rem] absolute z-50 lg:relative top-0 right-0 transition-all", {
            "hidden lg:block w-9 whitespace-pre-wrap": !showDrawer
        })}>
            <div
                ref={ref}
                className={cn("flex flex-col items-start justify-start w-full h-full pb-6 bg-white shadow-md scrollbar rounded-tl-md", props.className, {
                    "overflow-hidden bg-neutral-100 border-neutral-100 pl-16": !showDrawer,
                })}
            >
                {props.children}
            </div>

            <div
                onClick={() => useGlobalStore.setState({ showDrawer: !showDrawer })}
                className="absolute top-0 left-1.5 z-50 p-1.5 transition-all bg-white rounded-lg shadow-sm cursor-pointer w-7 h-7 hover:border-neutral-600 border-1 border-neutral-300 hover:scale-110"
            >
                <Image
                    src={`/${showDrawer ? "shrink-drawer" : "expand-drawer"}.svg`}
                    alt="drawer-toggle"
                    width={28}
                    height={28}
                    className="transition-all"
                />
            </div>
        </div>
    );
};