import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css'; 
import img1 from '../../assets/10001.jpg';
import img2 from '../../assets/10002.jpg';
import img3 from '../../assets/10003.jpg';
import img4 from '../../assets/10004.jpg';
import img5 from '../../assets/10005.jpg';
import img6 from '../../assets/10006.jpg';

const CarouselComponent = () => {
  const items = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    // Add more items as needed
  ];

  return (
    <section className="carousel-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} showIndicators={false}>
        {items.map((item, index) => (
          <div key={index} className="carousel__item">
            <img src={item.image} alt={`Carousel item ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
