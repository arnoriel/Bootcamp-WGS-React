// header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-title">My Website</h1>
            <nav className="header-nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/azriel" className="nav-link">Azriel</Link>
                <Link to="/comment" className="nav-link">Comment</Link>
                <Link to="/countingpage" className="nav-link">Counting</Link>
                <Link to="/clock" className="nav-link">Clock</Link>
            </nav>
        </header>
    );
}
