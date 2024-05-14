import { useCharactersContext } from '../../context/characters-context.tsx';

type CharacterDetailsProps = {
  setIsFormOpen: (isOpen: boolean) => void;
};

export const CharacterDetails = ({
  setIsFormOpen,
}: CharacterDetailsProps): JSX.Element | null => {
  const { selectedCharacter } = useCharactersContext();

  if (!selectedCharacter) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-100 h-100 p-3">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Character details</h2>
          <button
            className="text-gray-600 hover:text-blue-500"
            onClick={() => setIsFormOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <div className="w-40">
              <img
                className="w-full"
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
              />
            </div>
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-semibold">
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
                <strong>Created:</strong>{' '}
                {new Date(selectedCharacter.created).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
