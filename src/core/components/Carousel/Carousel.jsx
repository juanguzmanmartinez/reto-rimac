import { useState, useEffect } from 'react';
import './carousel.scss';
import Icon from '../Icon/Icon';
const Carousel = ({ children }) => {
  const totalSlides = 5;
  const [slidesPerPage, setSlidesPerPage] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - slidesPerPage : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - slidesPerPage ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerPage(window.screen.width < 680 ? 1 : 3);
      setCurrentSlide((prevSlide) =>
        Math.min(prevSlide, totalSlides - slidesPerPage)
      );
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [totalSlides, slidesPerPage]);
  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{
              transform:
                slidesPerPage === 1
                  ? `translateX(-${currentSlide * 100}%)`
                  : `translateX(-${
                      currentSlide * (currentSlide === 1 ? 320 : 320)
                    }px)`,
            }}
          >
            {children}
          </div>
        </div>
        <div className="controls">
          <button
            className="controls__button"
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            <Icon iconName={'prev'} />
          </button>
          <button
            className="controls__button"
            onClick={handleNext}
            disabled={currentSlide === totalSlides - slidesPerPage}
          >
            <Icon iconName={'next'} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
