import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import { picturesApi } from 'api';
import { ToastContainer } from 'react-toastify';
import notification from '../notify';

class App extends Component {
  state = {
    pictureValue: '',
    pictures: [],
    page: 1,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { pictureValue, page, pictures } = this.state;

    if (prevState.pictureValue !== pictureValue || prevState.page !== page) {
      this.state.pictures.length === 0
        ? this.setState({ status: 'pending' })
        : this.setState({ status: 'resolvAndPending' });

      try {
        const picturesArray = await picturesApi(pictureValue, page);

        if (picturesArray.length === 0 && pictures.length === 0) {
          this.setState({ status: 'rejected' });
          return;
        }

        if (pictures.length === 0) {
          this.setState({ pictures: picturesArray, status: 'resolved' });
          return;
        }

        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...picturesArray],
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  }

  handleSubmit = value => {
    this.setState({ pictureValue: value, pictures: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    if (this.state.status === 'rejected') {
      notification();
    }

    return (
      <>
        <Searchbar
          pictureValue={this.state.pictureValue}
          onSubmit={this.handleSubmit}
        />
        <ToastContainer />

        {this.state.status === 'pending' && <Loader />}

        {(this.state.status === 'resolved' ||
          this.state.status === 'resolvAndPending') && (
          <>
            <ImageGallery pictures={this.state.pictures} />
            <Button onClick={this.loadMore} status={this.state.status} />
          </>
        )}
      </>
    );
  }
}

export default App;
