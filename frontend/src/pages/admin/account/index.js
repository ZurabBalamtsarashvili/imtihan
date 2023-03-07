import Head from 'next/head';
import {
    ArrowLeftOnRectangleIcon,
    CheckCircleIcon,
    ChevronRightIcon,
    EnvelopeOpenIcon,
    FingerPrintIcon,
    PencilSquareIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import AppLayout from '@/layouts/AppLayout';
import { useAuth } from '@/hooks/auth';
import Footer from '@/layouts/Footer';
import ThemeToggle from '@/components/ThemeToggle';

Index.getLayout = page => <AppLayout name="Account">{page}</AppLayout>;

export default function Index() {
    const { user, logout } = useAuth();

    return (
        <>
            <Head>
                <title>Account - İmtihan</title>
                <meta name="description" content="Generated by codenteq" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="pt-16">
                <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md">
                    <div className="border-b border-zinc-100 dark:border-zinc-900 p-5">
                        <div className="bg-white dark:bg-zinc-900 shadow-md rounded-lg float-right w-10 h-10 p-2">
                            <PencilSquareIcon className="text-brand w-6 h-6" />
                        </div>
                        <UserIcon className="text-brand w-12 h-12 mr-2 float-left" />
                        <span className="text-xl font-medium text-zinc-900 dark:text-zinc-300">
                            {user?.full_name}
                        </span>
                    </div>

                    <div className="border-b border-zinc-100 dark:border-zinc-900 p-5">
                        <EnvelopeOpenIcon className="text-brand w-6 h-6 mr-2 float-left" />
                        <span className="text-zinc-900 dark:text-zinc-300">
                            {user?.email}
                        </span>

                        {user?.email_verified_at ? (
                            <span className="text-green-600 dark:text-green-500 float-right">
                                <CheckCircleIcon className="w-6 h-6" />
                            </span>
                        ) : (
                            <span className="text-red-600 dark:text-red-500 float-right">
                                <CheckCircleIcon className="w-6 h-6" />
                            </span>
                        )}
                    </div>

                    <div className="p-5">
                        <FingerPrintIcon className="text-brand w-6 h-6 mr-2 float-left" />
                        <span className="text-zinc-900 dark:text-zinc-300">
                            {user?.passport_id}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md mt-20">
                    <ThemeToggle />

                    <div
                        onClick={logout}
                        className="border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-100 focus:bg-zinc-100 dark:hover:bg-zinc-900 dark:focus:bg-zinc-900 w-full h-full p-5">
                        <ArrowLeftOnRectangleIcon className="text-brand w-6 h-6 mr-2 float-left" />
                        <span className="text-zinc-500 dark:text-zinc-300">
                            Çıkış Yap
                        </span>
                        <ChevronRightIcon className="text-brand w-6 h-6 float-right" />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 shadow-md mt-10">
                    <div className="border-b border-zinc-100 dark:border-zinc-900 w-full h-full p-5">
                        <span className="text-zinc-500 dark:text-zinc-300">
                            Versiyon
                        </span>
                        <span className="float-right text-zinc-500 dark:text-zinc-500">
                            0.5.0
                        </span>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}
