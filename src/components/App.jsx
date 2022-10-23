import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import { picturesApi } from 'api';
import { ToastContainer } from 'react-toastify';
import notification from '../notify';

export default function App() {
  const [pictureValue, setPictureValue] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  function loadMore() {
    setPage(prevState => prevState + 1);
  }

  function handleSubmit(value) {
    setPictureValue(value);
    setPictures([]);
  }

  useEffect(() => {
    if (pictureValue === '') {
      return;
    }

    async function fetchData() {
      page === 1 ? setStatus('pending') : setStatus('resolvAndPending');

      try {
        const picturesArray = await picturesApi(pictureValue, page);

        if (picturesArray.length === 0) {
          setStatus('rejected');
          notification();
          return;
        }

        if (page === 1) {
          setPictures(picturesArray);
          setStatus('resolved');
          return;
        }

        setPictures(prevState => [...prevState, ...picturesArray]);
        setStatus('resolved');
        return;
      } catch (error) {
        setStatus('rejected');
      }
    }

    fetchData();
  }, [page, pictureValue]);

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ToastContainer />

      {status === 'pending' && <Loader />}

      {(status === 'resolved' || status === 'resolvAndPending') && (
        <>
          <ImageGallery pictures={pictures} />
          <Button onClick={loadMore} status={status} />
        </>
      )}
    </>
  );
}
