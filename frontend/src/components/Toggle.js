import React from 'react';

const Toggle = React.forwardRef(
    ({ disabled = false, className, ...props }, ref) => (
        <label className="relative inline-flex items-center mr-5 cursor-pointer">
            <input
                ref={ref}
                {...props}
                disabled={disabled}
                className={`${className} sr-only peer`}/>
                <div className="w-11 h-6 dark:peer-focus:ring-brand bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-500 peer-checked:bg-brand rounded-full peer peer-focus:ring peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
        </label>
    ),
);

export default Toggle;
