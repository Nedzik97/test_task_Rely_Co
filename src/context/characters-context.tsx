import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import { Character } from '../types';
import { getCharacterList } from '../api';

type CharacterContextType = {
  isLoading: boolean;
  isError: boolean;
  data: Character[] | undefined;
  selectedCharacter: Character | undefined;
  setSelectedCharacter: Dispatch<SetStateAction<Character | undefined>>;
};

const CharactersContext = createContext<CharacterContextType>(
  {} as CharacterContextType
);

type CharactersProviderProps = {
  children: ReactNode;
};

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const { data, isLoading, isError } = useQuery('characters', getCharacterList);

  return (
    <CharactersContext.Provider
      value={{
        data,
        selectedCharacter,
        setSelectedCharacter,
        isLoading,
        isError,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharactersContext = () => useContext(CharactersContext);
