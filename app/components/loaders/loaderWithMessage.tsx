import { cn } from "@utlis";
import { labels } from "@labels";
import Loader from "react-spinners/ClipLoader";

export default function ClipLoaderMsg(props: {
    size?: number;
    label?: string;
    className?: string;
    textClass?: string;
})
{
    return (
        <div className={cn("flex flex-col items-center justify-center flex-1 w-full h-full gap-4", props.className)}>
            <Loader
                color="#024EF3"
                size={props.size ?? 40}
            />

            <p className={cn("text-xs font-medium md:text-sm text-neutral-500", props?.textClass)}>
                {props.label ?? labels.OTHERS.LOADING}
            </p>
        </div>
    );
};