import { useState, useCallback } from 'react';
import { CharacterType } from '../types';

export const ITEMS_PER_PAGE = 6;

export const usePagination = (charactersList: CharacterType[] | undefined) => {
  const [currentPage, setCurrentPage] = useState(1);

  const resetPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const changePage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const displayedCharacters = charactersList?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return {
    currentPage,
    charactersList,
    displayedCharacters,
    changePage,
    resetPage,
    setCurrentPage,
  };
};
