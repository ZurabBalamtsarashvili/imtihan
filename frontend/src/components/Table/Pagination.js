export default function Pagination({
    previousPage,
    nextPage,
    setPagePaginate,
    pagePaginate,
    gotoPage,
    meta,
}) {
    /*    const pageCount = meta?.last_page;
    const pageSize = 5; // sayfa boyutu
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);
    let numGroups = Math.ceil(pageCount / pageSize);
    let activeGroup = Math.floor(meta.current_page / pageSize);
    const startPage = activeGroup * pageSize - Math.floor(pageSize / 2);
    let groupStart = Math.max(Math.min(startPage, pageCount - pageSize), 0);
    let groupEnd = Math.min(groupStart + pageSize, pageCount);

    if (pageCount < pageSize) {
        // Sayfa sayısı, sayfa boyutundan küçük olduğunda tüm sayfaları göster
        groupStart = 0;
        groupEnd = pageCount;
        numGroups = 1;
        activeGroup = 0;
    } else if (meta.current_page < Math.ceil(pageSize / 2)) {
        numGroups = Math.ceil(pageCount / pageSize) - 1;
        activeGroup = 0;
        groupStart = 0;
        groupEnd = pageSize;
    } else if (meta.current_page >= pageCount - Math.floor(pageSize / 2)) {
        numGroups = Math.ceil(pageCount / pageSize) - 1;
        activeGroup = numGroups;
        groupStart = pageCount - pageSize;
        groupEnd = pageCount;
    }*/

    const customPrevPage = () => {
        if (pagePaginate === 1) return;
        setPagePaginate(pagePaginate - 1);
        previousPage();
    };

    const customNextPage = () => {
        if (pagePaginate === meta?.last_page) return;
        setPagePaginate(pagePaginate + 1);
        nextPage();
    };

    const customPage = page => {
        gotoPage(page - 1);
        setPagePaginate(page);
    };

    return (
        <>
            <nav
                className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                aria-label="Datatable navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {meta?.from} {' - '} {meta?.to}
                    </span>
                    {' of '}
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {meta?.total}
                    </span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                    <li>
                        <button
                            onClick={customPrevPage}
                            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
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
        </>
    );
}
