import type { TUserProfile } from "@types";

import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export const useUserList = () =>
{
    return useQuery({
        queryKey: ["user-data"],
        queryFn: async() => {
            const { data } =  await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users");
            return data as TUserProfile[];
        },
    });
};