import { useState, useCallback } from 'react';

export const useModal = () => {
  const [isModalOpenned, setIsModalOpenned] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpenned(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpenned(false);
  }, []);

  return { openModal, closeModal, isModalOpenned };
};
