import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

// Hook for measuring using ResizeObserver Web API
// https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver

/**
 * ref for setting up reference
 * bounds for contentRect which is DOMRectReadOnly
 * @param {Array}
 */
export default function useMeasure() {
    const ref = useRef();
    const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
    const [ro] = useState(
        () => new ResizeObserver(([entry]) => set(entry.contentRect)),
    );
    useEffect(() => (ro.observe(ref.current), ro.disconnect), []);
    return [{ ref }, bounds];
}
