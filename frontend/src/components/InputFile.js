import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

export default function InputFile({ className, children, ...props }) {
    return (
        <div
            className={`${className} flex items-center justify-center w-full`}
            {...props}>
            <label className="flex flex-col items-center justify-center w-full h-32 border border-brand border-dashed rounded-lg cursor-pointer bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <CloudArrowUpIcon className="h-10 w-10 text-blue" />
                    <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                        Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        svg, png, jpg or webp (MAX. 0x0px)
                    </p>
                </div>
                {children}
            </label>
        </div>
    );
}
