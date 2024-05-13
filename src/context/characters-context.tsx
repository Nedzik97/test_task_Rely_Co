import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  useEffect,
} from 'react';
import { getData } from '../api';

import { Character, characterResponse } from '../types';

type CharacterContextType = {
  charactersList: Character[];
  setCharactersList: Dispatch<SetStateAction<Character[]>>;
  selectedCharacter: Character | undefined;
  setSelectedCharacter: Dispatch<SetStateAction<Character | undefined>>;
};

const CharactersContext = createContext<CharacterContextType>(
  {} as CharacterContextType
);

type MoviesProviderProps = {
  children: ReactNode;
};

export const CharactersProvider = ({ children }: MoviesProviderProps) => {
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const getCharacterList = () => {
    getData<characterResponse>(
      'https://rickandmortyapi.com/api/character',
      (data) => {
        const characterList = data.results;
        setCharactersList(characterList);
      },
      (error) => {
        console.error('Произошла ошибка при получении данных:', error);
      }
    );
  };

  console.log(selectedCharacter);

  useEffect(() => {
    getCharacterList();
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        charactersList,
        setCharactersList,
        selectedCharacter,
        setSelectedCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharactersContext = () => useContext(CharactersContext);
