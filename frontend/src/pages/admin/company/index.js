import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import { useEffect } from 'react';
import Table from '@/components/Table/Table';
import NavLink from '@/components/NavLink';
import Link from 'next/link';
import { useDispatch, useSelector } from '@/store';
import { getCompanies } from '@/store/slices/company';
import { PencilIcon } from '@heroicons/react/20/solid';
import { TrashIcon } from '@heroicons/react/24/solid';

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
                                <div
                                    key={company.id}
                                    className="w-full flex gap-3">
                                    <Link
                                        href={`/admin/company/${company.id}/edit`}>
                                        <PencilIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                                    </Link>
                                    <Link href={``}>
                                        <TrashIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                                    </Link>
                                </div>,
                            ],
                        ])
                    }
                />
            </main>
        </>
    );
}
