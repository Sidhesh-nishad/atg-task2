import { useEffect, useState } from "react";

import { UAParser } from "ua-parser-js";

export const useMobile = (width = 1024) =>
{
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= width) {
            setIsMobile(true);
            return;
        };

        const parser = new UAParser();
        const userAgent = window.navigator.userAgent;
        const result = parser.setUA(userAgent).getResult();
        const isMobileDevice = /mobile/i.test(result.device.type!) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        setIsMobile(isMobileDevice);
      }, []);

    return isMobile;
};

export const useMdBreakpoint = () => useMobile(768);