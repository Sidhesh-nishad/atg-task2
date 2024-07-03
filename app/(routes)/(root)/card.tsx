import { useUserList } from "@root/apis";

import { labels } from "@labels";
import ClipLoader from "@loaders/index";

const CardItem = (props: {
    title: string;
    icon: string;
    value: number;
    isLoading?: boolean;
}) => {
    return (
        <div className="flex-1 rounded-md flex h-full flex-col justify-center items-center gap-2 lg:rounded-lg border-1 bg-[#F8FBFF] border-[#EDEDED] p-3 lg:p-4">
            <div className="flex items-center justify-between w-full gap-2">
                <p className="text-xs font-medium lg:text-sm text-neutral-500">
                    {props.title}
                </p>

                <img
                    src={props.icon}
                    alt={props.title}
                />
            </div>

            {props.isLoading ?
                <ClipLoader className="my-3 lg:my-4" size={20} />
            :
                <p className="self-start text-sm font-semibold lg:text-base">
                    {props.value}
                </p>
            }
        </div>
    );
};

export default function Cards()
{
    const { data:res, isFetching } = useUserList();

    return (
        <div className="flex flex-col items-center justify-between w-full gap-4 mt-4 lg:flex-row h-fit">
            <div className="grid items-start justify-start w-full grid-cols-2 gap-5 mt-4 lg:grid-cols-4 2xl:grid-cols-5 lg:gap-10 lg:w-auto lg:flex-1 h-fit">
                <CardItem
                    title={labels.HOME.TOTAL}
                    icon="/active-app.svg"
                    value={res?.length || 0}
                    isLoading={isFetching}
                />
            </div>
        </div>
    );
};