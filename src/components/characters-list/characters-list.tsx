import { Pagination } from '../pagination/pagination.tsx';
import { usePagination } from '../../hooks/usePagination.tsx';
import { useCharactersContext } from '../../context/characters-context.tsx';
import { useFilter } from '../../hooks/useFilter.tsx';

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
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col">
          <label
            htmlFor="statusFilter"
            className="text-white font-semibold mb-1"
          >
            Filter by Status:
          </label>
          <div className="relative">
            <select
              id="statusFilter"
              onChange={(e) => handleFilterChange(e, 'status')}
              className="w-48 px-4 py-2 border border-gray-300 cursor-pointer rounded-lg bg-black text-white appearance-none focus:outline-none"
            >
              <option value="">All</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-4 h-4 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="speciesFilter"
            className="text-white font-semibold mb-1"
          >
            Filter by Species:
          </label>
          <div className="relative">
            <select
              id="speciesFilter"
              onChange={(e) => handleFilterChange(e, 'species')}
              className="w-48 px-4 py-2 border border-gray-300 cursor-pointer rounded-lg bg-black text-white appearance-none focus:outline-none"
            >
              <option value="">All</option>
              <option value="Human">Human</option>
              <option value="Alien">Alien</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="genderFilter"
            className="text-white font-semibold mb-1"
          >
            Filter by Gender:
          </label>
          <div className="relative">
            <select
              id="genderFilter"
              onChange={(e) => handleFilterChange(e, 'gender')}
              className="w-48 px-4 py-2 border border-gray-300 cursor-pointer rounded-lg bg-black text-white appearance-none focus:outline-none"
            >
              <option value="">All</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ul className="flex justify-center flex-wrap gap-4 w-1200 mb-3">
        {displayedCharacters.map((character) => (
          <li
            key={character.id}
            className="w-1/5 bg-gray-700 text-white rounded-lg p-4 cursor-pointer hover:bg-gray-500 transition duration-300 flex-shrink-0"
            onClick={() => {
              setIsFormOpen(true);
              setSelectedCharacter(character);
            }}
          >
            <div className="w-full h-32 mb-4 overflow-hidden rounded-full flex justify-center items-center">
              <img
                src={character.image}
                alt={character.name}
                className="h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center overflow-hidden">
              <h2 className="text-xl font-semibold truncate">
                {character.name}
              </h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        totalItems={filteredCharacters.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </>
  );
};
