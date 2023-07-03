'use client'

import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: string) => {
    // Retrieve the initial value from local storage (if available)
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    // Set up state to store the current value
    const [value, setValue] = useState(initial);

    // Update local storage whenever the value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;