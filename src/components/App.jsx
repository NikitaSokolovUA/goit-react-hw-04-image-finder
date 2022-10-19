import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import axios from 'axios';
import Button from './Button';
import Loader from './Loader';

class App extends Component {
  state = {
    pictureValue: '',
    pictures: null,
    page: 1,
    status: 'idle',
  };

  handleSubmit = async value => {
    this.setState({ page: 1 });
    this.setState({ status: 'pending' });

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '29773824-39fd0ee837bb8082420a788ac';
    const options = {
      params: {
        key: API_KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: this.state.page,
      },
    };

    try {
      const responce = await axios.get(`${BASE_URL}`, options);
      console.log(responce);
      const pictures = await responce.data;

      if (pictures.total !== 0) {
        this.setState({ pictures: pictures.hits });
        this.setState({ pictureValue: value });
        this.setState(prevState => ({ page: prevState.page + 1 }));
        this.setState({ status: 'resolved' });
        return;
      }
      this.setState({ status: 'rejected' });
      return;
    } catch (error) {
      console.log(error);
      this.setState({ status: 'rejected' });
    }
  };

  handleUpdate = async () => {
    this.setState({ status: 'resolvAndPending' });

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '29773824-39fd0ee837bb8082420a788ac';
    const options = {
      params: {
        key: API_KEY,
        q: this.state.pictureValue,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: this.state.page,
      },
    };
    try {
      const responce = await axios.get(`${BASE_URL}`, options);
      const pictures = await responce.data;

      if (pictures.hits.length !== 0) {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures.hits],
        }));
        this.setState(prevState => ({ page: prevState.page + 1 }));
        this.setState({ status: 'resolved' });
        return;
      }
      this.setState({ status: 'rejected' });
      return;
    } catch (error) {
      console.log(error);
      this.setState({ status: 'rejected' });
    }
  };

  renderByStatus = () => {
    if (
      this.state.status === 'resolved' ||
      this.state.status === 'resolvAndPending'
    ) {
      return (
        <>
          <ImageGallery pictures={this.state.pictures} />
          {this.state.status === 'resolvAndPending' ? (
            <Loader />
          ) : (
            <Button onClick={this.handleUpdate} />
          )}
        </>
      );
    }

    if (this.state.status === 'pending') {
      return <Loader />;
    }

    if (this.state.status === 'rejected') {
      return <p>Упс, что то пошло не так...</p>;
    }
  };

  render() {
    return (
      <>
        <Searchbar
          pictureValue={this.state.pictureValue}
          onSubmit={this.handleSubmit}
        />
        {this.renderByStatus()}
      </>
    );
  }
}

export default App;

// (if(this.state.status === 'resolved'){
//           return(
//           <>
//             <ImageGallery pictures={this.state.pictures} />
//             <Button onClick={this.handleUpdate} />
//           </>
//         )
//         })
