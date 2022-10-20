import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchForm,
  Header,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  Icon,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton>
            <Icon />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="inputValue"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
