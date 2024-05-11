import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../api';

const BookDetailsPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        getBookById(id)
            .then(data => setBook(data))
            .catch(error => console.error('Error fetching book details:', error));
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>ISBN: {book.isbn}</p>
            <p>Page Count: {book.pageCount}</p>
            <p>Authors: {book.authors.join(', ')}</p>
        </div>
    );
};

export default BookDetailsPage;