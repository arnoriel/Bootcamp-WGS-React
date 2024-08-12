import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <h1 className="header-title">Experiment React</h1>
            <nav className="header-nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/azriel" className="nav-link">Azriel</Link>
                <Link to="/comment" className="nav-link">Comment</Link>
                <Link to="/countingpage" className="nav-link">Counting</Link>
                <Link to="/clock" className="nav-link">Clock</Link>
                {/* Dropdown untuk halaman pencarian */}
                <div className="dropdown">
                    <button onClick={toggleDropdown} className="nav-link dropdown-toggle">
                        API Features
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <Link to="/imagesearch" className="dropdown-item">Image Search</Link>
                            <Link to="/videosearch" className="dropdown-item">Video Search</Link>
                        </div>
                    )}
                </div>
                <Link to="/form" className="nav-link">Form</Link>
            </nav>
        </header>
    );
}
