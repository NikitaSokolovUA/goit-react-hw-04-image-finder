import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';
import { ImageGallerys } from './ImageGallery.styled';

const buildPicturesOption = pictures => {
  return pictures.map(picture => ({
    id: picture.id,
    webformatURL: picture.webformatURL,
    largeImageURL: picture.largeImageURL,
  }));
};

const ImageGallery = ({ pictures }) => {
  const options = buildPicturesOption(pictures);

  return (
    <ImageGallerys>
      {options.map(({ id, webformatURL, largeImageURL }) => (
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

ImageGallery.proptype = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
