import React from 'react';
import { useCharactersContext } from '../../context/characters-context.tsx';
import { useFilter } from '../../hooks/useFilter.tsx';
import { usePagination } from '../../hooks/usePagination.tsx';
import { FilterSelect } from '../filter-select/filter-select.tsx';
import { Character } from '../character/character.tsx';
import { Pagination } from '../pagination/pagination.tsx';

type CharacterslistProps = {
  setIsFormOpen: (isOpen: boolean) => void;
};

export const CharacterList: React.FC<CharacterslistProps> = ({
  setIsFormOpen,
}) => {
  const { setSelectedCharacter, data } = useCharactersContext();
  const { handleFilterChange, filteredCharacters } = useFilter(data);
  const {
    currentPage,
    ITEMS_PER_PAGE,
    handlePageClick,
    displayedCharacters,
    resetPage,
  } = usePagination(filteredCharacters);

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    filterType: 'status' | 'species' | 'gender'
  ) => {
    handleFilterChange(e, filterType);
    resetPage();
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-4 justify-center lg:w-3/4 xl:w-1/2 mx-auto">
        <FilterSelect
          label="Status"
          options={[
            { value: 'Alive', label: 'Alive' },
            { value: 'Dead', label: 'Dead' },
            { value: 'unknown', label: 'Unknown' },
          ]}
          onChange={(e) => handleSelectChange(e, 'status')}
        />
        <FilterSelect
          label="Species"
          options={[
            { value: 'Human', label: 'Human' },
            { value: 'Alien', label: 'Alien' },
          ]}
          onChange={(e) => handleSelectChange(e, 'species')}
        />
        <FilterSelect
          label="Gender"
          options={[
            { value: 'Female', label: 'Female' },
            { value: 'Male', label: 'Male' },
          ]}
          onChange={(e) => handleSelectChange(e, 'gender')}
        />
      </div>
      {displayedCharacters && displayedCharacters?.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-4 px-5 w-full lg:w-3/4 xl:w-1/2 mx-auto">
          {displayedCharacters?.map((character) => (
            <Character
              key={character.id}
              character={character}
              onClick={() => {
                setIsFormOpen(true);
                setSelectedCharacter(character);
              }}
            />
          ))}
        </ul>
      ) : (
        <p className="text-white text-center text-4xl">Characters not found.</p>
      )}
      <Pagination
        totalItems={filteredCharacters?.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </>
  );
};
