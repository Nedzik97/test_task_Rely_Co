import { useState } from 'react';
import { Character } from '../types';

export const usePagination = (charactersList: Character[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const displayedCharacters = charactersList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    itemsPerPage,
    charactersList,
    handlePageClick,
    displayedCharacters,
  };
};
