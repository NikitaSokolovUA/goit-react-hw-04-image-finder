import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { useState } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ smallImage, largeImageURL }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handlePictureClick(e) {
    if (e.target.nodeName === 'IMG') {
      setModalIsOpen(!modalIsOpen);
    }
  }

  return (
    <GalleryItem>
      <GalleryItemImage src={smallImage} alt="" onClick={handlePictureClick} />
      {modalIsOpen && (
        <Modal
          largeImageURL={largeImageURL}
          isOpen={modalIsOpen}
          toggleModal={() => setModalIsOpen(!modalIsOpen)}
        />
      )}
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};
