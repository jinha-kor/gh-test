import React, { useEffect, useRef } from 'react';

export const Observer = (
    setState: React.Dispatch<React.SetStateAction<number>>,
    stateNumber: number,
): React.MutableRefObject<HTMLElement | null>[] => {
    const isRef = useRef<HTMLElement | null>(null);
    const option = {};
    // const option = { threshold: 0, rootMargin: `-${document?.body?.scrollHeight / 2 - 1}px 0px` };

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            if (entry[0].isIntersecting) {
                setState(stateNumber);
            }
        }, option);

        if (isRef.current) {
            observer.observe(isRef.current);
        }

        return () => observer.disconnect();
    }, [setState, stateNumber]);

    return [isRef];
};