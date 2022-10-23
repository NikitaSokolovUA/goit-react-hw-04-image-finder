import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';
import { ImageGallerys } from './ImageGallery.styled';

const ImageGallery = ({ pictures }) => {
  return (
    <ImageGallerys>
      {pictures.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          largeImageURL={largeImageURL}
        ></ImageGalleryItem>
      ))}
    </ImageGallerys>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
