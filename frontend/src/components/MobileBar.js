import {
    BellAlertIcon,
    BriefcaseIcon,
    HomeIcon,
    SquaresPlusIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import {
    HomeIcon as SolidHomeIcon,
    BellAlertIcon as SolidBellAlertIcon,
    BriefcaseIcon as SolidBriefcaseIcon,
    SquaresPlusIcon as SolidSquaresPlusIcon,
    UserIcon as SolidUserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MobileBar({ className }) {
    const router = useRouter();

    return (
        <nav className={`${className} bg-white dark:bg-black sm:block md:blcok lg:hidden xl:hidden 2xl:hidden block h-14`}>
            <ul className="flex justify-between fixed bottom-0 border-t bg-white dark:bg-black border-zinc-100 shadow w-full dark:border-zinc-800">
                <Link href="/dashboard">
                    <li className="w-full zinctext-center p-3">
                        {router.asPath == '/dashboard' ? (
                            <SolidHomeIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        ) : (
                            <HomeIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        )}
                    </li>
                </Link>
                <Link href="/admin/company">
                    <li className="w-full zinctext-center p-3">
                        {router.asPath == '/admin/company' ? (
                            <SolidBriefcaseIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        ) : (
                            <BriefcaseIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        )}
                    </li>
                </Link>
                <Link href="">
                    <li className="w-full zinctext-center p-3">
                        {router.asPath == '/' ? (
                            <SolidSquaresPlusIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        ) : (
                            <SquaresPlusIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        )}
                    </li>
                </Link>
                <Link href="">
                    <li className="w-full zinctext-center p-3">
                        {router.asPath == '/' ? (
                            <SolidBellAlertIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        ) : (
                            <BellAlertIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        )}
                    </li>
                </Link>
                <Link href="">
                    <li className="w-full zinctext-center p-3">
                        {router.asPath == '/' ? (
                            <SolidUserIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        ) : (
                            <UserIcon className="inline-block w-7 h-7 dark:text-white text-zinc-900" />
                        )}
                    </li>
                </Link>
            </ul>
        </nav>
    );
}
