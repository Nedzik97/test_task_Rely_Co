import React from 'react';
import { ITEMS_PER_PAGE } from '../../hooks/usePagination';

type PaginationProps = {
  totalItems: number | undefined;
  currentPage: number;
  changePage: (pageNumber: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage,
  changePage,
}): JSX.Element => {
  const totalPages =
    totalItems && ITEMS_PER_PAGE ? Math.ceil(totalItems / ITEMS_PER_PAGE) : 0;

  return (
    <div className="flex flex-col items-center mb-8 pagination-container">
      <ul className="flex items-center justify-center space-x-4 overflow-x-auto mt-3 mb-2 sm:fixed sm:bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:justify-center">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index + 1}
            className={`${
              currentPage === index + 1 ? 'bg-black cursor-auto' : 'bg-gray-700'
            } rounded-full`}
            onClick={() => changePage(index + 1)}
          >
            <a
              href="#"
              className="flex justify-center items-center w-12 h-12 
            text-white text-lg font-medium transition hover:bg-blue-300 rounded-full"
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
