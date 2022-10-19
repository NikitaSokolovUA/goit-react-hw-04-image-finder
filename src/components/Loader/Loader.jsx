import { RotatingLines } from 'react-loader-spinner';
import { SpinnerContainer } from './Loader.styled';

const Loader = () => {
  return (
    <SpinnerContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </SpinnerContainer>
  );
};

export default Loader;
