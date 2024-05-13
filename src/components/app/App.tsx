import { Characterslist } from '../characters-list/characters-list';
import { useState } from 'react';
import { Modal } from '../modal/modal';
import { CharacterDetails } from '../character-details/character-details';
import styles from './app.module.scss';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <Characterslist setIsFormOpen={setIsFormOpen} />
      <Modal open={isFormOpen}>
        <div className={styles.modalBackground}>
          {<CharacterDetails setIsFormOpen={setIsFormOpen} />}
        </div>
      </Modal>
    </div>
  );
}

export default App;
