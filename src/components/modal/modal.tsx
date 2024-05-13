import { useMemo, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const modalRootElement = document.querySelector('#modal');

type ModalProps = {
  open: boolean;
  children: ReactNode;
};

export const Modal = ({ open, children }: ModalProps): JSX.Element => {
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

  if (open) {
    return createPortal(children, element);
  }
  return <></>;
};
