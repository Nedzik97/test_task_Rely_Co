import { Characterslist } from '../characters-list/characters-list';
import { useState } from 'react';
import { Modal } from '../modal/modal';
import { CharacterDetails } from '../character-details/character-details';

export const App = (): JSX.Element => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="w-1280 flex flex-col items-center justify-between h-screen mx-auto pb-2 pt-2">
      <Characterslist setIsFormOpen={setIsFormOpen} />
      <Modal open={isFormOpen}>
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {<CharacterDetails setIsFormOpen={setIsFormOpen} />}
        </div>
      </Modal>
    </div>
  );
};
