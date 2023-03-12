import NavLink from '@/components/NavLink';
import Input from '@/components/Input';
import { useTable, usePagination } from 'react-table';
import Pagination from '@/components/table/Pagination';
import Button from '@/components/Button';

export default function Datatable({
    columns,
    data,
    pagePaginate,
    setPagePaginate,
    meta,
    isLoading,
    link,
    button,
    setSearch,
}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow,
    } = useTable({ columns, data }, usePagination);

    const handleSearch = e => {
        if (e.target.value.length > 2) {
            setSearch(e.target.value);
        } else {
            setSearch('');
        }
    };

    return (
        <>
            <div className="bg-white dark:bg-zinc-900 shadow-md sm:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center">
                            <div className="w-full">
                                <Input
                                    type="search"
                                    placeholder="Search"
                                    className="w-full"
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        {link && (
                            <NavLink
                                name={link?.name}
                                href={link?.href}
                                className="p-2 px-5"
                            />
                        )}
                        {button && (
                            <Button onClick={button.onClick}>
                                {button.name}
                            </Button>
                        )}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table
                        className="w-full text-left table-auto"
                        {...getTableProps}>
                        <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-500">
                            {headerGroups.map((headerGroup, key) => (
                                <tr
                                    key={key}
                                    {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column, key) => (
                                        <th
                                            key={key}
                                            className="px-4 py-3"
                                            {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>

                        <tbody
                            className="text-zinc-900 dark:text-zinc-300"
                            {...getTableBodyProps()}>
                            {isLoading ? (
                                <tr>
                                    {Array(columns.length)
                                        .fill(1)
                                        .map((_, key) => (
                                            <td key={key}>
                                                <div
                                                    role="status"
                                                    className="w-full p-4 rounded animate-pulse p-6">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="h-2.5 bg-zinc-300 rounded-full dark:bg-zinc-600 w-24 mb-2.5" />
                                                            <div className="w-32 h-2 bg-zinc-200 rounded-full dark:bg-zinc-700" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        ))}
                                </tr>
                            ) : (
                                page.map((row, key) => {
                                    prepareRow(row);
                                    return (
                                        <tr
                                            key={key}
                                            className="border-b border-zinc-50 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 h-16"
                                            {...row.getRowProps()}>
                                            {row.cells.map((cell, key) => (
                                                <td
                                                    key={key}
                                                    className="p-4 text-base font-medium font-medium whitespace-nowrap dark:text-zinc-400"
                                                    {...cell.getCellProps()}>
                                                    {' '}
                                                    {cell.render('Cell')}{' '}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    meta={meta}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    pagePaginate={pagePaginate}
                    setPagePaginate={setPagePaginate}
                />
            </div>
        </>
    );
}
