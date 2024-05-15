import { CharacterType } from "./types";

type CharacterData = {
  results: CharacterType[];
};

export const getCharacterList = async (): Promise<CharacterType[]> => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data: CharacterData = await res.json();
  const results = data.results;
  return results;
};