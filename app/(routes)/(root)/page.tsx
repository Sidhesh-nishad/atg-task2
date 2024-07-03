"use client"

import { labels } from "@labels";
import Cards from "@root/card";
import Records from "@root/record";

export default function Page()
{
    return (
        <div className="flex flex-col items-start justify-start w-full h-full px-4 py-5 lg:p-8 scrollbar">
            <div className="flex items-center justify-between w-full">
                <p className="text-sm font-semibold lg:text-lg">
                    {labels.HOME.USERS_LIST}
                </p>
            </div>

            <Cards />

            <p className="self-start mt-6 mb-4 text-sm font-semibold lg:mb-6 lg:mt-8 lg:text-base">
                {labels.HOME.ALL_USERS}
            </p>

            <div className="w-full py-4 bg-white rounded-lg shadow-base lg:py-0 lg:pb-5 border-1 border-neutral-100">
                <Records />
            </div>
        </div>
    );
};