import React, { useState } from 'react';
import axios from 'axios';
import './ImageSearch.css'; // Buat file CSS untuk styling jika diperlukan

const ImageSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query },
                headers: {
                    Authorization: `Client-ID lOhVJpJWNOjR1tBiQ6waLVjJfLAZ2tkSDzQrxZf8ObA`
                }
            });

            console.log(response); // Untuk melihat respons di bagian network inspect
        } catch (error) {
            console.error('Error fetching images from Unsplash', error);
        }

        setLoading(false);
    };

    return (
        <div className="image-search">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for images..."
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
        </div>
    );
};

export default ImageSearch;
