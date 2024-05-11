import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBooks } from '../api';
import Card from 'react-bootstrap/Card';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul className="d-flex flex-wrap justify-content-between list-unstyled">
        {books.map(book => (
          <li key={book.id} className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <Link to={`/books/${book.id}`}>{book.title}</Link>
                </Card.Title>
                {book.subtitle && (
                  <Card.Subtitle className="mb-2 text-muted">
                    {book.subtitle}
                  </Card.Subtitle>
                )}
                {book.description && (
                  <Card.Text>
                    {book.description.length > 100
                      ? `${book.description.slice(0, 100)}...`
                      : book.description}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
