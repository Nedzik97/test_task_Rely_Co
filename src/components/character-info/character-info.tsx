import React from 'react';
import { useCharactersContext } from '../../context/characters-context.tsx';

type CharacterDetailsProps = {
  setIsFormOpen: (isOpen: boolean) => void;
};

export const CharacterInfo: React.FC<CharacterDetailsProps> = ({
  setIsFormOpen,
}): JSX.Element | null => {
  const { selectedCharacter } = useCharactersContext();

  if (!selectedCharacter) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black 
      bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg shadow-lg w-1/2 p-3">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold">Character details</h2>
          <button
            className="text-gray-600 hover:text-blue-500 w-5 h-5"
            onClick={() => setIsFormOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <div className="w-80">
              <img
                className="w-full"
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
              />
            </div>
            <div className="flex-1 ml-4">
              <h2 className="text-2xl font-semibold mb-4">
                {selectedCharacter.name}
              </h2>
              <p>
                <strong>Status:</strong> {selectedCharacter.status}
              </p>
              <p>
                <strong>Species:</strong> {selectedCharacter.species}
              </p>
              <p>
                <strong>Gender:</strong> {selectedCharacter.gender}
              </p>
              <p>
                <strong>Location:</strong> {selectedCharacter.location.name}
              </p>
              <p>
                <strong>Origin:</strong> {selectedCharacter.origin.name}
              </p>
              <p>
                <strong>Created:</strong>
                {new Date(selectedCharacter.created).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
