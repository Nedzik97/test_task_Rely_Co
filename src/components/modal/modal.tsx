import { useMemo, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const modalRootElement = document.querySelector('#modal');

type ModalProps = {
  isOpenned: boolean;
  children: ReactNode;
};

export const Modal = ({
  isOpenned,
  children,
}: ModalProps): JSX.Element | null => {
  const element = useMemo(() => {
    return document.createElement('div');
  }, []);

  useEffect(() => {
    if (modalRootElement) {
      modalRootElement.append(element);
    }

    return () => {
      element.remove();
    };
  });

  if (isOpenned) {
    return createPortal(children, element);
  }
  return null;
};
