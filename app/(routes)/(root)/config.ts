import dayjs from "dayjs";
import { labels } from "@labels";

export const recordsHeader = [
    {
        label: labels.HOME.USER_NAME,
        className: "w-[16rem]",
        searchable: true,
        format: (data: any) => data?.profile?.username,
    },
    {
        label: labels.HOME.FIRST_NAME,
        className: "w-[10rem]",
        format: (data: any) => data?.profile?.firstName,
    },
    {
        label: labels.HOME.LAST_NAME,
        className: "w-[10rem]",
        format: (data: any) => data?.profile?.lastName,
    },
    {
        label: labels.HOME.EMAIL_ID,
        className: "w-[13rem]",
        format: (data: any) => data?.profile?.email,
    },
    {
        label: labels.HOME.CREATED_ON,
        format: (data: any) => dayjs(data?.createdAt).format("DD MMM YYYY hh:mm"),
        className: "w-[8rem]",
    },
];