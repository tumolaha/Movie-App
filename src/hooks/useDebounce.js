import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}
useDebounce.prototypes = {
    value: PropTypes.node,
    delay: PropTypes.number,
};
export default useDebounce;
