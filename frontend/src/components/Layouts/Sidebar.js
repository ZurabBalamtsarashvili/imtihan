import Avatar from '@/components/Avatar';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import config from '@/config/menu';
import Footer from '@/components/Layouts/Footer';
import { useRouter } from 'next/router';

export default function Sidebar(className) {
    const { logout } = useAuth();

    const router = useRouter();

    return (
        <aside
            className={`${className} bg-white text-zinc-900 dark:text-zinc-300 border-r border-zinc-200 drop-shadow-sm sm:hidden md:hidden lg:block xl:block 2xl:block hidden overflow-auto w-72 dark:border-zinc-800 dark:bg-black z-auto`}>
            <Avatar />
            <ul className="text-lg h-screen">
                {config.desktop.admin.map((item, index) => {
                    return (
                        <Link href={item.path} key={index}>
                            <li
                                className={`${
                                    router.asPath == item.path
                                        ? 'text-brand'
                                        : ''
                                } flex items-center p-5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg`}>
                                {item.icon}
                                <label className="mx-2">{item.name}</label>
                            </li>
                        </Link>
                    );
                })}
                <li
                    onClick={logout}
                    className="flex items-center p-5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg">
                    <ArrowLeftOnRectangleIcon className="inline-block w-6 h-6" />{' '}
                    <label className="mx-2">Log out</label>
                </li>
            </ul>

            <Footer />
        </aside>
    );
}
