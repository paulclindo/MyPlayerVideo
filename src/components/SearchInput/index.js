import React from "react";
import { SearchWrapper, SearchInput, StyledSearchIcon } from "./style";

const SearchBar = () => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newvalue = transformText(value);
    console.log(newvalue, "submit");
  };

  const transformText = (string) => string.replace(" ", "-");
  // const setRef = React.useRef();

  const handleChange = (e) => {
    // this.setState({
    //   value: e.target.value.replace(" ", "-")
    // });
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <StyledSearchIcon size={20} />
      <SearchInput
        // ref={setRef}
        type="text"
        placeholder="Look for your favorite video ..."
        onChange={handleChange}
        value={value}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
