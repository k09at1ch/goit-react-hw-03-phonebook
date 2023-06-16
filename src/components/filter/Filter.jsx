import React from 'react';

function Filter(props) {
  const handleSearchChange = event => {
    props.onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={props.searchTerm}
      onChange={handleSearchChange}
    />
  );
}

export default Filter;
