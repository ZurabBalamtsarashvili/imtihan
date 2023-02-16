import { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import TableMobile from './TableMobile';
import {
    ArrowSmallDownIcon,
    ArrowSmallUpIcon,
    ArrowsUpDownIcon,
} from '@heroicons/react/24/outline';
import NavLink from '@/components/NavLink';
import Input from '@/components/Input';

export default function Table({ head, data, searchable }) {
    const isMobile = useMediaQuery('(max-width: 600px)');

    const [sorting, setSorting] = useState(false);
    const [search, setSearch] = useState('');

    if (!data || data?.length === 0) {
        return (
            <div className="p-4 rounded bg-gray-100 text-brand dark:bg-gray-900 text-sm">
                Gösterilecek veri bulunmuyor.
            </div>
        );
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex items-center">
                                    <div className="relative w-full">
                                        {searchable && (
                                            <Input
                                                value={search}
                                                onChange={e =>
                                                    setSearch(e.target.value)
                                                }
                                                type="text"
                                                placeholder="Search"
                                                className="w-full"
                                            />
                                        )}
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <NavLink
                                    name="Create"
                                    href="/admin/company/create"
                                    className="p-2 px-5"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        {head.map((h, key) => (
                                            <th
                                                scope="col"
                                                className="px-4 py-3"
                                                key={key}>
                                                {h.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {data.map((item, key) => (
                                        <tr
                                            className="border-b dark:border-gray-700"
                                            key={key}>
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.name}
                                            </td>
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.email}
                                            </td>
                                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item.phone}
                                            </td>
                                            <td className="px-4 py-3 flex items-center justify-end">
                                                <button
                                                    id="xbox-series-s-dropdown-button"
                                                    data-dropdown-toggle="xbox-series-s-dropdown"
                                                    className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                                    type="button">
                                                    <svg
                                                        className="w-5 h-5"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    </svg>
                                                </button>
                                                <div
                                                    id="xbox-series-s-dropdown"
                                                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                    <ul
                                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                        aria-labelledby="xbox-series-s-dropdown-button">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                Show
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                Edit
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="py-1">
                                                        <a
                                                            href="#"
                                                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                            Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
