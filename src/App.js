// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './components/BooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import NavBar from './components/NavBar'; 
import Home from './components/Home'; 
import Footer from './components/Footer'; 
import './index.css';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
