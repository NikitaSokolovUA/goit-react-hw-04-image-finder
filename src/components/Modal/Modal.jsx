import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export default function Modal({ largeImageURL, toggleModal }) {
  const closeModalOnClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    function closeModalOnEscPush(e) {
      const KEY_CODE_ESCAPE = 'Escape';

      if (e.code === KEY_CODE_ESCAPE) {
        toggleModal();
      }
    }

    window.addEventListener('keydown', closeModalOnEscPush);

    return () => window.removeEventListener('keydown', closeModalOnEscPush);
  }, [toggleModal]);

  return (
    <Overlay onClick={closeModalOnClick}>
      <ModalWindow>
        <img src={largeImageURL} alt="" />
      </ModalWindow>
    </Overlay>
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
