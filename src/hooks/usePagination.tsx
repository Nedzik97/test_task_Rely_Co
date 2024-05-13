import { useState } from 'react';
import { useCharactersContext } from '../context/characters-context';

export const usePagination = () => {
  const { charactersList } = useCharactersContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
