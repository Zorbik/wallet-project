import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBox } from './backdrop.styled';



const modalRoot = document.querySelector('#root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = useCallback(
    event => {
      if (event.currentTarget === event.target) {
        onClose();
      }
    },
    [onClose]
  );

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalBox onClose={onClose}>{children}</ModalBox>
    </Backdrop>,
    modalRoot
  );
}
