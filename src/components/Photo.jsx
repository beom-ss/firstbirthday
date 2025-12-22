import React, { useState } from 'react';
import './Photo.css';

const PHOTO_COUNT = 20;

const Photo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }
    if (touchStart - touchEnd < -50) {
      goToPrevious();
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? PHOTO_COUNT - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === PHOTO_COUNT - 1 ? 0 : prev + 1));
  };

  return (
    <section className='section__photo' id='photo'>
      <div 
        className='photo-slider'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className='slider-btn prev' onClick={goToPrevious}>‹</button>
        <div className='slider-track' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {Array.from({ length: PHOTO_COUNT }, (_, i) => (
            <div className='slide' key={i}>
              <img
                src={`${process.env.PUBLIC_URL}/images/photo_${i + 1}.jpg`}
                alt={`photo ${i + 1}`}
              />
            </div>
          ))}
        </div>
        <button className='slider-btn next' onClick={goToNext}>›</button>
      </div>
      <div className='slider-dots'>
        {Array.from({ length: PHOTO_COUNT }, (_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Photo;
