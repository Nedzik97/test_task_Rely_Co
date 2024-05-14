import { Pagination } from '../pagination/pagination.tsx';
import { usePagination } from '../../hooks/usePagination.tsx';
import { useCharactersContext } from '../../context/characters-context.tsx';
import { useFilter } from '../../hooks/useFilter.tsx';

import styles from './characters-list.module.scss';

type CharacterslistProps = {
  setIsFormOpen: (isOpen: boolean) => void;
};

export const Characterslist = ({ setIsFormOpen }: CharacterslistProps) => {
  const { setSelectedCharacter, charactersList } = useCharactersContext();
  const { handleFilterChange, filteredCharacters } = useFilter(charactersList);
  const { currentPage, itemsPerPage, handlePageClick, displayedCharacters } =
    usePagination(filteredCharacters);

  return (
    <>
      <div className={styles.filters}>
        <div className={styles.selectWrapper}>
          <label htmlFor="statusFilter">Filter by Status:</label>
          <div className={styles.selectContainer}>
            <select
              id="statusFilter"
              onChange={(e) => handleFilterChange(e, 'status')}
            >
              <option value="">All</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="speciesFilter">Filter by Species:</label>
          <div className={styles.selectContainer}>
            <select
              id="speciesFilter"
              onChange={(e) => handleFilterChange(e, 'species')}
            >
              <option value="">All</option>
              <option value="Human">Human</option>
              <option value="Alien">Alien</option>
            </select>
          </div>
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="genderFilter">Filter by Gender:</label>
          <div className={styles.selectContainer}>
            <select
              id="speciesFilter"
              onChange={(e) => handleFilterChange(e, 'gender')}
            >
              <option value="">All</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.characterList}>
        {displayedCharacters.map((character) => (
          <li
            key={character.id}
            className={styles.character}
            onClick={() => {
              setIsFormOpen(true);
              setSelectedCharacter(character);
            }}
          >
            <div className={styles.imageContainer}>
              <img src={character.image} alt={character.name} />
            </div>
            <div className={styles.characterDetails}>
              <h2>{character.name}</h2>
              <p>
                <span>Status:</span> {character.status}
              </p>
              <p>
                <span>Species:</span> {character.species}
              </p>
              <p>
                <span>Gender:</span> {character.gender}
              </p>
            </div>
          </li>
        ))}
      </div>
      <Pagination
        totalItems={filteredCharacters.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </>
  );
};
