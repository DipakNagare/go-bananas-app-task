import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { fetchPosts } from './api';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import './App.css';

// Main application component
const App = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPosts();
      setItems(data);
      setFilteredItems(data);
    };

    getData();
  }, []);

  // Filter items based on the search term
  useEffect(() => {
    setFilteredItems(
      items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, items]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        GoBananas App
      </Typography>
      <SearchBar onSearch={setSearchTerm} />
      <ItemList items={filteredItems} />
    </Container>
  );
};

export default App;
