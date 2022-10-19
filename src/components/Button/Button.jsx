import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick }) => {
  return <LoadMoreBtn onClick={() => onClick()}>LoadMore</LoadMoreBtn>;
};

export default Button;
