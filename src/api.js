import axios from 'axios';

// URL of the public API
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch posts from the API
export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
