import React from 'react';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  handlePageClick: (pageNumber: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  handlePageClick,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    handlePageClick(pageNumber);
  };

  return (
    <div className="flex justify-center">
      <ul className="flex items-center space-x-4">
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
              className="flex justify-center items-center w-12 h-12 text-white text-lg font-medium transition hover:bg-blue-300 rounded-full"
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
