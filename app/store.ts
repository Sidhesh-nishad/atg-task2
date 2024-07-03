import type { TGlobalStore } from "@types";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useGlobalStore = create <TGlobalStore> () (immer((set) => ({
    showDrawer: false,
    drawerType: null,
    drawerData: null,

    setDrawer: (type, data) => set(state => {
        if (type === null) {
            state.drawerType = null;
            state.showDrawer = false;
            state.drawerData = null;
            return;
        };

        state.drawerType = type;
        state.showDrawer = true;
        state.drawerData = data ?? null;
    }),
})));