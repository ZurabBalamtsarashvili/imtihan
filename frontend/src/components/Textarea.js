import React from 'react';

const Textarea = React.forwardRef(
    ({ disabled = false, className, ...props }, ref) => (
        <textarea
            ref={ref}
            {...props}
            disabled={disabled}
            className={`${className} border border-zinc-500 focus:ring-brand dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 text-sm rounded-lg p-2.5`}
        />
    ),
);

export default Textarea;
