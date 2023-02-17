import React from 'react';

const InputSelect = React.forwardRef(
    (
        { disabled = false, className, defaultOption, children, ...props },
        ref,
    ) => (
        <select
            ref={ref}
            disabled={disabled}
            className={`${className} w-full p-2.5 text-sm rounded-lg border border-zinc-800 focus:ring-brand dark:bg-zinc-900 dark:text-zinc-500`}
            {...props}>
            <option>{defaultOption}</option>
            {children}
        </select>
    ),
);

export default InputSelect;
