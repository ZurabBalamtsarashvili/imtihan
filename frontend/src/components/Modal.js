import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Modal({ children, title, isOpen, setIsOpen }) {
    const [isOnClose, setIsOnClose] = useState(isOpen);
    const onClose = () => {
        setIsOnClose(false);
        setIsOpen(false);
    };

    return (
        <>
            {isOnClose && isOpen && (
                <>
                    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 h-screen flex justify-center items-center">
                        <div className="relative w-full max-w-2xl h-auto ">
                            <div className="relative bg-white dark:bg-black border border-brand rounded-lg">
                                <div className="flex items-start justify-between p-4 border-b border-zinc-100 dark:border-zinc-900 rounded-t">
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                        {title}
                                    </h3>
                                    <button
                                        onClick={onClose}
                                        type="button"
                                        className="bg-transparent p-1.5 hover:dark:bg-zinc-800 rounded-full duration-200">
                                        <XMarkIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-400" />
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">{children}</div>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-blur-sm dark:bg-black/30 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40" />
                </>
            )}
        </>
    );
}
