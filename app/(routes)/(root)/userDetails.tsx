import type { TUserProfile } from "@types";

import { useGlobalStore } from "app/store";

import dayjs from "dayjs";
import { labels } from "@labels";
import { FaDownload } from "react-icons/fa6";
import { DrawerCloseBtn } from "@drawer/drawerLayout";

const downloadAppCredentials = (data: TUserProfile) => {
    const content = `${labels.HOME.FIRST_NAME}: ${data.profile.firstName}\n${labels.HOME.LAST_NAME}: ${data.profile.lastName}\n${labels.HOME.EMAIL_ID}: ${data.profile.email}\n${labels.HOME.CREATED_ON}: ${dayjs(data.createdAt).format("DD MMM YYYY hh:mm")}\n${labels.HOME.JOB_TITLE}: ${data.jobTitle}\n${labels.HOME.BIO}: ${data.Bio}`
    const link = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = `${data.profile.username}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
};

const DataItem = (props: {
    label: string;
    value: string;
}) => {
    return (
        <div className="flex break-all flex-col items-start gap-[1px] justify-center font-medium text-black text-[10px]">
            <p className="text-neutral-500">
                {props.label}
            </p>

            <p className="flex gap-1.5 justify-center items-center">
                {props.value}
            </p>
        </div>
    );
};

export default function AppDetails()
{
    const drawerData = useGlobalStore(state => state.drawerData) as TUserProfile;

    if (!drawerData) {
        return null;
    };

    return (
        <div className="flex flex-col items-center justify-center w-full px-3 pt-4 pb-3 text-left lg:pb-0">
            <p className="flex items-center justify-between w-full text-sm font-semibold lg:mt-2 lg:text-base">
                {labels.HOME.USER_DETAILS}
                <DrawerCloseBtn />
            </p>

            <div className="flex items-center justify-start w-full gap-2.5 mt-3">
                <p className="flex-1 text-xs font-medium lg:text-sm">
                    {drawerData?.profile?.username}
                </p>
            </div>

            <div className="w-full grid grid-cols-2 justify-start items-start gap-3.5 mt-4">
                {[
                    { label: labels.HOME.FIRST_NAME, value: drawerData?.profile?.firstName },
                    { label: labels.HOME.LAST_NAME, value: drawerData?.profile?.lastName },
                    { label: labels.HOME.EMAIL_ID, value: drawerData?.profile?.email },
                    { label: labels.HOME.CREATED_ON, value: dayjs(drawerData?.createdAt).format("DD MMM YYYY hh:mm") },
                    { label: labels.HOME.JOB_TITLE, value: drawerData.jobTitle },
                    { label: labels.HOME.BIO, value: drawerData.Bio },
                ].map((item, idx) => (
                    <DataItem
                        key={idx}
                        label={item.label}
                        value={item.value!}
                    />
                ))}
            </div>

            <button
                onClick={() => downloadAppCredentials(drawerData)}
                className="flex flex-1 mt-10  justify-center text-[10px] lg:text-xs items-center gap-2 border-none outline-none py-2 px-4.5 hover:bg-primary/25 bg-primary/15 text-primary rounded-full"
            >
                <FaDownload />
                {labels.HOME.DOWNLOAD_DETAILS}
            </button>
        </div>
    );
};