"use client"

import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";

export default function Header()
{
    return (
        <div className="flex items-center justify-between w-full h-12 px-4 md:pl-12 md:pr-6 bg-primary">
            <Link href="/" className="h-full">
                <img
                    src="/logo.jpg"
                    alt="logo"
                    className="object-contain h-full p-2"
                />
            </Link>

            <div className="relative flex items-center justify-center gap-1.5 lg:gap-1 transition-all cursor-pointer hover:scale-110">
                <MdOutlinePersonOutline className="bg-blue-900 rounded-SM p-0.5 w-6 h-6" />
                <FaChevronUp className="w-3 h-3" />
            </div>
        </div>
    );
};