import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => (
  <div {...props} style={{ ...props.style, display: 'block', right: '0', zIndex: 1 }}>
  </div>
);

const PrevArrow = (props) => (
  <div {...props} style={{ ...props.style, display: 'block', left: '0', zIndex: 1 }}>
  </div>
);
const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    require('../images/image1.jpeg'),
    require('../images/image2.jpeg'),
    require('../images/image3.jpeg'),
    require('../images/image4.jpeg'),
    require('../images/image5.jpeg'),
  ];

  const imageStyle = {
    width: '100%',
    height: '1000px',
    objectFit: 'cover',
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={{ width: '100%' }}>
          <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
        </div>
      ))}
    </Slider>
  );


};
export default ImageCarousel;

