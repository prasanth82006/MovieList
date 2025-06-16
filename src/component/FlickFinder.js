import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import './FlickFinder.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FlickFinder = () => {
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const handleChange = (direction) => {
    setId((prev) => (prev + direction + 4) % 4);
  };

  const handleDotClick = (index) => {
    setId(index);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setId((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timerId);
  }, []);

  const classNames = [
    'https://img.freepik.com/free-photo/3d-rendering-hexagonal-texture-background_23-2150796421.jpg',
    'https://static.vecteezy.com/system/resources/previews/040/890/255/non_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg',
    'https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg',
  ];

  return (
    <div
      className="flick-container"
      style={{ backgroundImage: `url(${classNames[id]})` }}
    >
      <Header />
      <button onClick={() => handleChange(-1)} className="nav-button left">
        <ArrowBackIosNewIcon />
      </button>
      <div className="text-content">
        <h1 className="head">Bring the Big Screen to Your Screen</h1>
        <p className="para1">
          Discover, critique, and celebrate movies with honest reviews and
          fresh takes on every film.
        </p>
        <button className="discover" onClick={() => navigate('/movies')}>
          Discover More
        </button>
      </div>
      <button onClick={() => handleChange(1)} className="nav-button right">
        <ArrowForwardIosIcon />
      </button>
      <div className="carousel-dots">
        {classNames.map((_, index) => (
          <span
            key={index}
            className={`dot ${id === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FlickFinder;