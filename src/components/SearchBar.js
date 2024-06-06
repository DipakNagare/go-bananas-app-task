import React from 'react';
import { TextField } from '@mui/material';

// Component for the search bar
const SearchBar = ({ onSearch }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      onChange={e => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
