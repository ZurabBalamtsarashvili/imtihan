import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import {ArrowRightIcon, BookOpenIcon, GlobeAltIcon, HeartIcon} from "@heroicons/react/24/outline";
import ApplicationLogo from "@/components/ApplicationLogo";

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>İmtihan</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-black sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ? (
                        <Link href="/admin/dashboard">
                            <a className="ml-4 text-sm text-gray-500 dark:text-gray-300 underline">
                                Dashboard
                            </a>
                        </Link>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <a className="text-sm text-gray-500 dark:text-gray-300 underline">
                                    Sign in
                                </a>
                            </Link>

                            <Link href="/auth/register">
                                <a className="ml-4 text-sm text-gray-500 dark:text-gray-300 underline">
                                    Register
                                </a>
                            </Link>
                        </>
                    )}
                </div>

            <div className="max-w-7xl mx-auto p-6 lg:p-8">
                <div className="flex justify-center">
                    <ApplicationLogo width={144} height={32} />
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <a href="https://codenteq.github.io/imtihan-docs/"
                           className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-blue-500">
                            <div>
                                <div
                                    className="h-16 w-16 bg-blue-50 dark:bg-blue-800/20 flex items-center justify-center rounded-full">
                                    <BookOpenIcon className="text-gray-500 dark:text-gray-300 w-8 h-8"/>
                                </div>

                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Documentation</h2>

                                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    İmtihan has wonderful documentation covering every aspect of the project. One of both
                                    If you are new to İmtihan or have previous experience, we recommend reading it.
                                    Documentation from start to end.
                                </p>
                            </div>

                            <ArrowRightIcon className="self-center shrink-0 stroke-blue-500 w-6 h-6 mx-6"/>
                        </a>

                        <a href="https://codenteq.com"
                           className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-blue-500">
                            <div>
                                <div
                                    className="h-16 w-16 bg-blue-50 dark:bg-blue-800/20 flex items-center justify-center rounded-full">
                                    <GlobeAltIcon className="text-gray-500 dark:text-gray-300 w-8 h-8"/>
                                </div>

                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Codenteq</h2>

                                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Codenteq, Free and Open source systems built for anyone to build and scale your business.
                                    We are a team of developers who are passionate about building great software.
                                </p>
                            </div>

                            <ArrowRightIcon className="self-center shrink-0 stroke-blue-500 w-6 h-6 mx-6"/>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center mt-16 px-0 sm:items-center sm:justify-between">
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/sponsors/codenteq"
                               className="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500">
                                <HeartIcon className="w-6 h-6 mr-2"/>
                                Sponsor
                            </a>
                        </div>
                    </div>

                    <div className="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
                        Imtihan v0.5.0
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
