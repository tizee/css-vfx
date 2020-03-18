import { useEffect, useState } from 'react';

/*
Resizing the window is not a common situation.
For this reason, maybe we do not need to throttle it or debounce it.
*/

/**
 * A hook for matching different media queries using values
 * @param {Array} queries
 * @param {Array} values
 * @param {String} defaultValue
 */

export default function useMedia(queries, values, defaultValue) {
    const match = () =>
        values[queries.findIndex((q) => matchMedia(q))] || defaultValue;
    const [value, set] = useState(match);
    useEffect(() => {
        const handler = () => set(match);
        window.addEventListener('resize', handler);
        return () => {
            window.removeEventListener(handler);
        };
    }, []);
    return value;
}
