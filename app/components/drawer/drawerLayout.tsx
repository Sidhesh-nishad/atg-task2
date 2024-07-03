"use client"

import { useGlobalStore } from "app/store";
import { useMdBreakpoint } from "@hooks/useMobile";

import { labels } from "@labels";
import Drawer from "@drawer/drawer";
import UserDetails from "@root/userDetails";
import MobileDrawer from "@drawer/mobileDrawer";

export default function DrawerLayout()
{
    const isMobile = useMdBreakpoint();
    const Component = isMobile ? MobileDrawer : Drawer;
    const drawerType = useGlobalStore(state => state.drawerType);

    if (!drawerType) return null;

    return (
        <>
            {drawerType === "USER_DETAILS" ?
                <Component className="mt-2 text-left">
                    <UserDetails />
                </Component>
            : null}
        </>
    );
};

export const DrawerCloseBtn = () =>
{
    const isMobile = useMdBreakpoint();
    const setDrawer = useGlobalStore(state => state.setDrawer);

    if (!isMobile) return null;

    return (
        <span
            onClick={() => setDrawer(null)}
            className="text-xs font-medium text-primary md:hidden hover:text-primary/85"
        >
            {labels.OTHERS.CLOSE_BTN}
        </span>
    );
};