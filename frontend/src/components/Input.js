import React from 'react';

const Input = React.forwardRef(
    ({ disabled = false, className, ...props }, ref) => (
        <input
            ref={ref}
            {...props}
            disabled={disabled}
            className={`${className} border border-zinc-300 focus:ring-brand dark:bg-zinc-900 text-sm rounded-lg p-2.5`}
        />
    ),
);

export default Input;
