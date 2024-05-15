import { createContext, ReactNode, useContext } from 'react';
import { useQuery } from 'react-query';
import { CharacterType } from '../types';
import { getCharacterList } from '../api';

type CharacterContextType = {
  isLoading: boolean;
  isError: boolean;
  data: CharacterType[] | undefined;
};

const CharactersContext = createContext<CharacterContextType>(
  {} as CharacterContextType
);

type CharactersProviderProps = {
  children: ReactNode;
};

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const { data, isLoading, isError } = useQuery('characters', getCharacterList);

  return (
    <CharactersContext.Provider
      value={{
        data,
        isLoading,
        isError,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharactersContext = () => useContext(CharactersContext);
