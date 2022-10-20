import { toast } from 'react-toastify';

const notification = () => {
   toast.error('Sorry we dont find pictures by your Request', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
};
  
 export default  notification