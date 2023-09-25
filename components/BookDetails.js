// components/BookDetails.js
import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <img
              src={book.image_url}
              alt={book.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold">{book.title}</h2>
            <p className="text-gray-600 text-lg mb-4">Author: {book.author}</p>
            <p className="text-gray-600 text-lg mb-4">Genre: {book.genre}</p>
            <p className="text-gray-700 text-base">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
