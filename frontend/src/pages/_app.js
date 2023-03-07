import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { Progress } from '@/components/progress/Progress';
import { useProgressStore } from '@/hooks/useProgressStore';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || (page => page);
    const setIsAnimating = useProgressStore(state => state.setIsAnimating);
    const isAnimating = useProgressStore(state => state.isAnimating);
    const router = useRouter();
    useEffect(() => {
        const handleStart = () => {
            setIsAnimating(true);
        };
        const handleStop = () => {
            setIsAnimating(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);
    return getLayout(
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <ReduxProvider store={store}>
                    <Progress isAnimating={isAnimating} />
                    <Component {...pageProps} />
                </ReduxProvider>
            </ThemeProvider>
        </>,
    );
}

export default App;
