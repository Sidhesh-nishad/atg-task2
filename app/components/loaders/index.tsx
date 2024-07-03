import Loader from "react-spinners/ClipLoader";

export default function ClipLoader({ size = 40, className = "" })
{
    return (
        <div className="flex items-center justify-center flex-1 w-full h-full">
            <Loader
                color="#024EF3"
                size={size}
                loading
                className={className}
            />
        </div>
    );
};