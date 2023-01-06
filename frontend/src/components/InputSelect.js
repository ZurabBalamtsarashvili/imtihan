import React from 'react';

const InputSelect = React.forwardRef(
    (
        { disabled = false, className, defaultOption, children, ...props },
        ref,
    ) => (
        <select
            ref={ref}
            disabled={disabled}
            className={`${className} w-full p-2.5 text-sm rounded-lg border border-brand focus:border-blue-100 dark:bg-gray-800 dark:text-white`}
            {...props}>
            <option>{defaultOption}</option>
            {children}
        </select>
    ),
);

export default InputSelect;
