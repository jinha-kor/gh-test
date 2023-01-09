import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as mainActions from '../store/modules/mainStore';

export const Observer = (
    setState:
        | ((data: number) => {
              payload: number;
              type: 'mainStore/SET_NAVI_NUMBER';
          })
        | 0,
    stateNumber: number,
): React.MutableRefObject<HTMLElement | null>[] => {
    const dispatch = useDispatch();
    const isRef = useRef<HTMLElement | null>(null);
    const option = {};
    // const option = { threshold: 0, rootMargin: `-${document?.body?.scrollHeight / 2 - 1}px 0px` };

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            if (entry[0].isIntersecting) {
                dispatch(mainActions?.setNaviNumber(stateNumber));
            }
        }, option);

        if (isRef.current) {
            observer.observe(isRef.current);
        }

        return () => observer.disconnect();
    }, [setState, stateNumber]);

    return [isRef];
};
