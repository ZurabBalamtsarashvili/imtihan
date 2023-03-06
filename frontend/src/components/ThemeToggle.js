import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import {ChevronRightIcon} from "@heroicons/react/24/outline";

export default function ThemeToggle() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <>
            {currentTheme === 'dark' ? (
                <div
                    onClick={() => setTheme('light')}
                    className="border-b dark:border-gray-700 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                    <SunIcon className="text-amber-500 w-6 h-6 mr-2 float-left"/>
                    <span className="text-gray-500 dark:text-gray-300">Light Theme</span>
                    <ChevronRightIcon className="text-brand w-6 h-6 float-right"/>
                </div>
            ) : (
                <div
                    onClick={() => setTheme('dark')}
                    className="border-b dark:border-gray-700 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 w-full h-full p-5">
                    <MoonIcon className="text-gray-500 w-6 h-6 mr-2 float-left"/>
                    <span className="text-gray-500 dark:text-gray-300">Dark Theme</span>
                    <ChevronRightIcon className="text-brand w-6 h-6 float-right"/>
                </div>
            )}
        </>
    );
}
