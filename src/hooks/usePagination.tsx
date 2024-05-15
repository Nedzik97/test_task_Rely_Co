import { useState } from 'react';
import { Character } from '../types';

const ITEMS_PER_PAGE = 6;

export const usePagination = (charactersList: Character[] | undefined) => {
  const [currentPage, setCurrentPage] = useState(1);

  const resetPage = () => {
    setCurrentPage(1);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const displayedCharacters = charactersList?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return {
    currentPage,
    ITEMS_PER_PAGE,
    charactersList,
    displayedCharacters,
    handlePageClick,
    resetPage,
    setCurrentPage,
  };
};
