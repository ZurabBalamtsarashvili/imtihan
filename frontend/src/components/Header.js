import Link from "next/link";

export default function Header({className, name}) {
    return (
        <header className={`${className} fixed w-full backdrop-blur-sm border-b border-zinc-400 px-2 sm:px-4 py-2.5 dark:bg-black/30 dark:border-zinc-800`}>
            <div
                className="font-medium select-none text-2xl text-center sm:block md:blcok lg:blcok xl:blcok 2xl:blcok block dark:text-white">
                <Link href="/dashboard">{name}</Link>
            </div>
        </header>
    )
}
