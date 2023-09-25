import axios from 'axios';
import { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } from './reducers'; // Import the action creators from your reducers

// Async Action to Fetch Books
export const fetchBooks = (query) => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    const response = await axios.get(`https://localhost:8080/books?query=${query}`);
    const data = response.data;
    dispatch(fetchBooksSuccess(data));
  } catch (error) {
    dispatch(fetchBooksFailure(error.message));
  }
};
