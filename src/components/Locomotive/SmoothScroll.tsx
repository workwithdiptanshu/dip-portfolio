"use client";
import React, {
    createContext,
    useState,
    ReactNode,
    useLayoutEffect,
} from "react";

interface SmoothScrollContextProps {
    scroll: any;
}

export const SmoothScrollContext = createContext<SmoothScrollContextProps>({
    scroll: null,
});

interface SmoothScrollProviderProps {
    children: ReactNode;
    options: any;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
    children,
    options,
}) => {
    const [scroll, setScroll] = useState<any | null>(null);

    useLayoutEffect(() => {
        if (!scroll) {
            (async () => {
                try {
                    const LocomotiveScroll = (await import("locomotive-scroll"))
                        .default;

                    setScroll(
                        new LocomotiveScroll({
                            el:
                                document.querySelector(
                                    "[data-scroll-container]"
                                ) ?? undefined,
                            ...options,
                        })
                    );
                } catch (error) {
                    throw new Error(`[SmoothScrollProvider]: ${error}`);
                }
            })();
        }

        return () => {
            scroll && scroll.destroy();
        };
    }, [scroll, options]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <SmoothScrollContext.Provider value={{ scroll }}>
            {children}
        </SmoothScrollContext.Provider>
    );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
