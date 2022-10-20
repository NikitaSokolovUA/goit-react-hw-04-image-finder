import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  handlePictureClick = e => {
    if (e.target.nodeName === 'IMG') {
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    return (
      <GalleryItem>
        <GalleryItemImage
          src={this.props.smallImage}
          alt=""
          onClick={this.handlePictureClick}
        />
        {this.state.modalIsOpen && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            isOpen={this.state.modalIsOpen}
            toggleModal={this.toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.proptype = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
