import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className="fixed top-3 right-3">
            {currentTheme === 'dark' ? (
                <button onClick={() => setTheme('light')}>
                    {' '}
                    <SunIcon className="w-8 h-8 text-amber-500" />
                </button>
            ) : (
                <button onClick={() => setTheme('dark')}>
                    <MoonIcon className="w-8 h-8 text-gray-500" />
                </button>
            )}
        </div>
    );
}
