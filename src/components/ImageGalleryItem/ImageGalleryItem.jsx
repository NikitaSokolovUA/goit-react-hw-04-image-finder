import Modal from 'components/Modal/Modal';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ smallImage, largeImage }) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={smallImage} alt="" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
