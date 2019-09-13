import React, { Component } from 'react'
import Search from '../components/search'

class SearchContainer extends Component {
  state = {
    value: "Luis Fonsi"
  };
  handleSubmit = e => {
    event.preventDefault();
    console.log(this.input.value, "submit");
  };
  setInputRef = element => {
    this.input = element;
  };
  handleInputChange = e => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  };

  render() {
    return (
      <Search 
        setRef={this.setInputRef} 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleInputChange}
        value={this.state.value} />
    );
  }
}
export default SearchContainer