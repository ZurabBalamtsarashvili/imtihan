import NavLink from '@/components/NavLink';
import Input from '@/components/Input';
import { useTable, usePagination } from 'react-table';

export default function Table({
    columns,
    data,
    pagePaginate,
    setPagePaginate,
    meta,
}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow,
        gotoPage,
    } = useTable({ columns, data }, usePagination);

    const pageCount = meta?.last_page; // sayfa sayısı
    const pageSize = 4; // sayfa boyutu
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1); // sayfa sayıları
    const numGroups = Math.ceil(pageCount / pageSize); // sayfa grupları sayısı
    const activeGroup = Math.floor(meta?.current_page - 1 / pageSize); // mevcut sayfa grubu
    console.log(activeGroup);
    const groupStart = activeGroup * pageSize; // mevcut sayfa grubunun başlangıç sayfası
    const groupEnd = Math.min(groupStart + pageSize, pageCount); // mevcut sayfa grubunun son sayfası

    const customPrevPage = () => {
        if (pagePaginate === 1) return;
        setPagePaginate(pagePaginate - 1);
        previousPage();
    };

    const customNextPage = () => {
        if (pagePaginate === meta.last_page) return;
        setPagePaginate(pagePaginate + 1);
        nextPage();
    };

    const customPage = page => {
        gotoPage(page - 1);
        setPagePaginate(page);
    };

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                <div className="mx-auto px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex items-center">
                                    <div className="relative w-full">
                                        <Input
                                            type="text"
                                            placeholder="Search"
                                            className="w-full"
                                        />
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
                            <table
                                className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                                {...getTableProps}>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    {headerGroups.map((headerGroup, key) => (
                                        <tr
                                            key={key}
                                            {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(
                                                (column, key) => (
                                                    <th
                                                        key={key}
                                                        className="px-4 py-3"
                                                        {...column.getHeaderProps()}>
                                                        {column.render(
                                                            'Header',
                                                        )}
                                                    </th>
                                                ),
                                            )}
                                        </tr>
                                    ))}
                                </thead>

                                <tbody {...getTableBodyProps()}>
                                    {page.map((row, key) => {
                                        prepareRow(row);
                                        return (
                                            <tr
                                                key={key}
                                                className="border-b dark:border-gray-700"
                                                {...row.getRowProps()}>
                                                {row.cells.map((cell, key) => (
                                                    <td
                                                        key={key}
                                                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                        {...cell.getCellProps()}>
                                                        {' '}
                                                        {cell.render(
                                                            'Cell',
                                                        )}{' '}
                                                    </td>
                                                ))}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <nav
                            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                            aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Showing
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    1-10
                                </span>
                                of
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    1000
                                </span>
                            </span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                <li>
                                    <button
                                        onClick={customPrevPage}
                                        className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                {pageNumbers
                                    .slice(groupStart, groupEnd)
                                    .map(page => (
                                        <li key={page}>
                                            {page === meta.current_page ? (
                                                <button
                                                    key={page}
                                                    onClick={() =>
                                                        customPage(page)
                                                    }
                                                    aria-current="page"
                                                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                                                    {page}
                                                </button>
                                            ) : (
                                                <button
                                                    key={page}
                                                    onClick={() =>
                                                        customPage(page)
                                                    }
                                                    aria-current="page"
                                                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    {page}
                                                </button>
                                            )}
                                        </li>
                                    ))}
                                <li>
                                    <button
                                        onClick={customNextPage}
                                        className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span className="sr-only">Next</span>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
