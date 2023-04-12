import React from 'react';

const InputSelect = React.forwardRef(
    (
        { disabled = false, className, defaultOption, children, ...props },
        ref,
    ) => (
        <select
            ref={ref}
            disabled={disabled}
            className={`${className} w-full text-sm transition placeholder:transition hover:border-zinc-900 dark:hover:border-zinc-300 hover:placeholder:text-zinc-900 dark:hover:placeholder:text-zinc-300 focus:ring-transparent focus:border-zinc-900 dark:focus:border-zinc-300 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 focus:placeholder:text-zinc-900 dark:focus:placeholder:text-zinc-300 rounded-lg p-2.5`}
            {...props}>
            <option>{defaultOption}</option>
            {children}
        </select>
    ),
);

export default InputSelect;
