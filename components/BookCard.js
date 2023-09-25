// components/BookCard.js
import React from 'react';
import Link from 'next/link';

const BookCard = ({ book }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out bg-white">
      <div className="bg-white p-4 flex items-center justify-center">
        <img
          src={book.image_url}
          alt={book.title}
          className="w-60 h-60 object-contain rounded-lg"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">Author: {book.author}</p>
        <p className="text-gray-700 text-base">Genre: {book.genre}</p>
        <p className="text-green-600 text-base font-semibold">Price: ₹{book.cost}</p>
        <Link href={`/books/${book.id}`}className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full py-2 px-4 mt-2 block text-center">
            Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
