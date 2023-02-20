import Head from 'next/head';

export default function GuestLayout({ children }) {
    return (
        <div>
            <Head>
                <title>İmtihan</title>
            </Head>

            <main className="py-16 grid justify-items-center bg-white dark:bg-black">
                {children}
            </main>
        </div>
    );
}
