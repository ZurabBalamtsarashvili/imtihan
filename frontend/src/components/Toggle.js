import React from 'react';

const Toggle = React.forwardRef(
    ({ disabled = false, className, ...props }, ref) => (
        <label className="cursor-pointer">
            <input
                ref={ref}
                {...props}
                disabled={disabled}
                className={`${className} sr-only peer`}/>
                <div className="w-6 h-6 dark:peer-focus:ring-brand bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-500 peer-checked:bg-brand rounded-lg peer peer-focus:ring" />
        </label>
    ),
);

export default Toggle;
