import Link from 'next/link';
import { useRouter } from 'next/router';
import config from "@/config/menu";

export default function MobileBar({ className }) {
    const router = useRouter();

    return (
        <nav className={`${className} bg-white dark:bg-black sm:block md:blcok lg:hidden xl:hidden 2xl:hidden block h-14`}>
            <ul className="flex justify-around fixed bottom-0 border-t bg-white dark:bg-black border-zinc-100 shadow w-full dark:border-zinc-800">
                {config.mobile.admin.map((item, index) => {
                    return (
                        <Link href={item.path} key={index}>
                            <li
                                className={`${router.asPath == item.path ? 'text-brand' : 'dark:text-white text-zinc-900'} w-full text-center p-3`}
                            >
                                {item.icon}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </nav>
    );
}
