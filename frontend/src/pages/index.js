import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import ApplicationLogo from '@/components/ApplicationLogo';
import { BookOpenIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' });

    return (
        <>
            <Head>
                <title>İmtihan</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ? (
                        <Link href="/admin/dashboard">
                            <a className="ml-4 text-sm text-zinc-700 underline">
                                Dashboard
                            </a>
                        </Link>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <a className="text-sm text-zinc-700 underline">
                                    Sign in
                                </a>
                            </Link>

                            <Link href="/auth/register">
                                <a className="ml-4 text-sm text-zinc-700 underline">
                                    Register
                                </a>
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <ApplicationLogo width={144} height={32} />
                    </div>

                    <div className="mt-8 bg-white dark:bg-zinc-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <BookOpenIcon className="w-8 h-8" />

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://codenteq.github.io/imtihan-docs/"
                                            className="underline text-zinc-900 dark:text-white">
                                            Dev Documentation
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center">
                                    <GlobeAltIcon className="w-8 h-8" />

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <a
                                            href="https://codenteq.com"
                                            className="underline text-zinc-900 dark:text-white">
                                            Official Web Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
