"use client"

import { useOutsideClickRef } from "rooks";
import { useGlobalStore } from "app/store";

import { cn } from "@utlis";

export default function MobileDrawer(props: {
    children: React.ReactNode;
    className?: string;
})
{
    const { showDrawer, setDrawer } = useGlobalStore(state => ({
        setDrawer: state.setDrawer,
        showDrawer: state.showDrawer,
    }));

    const [ ref ] = useOutsideClickRef(() => setDrawer(null));

    return (
        <div
            ref={ref}
            className={cn("flex bottom-0 pb-4 pt-2 left-0 z-50 rounded-t-3xl transition-all max-h-[80%] h-fit absolute flex-col items-start justify-start w-full bg-white shadow-md scrollbar border-1 border-neutral-100", props.className, {
                "overflow-hidden bg-neutral-100 border-neutral-100 pl-16": !showDrawer,
            })}
        >
            {props.children}
        </div>
    );
};