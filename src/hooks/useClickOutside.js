import {useEffect} from "react";

export const useClickOutside = (handler, refs) => {
    useEffect(() => {
        const refsArray = Array.isArray(refs) ? refs : [refs];
        if (!handler || !refs || !refsArray?.length) {
            return;
        }

        const listener = (ev) => {
            for (const ref of refsArray) {
                if (ref?.current?.contains?.(ev.target)) {
                    return;
                }
            }

            handler(ev);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [handler, refs]);
};