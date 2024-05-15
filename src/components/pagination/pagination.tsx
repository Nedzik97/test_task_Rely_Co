import React from 'react';

type PaginationProps = {
  totalItems: number | undefined;
  itemsPerPage: number;
  currentPage: number;
  handlePageClick: (pageNumber: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  handlePageClick,
}): JSX.Element => {
  const totalPages =
    totalItems && itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 0;

  const handleClick = (pageNumber: number) => {
    handlePageClick(pageNumber);
  };

  return (
    <div className="sticky bottom-0 left-0 w-full">
      <ul className="flex items-center justify-center space-x-4 overflow-x-auto">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index + 1}
            className={`${
              currentPage === index + 1 ? 'bg-black cursor-auto' : 'bg-gray-700'
            } rounded-full`}
            onClick={() => handleClick(index + 1)}
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
