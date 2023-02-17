import Link from 'next/link'
import {ArrowLeftIcon} from '@heroicons/react/24/outline'

export default function BackButton({href}) {
    return (
        <div className="sm:block md:blcok lg:hidden xl:hidden 2xl:hidden block">
            <Link href={href}>
                <div
                    className="fixed flex flex-1 justify-center items-center top-2 left-4 backdrop-blur-sm bg-white/50 rounded-full w-9 h-9 dark:bg-black/20">
                    <ArrowLeftIcon className="w-6 h-6 z-10 dark:text-white"></ArrowLeftIcon>
                </div>
            </Link>
        </div>
    )
}
