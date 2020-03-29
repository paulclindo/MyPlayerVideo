import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.input.value, 'submit');
  };

  setInputRef = element => {
    this.input = element;
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value.replace(' ', '-'),
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={value}
      />
    );
  }
}
export default SearchContainer;
