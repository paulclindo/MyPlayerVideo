import React from 'react';
import './search.css';

type Props = {|
  handleSubmit: Function,
  handleChange: Function,
  setRef: Function,
  value: any,
|};

const Search = (props: Props) => {
  const { handleSubmit, handleChange, setRef, value } = props;
  return (
    <form onSubmit={handleSubmit} className="Search">
      <input
        ref={setRef}
        type="text"
        className="Search-input"
        placeholder="Look for your favorite video ..."
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default Search;
