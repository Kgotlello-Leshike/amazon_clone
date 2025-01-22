import React from 'react';
import "./Home.css";
import Products from './Products';

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img
                src="https://m.media-amazon.com/images/I/71k7R47IAIL._SX3000_.jpg"
                alt="Hero image" 
                className="home_image"
                />
                <Products />
                </div>
        </div>
    )
}

export default Home