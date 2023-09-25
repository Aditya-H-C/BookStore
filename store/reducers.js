import { createSlice } from '@reduxjs/toolkit';

const initialBooksState = {
  data: [],
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {
    fetchBooksRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchBooksSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchBooksFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } = booksSlice.actions;

export default booksSlice.reducer;
