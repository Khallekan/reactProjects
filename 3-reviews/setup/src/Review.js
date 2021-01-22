import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [review] = useState(people);
  const [index, setIndex] = useState(0);
  const { image, job, name, text } = review[index];
  // console.log(review);
  // console.log(image);

  // useEffect(() => {
  //   if (review.length - 1 > index) {
  //     setIndex(0);
  //   }
  //   if (index < 0) {
  //     let newIndex = review.length - 1;
  //     setIndex(newIndex);
  //   }
  // }, [index]);

  const checkIndex = (index) => {
    let reviewIndex = review.length - 1;
    if (index < 0) {
      return reviewIndex;
    }
    if (index > reviewIndex) {
      return 0;
    }
    return index;
  };

  const previous = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const random = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * review.length);
      if (newIndex === index) {
        newIndex = index + 1;
      }
      return checkIndex(newIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={previous}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={random}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
