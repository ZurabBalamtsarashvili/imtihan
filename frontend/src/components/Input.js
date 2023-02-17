import React from 'react';

const Input = React.forwardRef(
    ({ disabled = false, field, className, ...props }, ref) => (
        <input
            ref={ref}
            {...props}
            disabled={disabled}
            {...field}
            className={`${className} border border-brand focus:border-blue-100 dark:bg-gray-800 text-sm rounded-lg p-2.5`}
        />
    ),
);

export default Input;
