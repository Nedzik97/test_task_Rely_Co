import { useState } from 'react';
import { CharacterList } from '../character-list/character-list';
import { Modal } from '../modal/modal';
import { CharacterInfo } from '../character-info/character-info';
import { useCharactersContext } from '../../context/characters-context';
import { Loader } from '../loader/loader';
import { ErrorPage } from '../error-page/error-page';
import { useModal } from '../../hooks/useModal';
import { CharacterType } from '../../types';

export const App = (): JSX.Element => {
  const { isError, isLoading } = useCharactersContext();
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>();
  const { openModal, closeModal, isModalOpenned } = useModal();

  return (
    <div className="h-screen mx-auto pb-2 pt-2">
      {isLoading && <Loader />}
      {isError && <ErrorPage />}
      {!isLoading && !isError && (
        <>
          <CharacterList
            openModal={openModal}
            selectCharacter={setSelectedCharacter}
          />
          <Modal isOpenned={isModalOpenned}>
            <div
              className="fixed top-0 left-0 w-full h-full 
				bg-black bg-opacity-50 flex justify-center items-center"
            >
              {
                <CharacterInfo
                  closeModal={closeModal}
                  selectedCharacter={selectedCharacter}
                />
              }
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};
