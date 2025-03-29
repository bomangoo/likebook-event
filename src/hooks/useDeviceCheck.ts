import { useEffect, useState } from 'react';

const MOBILE_MAX_WIDTH = 767;
const TABLET_MAX_WIDTH = 1023;

export const DEVICE_TYPE = {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile',
} as const;

export type DeviceType = (typeof DEVICE_TYPE)[keyof typeof DEVICE_TYPE];

const computeDeviceType = (windowWidth: number) => {
    if (!windowWidth) return;

    if (windowWidth > TABLET_MAX_WIDTH) return DEVICE_TYPE.DESKTOP;
    if (windowWidth > MOBILE_MAX_WIDTH) return DEVICE_TYPE.TABLET;

    return DEVICE_TYPE.MOBILE;
};

export function useDeviceType() {
    const [deviceType, setDeviceType] = useState<DeviceType | undefined>(() => {
        if (typeof window !== 'undefined') computeDeviceType(window.innerWidth);

        return undefined;
    });

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(computeDeviceType(window.innerWidth));
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        deviceType,
        isDesktop: deviceType === DEVICE_TYPE.DESKTOP,
        isTablet: deviceType === DEVICE_TYPE.TABLET,
        isMobile: deviceType === DEVICE_TYPE.MOBILE,
    };
}
