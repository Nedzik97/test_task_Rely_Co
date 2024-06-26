import React from 'react';
import { memo } from 'react';
import { CharacterType } from '../../types';

type CharacterProps = {
  character: CharacterType;
  onClick: (character: CharacterType) => void;
};

export const Character: React.FC<CharacterProps> = memo(
  ({ character, onClick }) => {
    return (
      <li
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-gray-700 
    text-white rounded-lg p-4 cursor-pointer 
    hover:bg-gray-500 transition duration-300"
        onClick={() => onClick(character)}
      >
        <div className="w-full h-32 mb-4 overflow-hidden rounded-full flex justify-center items-center">
          <img
            src={character.image}
            alt={character.name}
            className="h-full object-cover rounded-full"
          />
        </div>
        <div className="text-center overflow-hidden">
          <h2 className="text-xl font-semibold truncate">{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      </li>
    );
  }
);
