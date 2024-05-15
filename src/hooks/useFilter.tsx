import { useState } from 'react';
import { Character } from '../types';

export const useFilter = (charactersList: Character[] | undefined) => {
  const [filters, setFilters] = useState<{
    status: string | undefined;
    species: string | undefined;
    gender: string | undefined;
  }>({
    status: undefined,
    species: undefined,
    gender: undefined,
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    filterType: 'status' | 'species' | 'gender'
  ) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredCharacters = charactersList?.filter((character) => {
    return (
      (!filters.status || character.status === filters.status) &&
      (!filters.species || character.species === filters.species) &&
      (!filters.gender || character.gender === filters.gender)
    );
  });

  return {
    filteredCharacters,
    handleFilterChange,
  };
};
