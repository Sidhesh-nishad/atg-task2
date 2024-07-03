"use client"

import { Suspense, useEffect, useState } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";

interface ProvidersProps {
	children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps)
{
	const { toasts } = useToasterStore();

	const handleError = (res: any) => {
		if (res?.error?.err?.response?.status === 401) {
			console.debug("Error 401", res);
		};
	};

	const [ queryClient ] = useState(() => new QueryClient({
		queryCache: new QueryCache({ onSuccess: handleError }),
		mutationCache: new MutationCache({ onSuccess: handleError }),
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchInterval: false,
				refetchOnReconnect: true,
				refetchIntervalInBackground: false,
				staleTime: 1000 * 60 * 10, // 10 minutes
				refetchOnMount: false,
				retry: false,
			},
		},
	}));

	useEffect(() => {
		toasts
		  .filter((t) => t.visible) // Only consider visible toasts
		  .filter((_, i) => i >= 3) // Is toast index over limit?
		  .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
	  }, [toasts]);

	return (
		<Suspense>
			<NextUIProvider>
				<QueryClientProvider client={queryClient}>
					{children}
					<Toaster toastOptions={{ position: "bottom-center" }} />
					<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />

					{process.env.NODE_ENV === "production" && (
						<>
							<Analytics />
							<SpeedInsights />
						</>
					)}
				</QueryClientProvider>
			</NextUIProvider>
		</Suspense>
	);
};