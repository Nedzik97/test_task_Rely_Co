import { useCharactersContext } from '../../context/characters-context.tsx';

import styles from './character-details.module.scss';

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
    <div className={styles.modal}>
      <div className={styles.tittleWraper}>
        <h2 className={styles.modalTittle}>Character details</h2>
        <button
          className={styles.closeBtn}
          onClick={() => setIsFormOpen(false)}
        >
          ✕
        </button>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.characterDetails}>
          <div className={styles.characterDetailsImage}>
            <img src={selectedCharacter.image} alt={selectedCharacter.name} />
          </div>
          <div className={styles.characterDetailsInfo}>
            <h2>{selectedCharacter.name}</h2>
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
  );
};
