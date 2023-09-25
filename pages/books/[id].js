// pages/book/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BookDetails from '../../components/BookDetails';

const BookDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the book ID from the URL parameter
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch the book details by ID
    fetch(`https://localhost:8080/books/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        return response.json();
      })
      .then((data) => {
        setBook(data); // Set the book details when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching book details:', error);
      });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>; // Handle loading state or errors
  }

  return (
    <div className="container mt-30 mb-30 min-h-screen flex flex-col justify-center"
    style={{
      backgroundImage: `url('https://images.alphacoders.com/132/1326370.png')`, // Replace with your image path
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment:'fixed' 
    }}>
      <BookDetails book={book} /> {/* Render the BookDetails component with book details */}
    </div>
  );
};

export default BookDetailsPage;
