// pages/index.js
import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';


const IndexPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    
    fetch('https://localhost:8080/books')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
        setFilteredBooks(data.items);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleSearch = (searchText) => {
    const filtered = books.filter((book) =>
      book.author.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center"
    style={{
      backgroundImage: `url('https://images.alphacoders.com/132/1326370.png')`, // Replace with your image path
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment:'fixed' 
    }}>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
