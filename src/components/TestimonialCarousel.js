import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  { name: 'John Doe', text: '\"Glad to be under the training of Mike Hesson sir. He is very down to earth to all players...\"' },
  { name: 'Steve Smith', text: '\"My coach Gary Kirsten understands my playing weaknesses, provides detailed insights for improvement...\"' },
  { name: 'Bob Johnson', text: '\"Highly recommended. Great support and training from scratch for beginners like me...\"' },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <p className="testimonial-text" style={{ textAlign: 'center' }}>{testimonial.text}</p>
          <p className="testimonial-author" style={{ textAlign: 'center' }}>- {testimonial.name}</p>
        </div>
      ))}
    </Slider>
  );

};

export default TestimonialCarousel;
