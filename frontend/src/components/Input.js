import React from 'react';

const Input = React.forwardRef(
    ({ disabled = false, className, ...props }, ref) => (
        <input
            ref={ref}
            {...props}
            disabled={disabled}
            className={`${className} border border-brand focus:border-blue-100 dark:bg-gray-800 text-sm rounded-lg w-full p-2.5`}
        />
    ),
);

export default Input;
