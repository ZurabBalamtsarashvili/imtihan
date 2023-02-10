import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Table from '@/components/Table/Table';
import NavLink from '@/components/NavLink';
import Link from 'next/link';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from '@/store';
import { getCompanies } from '@/store/slices/company';

Index.getLayout = page => <AppLayout name="Companies">{page}</AppLayout>;
export default function Index() {
    const dispatch = useDispatch();

    const { companies } = useSelector(state => state.company);

    useEffect(() => {
        dispatch(getCompanies());
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>Companies - İmtihan</title>
                <meta name="description" content="Generated by codenteq" />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js" />
            </Head>

            <main className="px-4 pt-16">
                <div className="flex justify-end px-4">
                    <NavLink
                        name="Create"
                        href="/admin/company/create"
                        className="p-2 px-5"
                    />
                </div>

                <Table
                    searchable={true}
                    head={[
                        { name: 'Şirket Adı', sortable: true },
                        { name: 'E-mail' },
                        { name: 'phone', sortable: true },
                        { name: 'İşlemler', width: 200 },
                    ]}
                    body={
                        companies &&
                        companies?.map(company => [
                            company.name,
                            company.email,
                            company.phone,
                            [
                                // eslint-disable-next-line react/jsx-key
                                <button
                                    id="dropdownMenuIconButton"
                                    data-dropdown-toggle="dropdownDots"
                                    type="button">
                                    <EllipsisHorizontalIcon className="w-6 h-6" />
                                </button>,

                                // eslint-disable-next-line react/jsx-key
                                <div
                                    id="dropdownDots"
                                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconButton">
                                        <Link href="">
                                            <li>
                                                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Edit
                                                </a>
                                            </li>
                                        </Link>
                                        <Link href="">
                                            <li>
                                                <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Remove
                                                </a>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>,
                            ],
                        ])
                    }
                />
            </main>
        </>
    );
}
