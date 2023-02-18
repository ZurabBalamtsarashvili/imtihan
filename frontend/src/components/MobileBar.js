import {
    BellAlertIcon,
    BriefcaseIcon,
    HomeIcon,
    SquaresPlusIcon,
    UserIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function MobileBar({ className }) {
    return (
        <nav
            className={`${className} sm:block md:blcok lg:hidden xl:hidden 2xl:hidden block h-14`}>
            <ul className="flex justify-between fixed bottom-0 bg-white dark:bg-black border-t border-zinc-400 shadow w-full dark:border-zinc-800">
                <Link href="/dashboard">
                    <li className="w-full hover:text-brand text-center p-3">
                        <HomeIcon className="inline-block w-7 h-7" />
                    </li>
                </Link>
                <Link href="/admin/company">
                    <li className="w-full hover:text-brand text-center p-3">
                        <BriefcaseIcon className="inline-block w-7 h-7" />
                    </li>
                </Link>
                <Link href="">
                    <li className="w-full hover:text-brand text-center p-3">
                        <SquaresPlusIcon className="inline-block w-7 h-7" />
                    </li>
                </Link>
                <Link href="">
                    <li className="w-full hover:text-brand text-center p-3">
                        <BellAlertIcon className="inline-block w-7 h-7" />
                    </li>
                </Link>
                <Link href="">
                    <li className="w-full hover:text-brand text-center p-3">
                        <UserIcon className="inline-block w-7 h-7" />
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
