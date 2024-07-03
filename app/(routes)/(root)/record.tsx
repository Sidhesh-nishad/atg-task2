"use client"

import { useUserList } from "@root/apis";
import { useGlobalStore } from "app/store";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@utlis";
import { produce } from "immer";
import { labels } from "@labels";
import { FiSearch } from "react-icons/fi";
import { recordsHeader } from "@root/config";
import { IoCloseCircle } from "react-icons/io5";
import ClipLoaderMsg from "@loaders/loaderWithMessage";

export default function Records()
{
    const { data, isFetching } = useUserList();
    const [ searchValue, setSearchValue ] = useState<string>("");
    const [ showSearchIdx, setShowSearchIdx ] = useState<Record<string, boolean>>({});
    const [ filterData, setFilterData ] = useState<NonNullable<ReturnType<typeof useUserList>["data"]>>([]);

    const handleSearchIdx = useCallback((key: number, value: boolean) => {
        setShowSearchIdx(produce(draft => {
            draft[key] = value;
        }));
    }, []);

    const { drawerData, setDrawer } = useGlobalStore(state => ({
        setDrawer: state.setDrawer,
        drawerData: state.drawerData,
    }));

    useEffect(() => {
        if (!data?.length || !searchValue?.length) {
            setFilterData(data!);
            return;
        };

        setFilterData(data.filter(data => data?.profile?.username.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())));
    }, [data, searchValue]);

    return (
        <div className="flex flex-col items-start justify-center w-[calc(100vw-2rem)] lg:w-full scrollbar-horizontal">
            <div className="flex px-5 items-center justify-between w-auto min-w-full gap-1 md:gap-5 py-1.5 md:py-3 whitespace-nowrap border-b-1 border-neutral-200/60">
                {recordsHeader.map((header, headerIdx) => (
                    (!!showSearchIdx[headerIdx]) ?
                        <div className={cn("relative flex items-center justify-between pr-4 h-8", header.className)}>
                            <input
                                type="text"
                                autoFocus
                                value={searchValue}
                                placeholder={labels.HOME.SEARCH_PLACEHOLDER}
                                onChange={e => setSearchValue(e.target.value)}
                                className="flex-1 text-black min-w-0 bg-transparent outline-none text-[10px] placeholder:text-neutral-400 rounded-2sm h-fit py-1.5 pl-3 border-1 border-neutral-200 focus:border-primary"
                            />

                            <IoCloseCircle
                                className="absolute right-0 w-3 h-3 transition-all -translate-y-1/2 cursor-pointer top-1/2 text-primary hover:scale-105"
                                onClick={() => {
                                    handleSearchIdx(headerIdx, false);
                                    setSearchValue("");
                                }}
                            />
                        </div>
                    :
                        <p
                            key={headerIdx}
                            onClick={!!header.searchable ? () => handleSearchIdx(headerIdx, true) : undefined}
                            className={cn("font-medium text-center flex justify-center items-center h-8 gap-1.5 text-neutral-500 text-[10px] md:text-xs", header.className, {
                                "cursor-pointer hover:scale-105 transition-all": !!header.searchable,
                            })}
                        >
                            {header.label}

                            {!!header.searchable &&
                                <FiSearch className="text-primary" />
                            }
                        </p>
                ))}
            </div>


            {!filterData?.length ?
                <div className="flex flex-col items-center justify-center w-full h-64 p-5 text-center">
                    {isFetching ?
                            <ClipLoaderMsg
                                size={50}
                                className="h-64 p-5 text-center"
                            />
                    :
                        <>
                            <img
                                src="/no-search.svg"
                                alt="No search"
                                className="w-28"
                            />

                            <p className="text-sm text-neutral-500 font-medium mt-5 mb-1 max-w-[25rem]">
                                {labels.HOME.NO_SEARCH}
                            </p>

                            <p className="font-medium text-[10px] text-neutral-500 max-w-[25rem]">
                                {labels.HOME.NO_RECORD_DESC}
                            </p>
                        </>
                    }
                </div>
            :
                filterData?.map?.((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => setDrawer("USER_DETAILS", item)}
                        className={cn("flex items-center px-5 justify-between w-auto min-w-full gap-1 md:gap-5 py-2.5 md:py-3 cursor-pointer whitespace-nowrap", {
                            "bg-blue-100": drawerData?.id === item.id,
                            "hover:bg-blue-100/50": drawerData?.id !== item.id,
                        })}
                    >
                        {recordsHeader.map((header, headerIdx) => {
                            return (
                                <div
                                    key={headerIdx}
                                    className={cn("font-medium relative gap-1.5 w-full text-black break-words flex justify-center items-center whitespace-break-spaces text-center text-[10px] md:text-xs", header.className)}
                                >
                                    {headerIdx === 0 && !!item?.avatar &&
                                        <img
                                            src={item.avatar}
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.src="/user.jpg";
                                            }}
                                            alt="avatar"
                                            width={32}
                                            height={32}
                                            className="absolute left-0 w-6 h-6 -translate-y-1/2 rounded-full lg:w-8 lg:h-8 top-1/2"
                                        />
                                    }

                                    {header.format(item)}
                                </div>
                            );
                        })}
                    </div>
            ))}
        </div>
    );
}