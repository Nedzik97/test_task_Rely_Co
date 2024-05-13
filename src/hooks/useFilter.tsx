// import { useState } from 'react';
// import { useCharactersContext } from '../context/characters-context';

// export const useFilter = () => {
//   const { charactersList } = useCharactersContext();
//   const [statusFilter, setStatusFilter] = useState<string>();
//   const [speciesFilter, setSpeciesFilter] = useState<string>();

//   const handleStatusFilterChange = (
//     e: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setStatusFilter(e.target.value);
//   };

//   const handleSpeciesFilterChange = (
//     e: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setSpeciesFilter(e.target.value);
//   };

//   const filteredCharacters = charactersList.filter((character) => {
//     return (
//       (!statusFilter || character.status === statusFilter) &&
//       (!speciesFilter || character.species === speciesFilter)
//     );
//   });

//   return {
//     handleStatusFilterChange,
//     handleSpeciesFilterChange,
//     filteredCharacters,
//   };
// };
