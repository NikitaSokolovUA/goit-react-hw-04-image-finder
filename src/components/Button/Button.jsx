import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';

const Button = ({ onClick, status }) => {
  return status === 'resolvAndPending' ? (
    <Loader />
  ) : (
    <LoadMoreBtn onClick={() => onClick()}>LoadMore</LoadMoreBtn>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};
