import type { labels } from "@labels";
import type { Key, ReactNode, SVGProps } from "react";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export type AxiosCallbacks = {
	requestSuccess?: (config: InternalAxiosRequestConfig) => void;
	requestError?: (error: any) => void;
	responseSuccess?: (config: AxiosResponse) => void;
	responseError?: (error: void) => void;
};

export type TLabels = typeof labels;

export type NextLayout = ({ children: ReactNode }) => JSX.Element;

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type NextServerPage <T extends {} = {}> = {
	params: { [key: string]: string } & T;
	searchParams: { [key: string]: string | string[] | undefined };
	children?: ReactNode;
};

export type TGlobalStore = {
	showDrawer: boolean;
	drawerData: any;
	drawerType:
		"USER_DETAILS" |
		null;

	setDrawer: (type: TGlobalStore["drawerType"], data?: any) => void;
};

export type TUserProfile = {
	id: string;
	createdAt: string;
	avatar: string;
	Bio: string;
	jobTitle: string;
	profile: {
		username: string;
		firstName: string;
		lastName: string;
		email: string;
	};
};