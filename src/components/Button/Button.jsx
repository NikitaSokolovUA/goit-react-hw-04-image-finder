import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return <LoadMoreBtn onClick={() => onClick()}>LoadMore</LoadMoreBtn>;
};

export default Button;

Button.proptype = {
  onClick: PropTypes.func.isRequired,
};
